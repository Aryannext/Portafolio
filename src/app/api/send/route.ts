import { EmailTemplate } from "@/components/email-template";
import { config } from "@/data/config";
import { Resend } from "resend";
import { z } from "zod";

/**
 * El cliente de Resend se crea DENTRO del handler, no al cargar el módulo.
 *
 * Antes se instanciaba arriba con `new Resend(process.env.RESEND_API_KEY)`, y
 * como el constructor lanza si la clave falta, el `next build` fallaba entero
 * al recolectar los datos de esta ruta. Una integración opcional sin configurar
 * no debe tumbar la compilación de todo el sitio.
 *
 * Sin RESEND_API_KEY el formulario responde 503 con un mensaje claro, en vez de
 * fingir que envió algo.
 */
function obtenerResend(): Resend | null {
  const clave = process.env.RESEND_API_KEY;
  if (!clave) return null;
  return new Resend(clave);
}

const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

const Email = z.object({
  fullName: z.string().min(2, "El nombre es demasiado corto."),
  email: z.string().email({ message: "El correo no es válido." }),
  message: z.string().min(10, "El mensaje es demasiado corto."),
});

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") ?? "unknown";
    if (isRateLimited(ip)) {
      return Response.json(
        { error: "Demasiados intentos. Espera un momento e inténtalo de nuevo." },
        { status: 429 },
      );
    }

    const body = await req.json();
    const {
      success: zodSuccess,
      data: zodData,
      error: zodError,
    } = Email.safeParse(body);
    if (!zodSuccess) {
      return Response.json({ error: zodError?.message }, { status: 400 });
    }

    const resend = obtenerResend();
    if (!resend) {
      return Response.json(
        {
          error:
            "El envío de correo no está configurado. Escríbeme directo a " +
            config.email,
        },
        { status: 503 },
      );
    }

    const { data: resendData, error: resendError } = await resend.emails.send({
      // `onboarding@resend.dev` es el remitente compartido de Resend, y solo
      // deja enviar a la dirección con la que se registró la cuenta. Si
      // config.email es otra, Resend rechaza CADA envío. Para usar un remitente
      // propio hay que verificar un dominio en Resend y cambiar este `from`.
      from: "Portafolio <onboarding@resend.dev>",
      to: [config.email],
      // Sin esto, responder desde el cliente de correo contesta al remitente
      // técnico y no a la persona que escribió.
      replyTo: zodData.email,
      subject: `Contacto desde el portafolio — ${zodData.fullName}`,
      react: EmailTemplate({
        fullName: zodData.fullName,
        email: zodData.email,
        message: zodData.message,
      }) as React.ReactElement,
    });

    if (resendError) {
      // Queda en el registro del servidor para poder diagnosticarlo. No se
      // registra ni la clave ni el contenido del mensaje del visitante.
      console.error("[/api/send] Resend rechazó el envío:", {
        nombre: resendError.name,
        detalle: resendError.message,
      });
      return Response.json(
        {
          error:
            "El correo no salió. Escríbeme directo a " +
            config.email +
            " y te respondo igual.",
        },
        { status: 500 },
      );
    }

    return Response.json(resendData);
  } catch (error) {
    // `Response.json({ error })` con un Error dentro serializa a {}, así que el
    // cliente recibía un cuerpo vacío y no podía decir nada útil.
    console.error("[/api/send] Excepción no prevista:", error);
    return Response.json(
      {
        error:
          "El correo no salió. Escríbeme directo a " +
          config.email +
          " y te respondo igual.",
      },
      { status: 500 },
    );
  }
}
