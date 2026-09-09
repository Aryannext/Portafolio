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
      from: "Portafolio <onboarding@resend.dev>",
      to: [config.email],
      subject: "Contacto desde el portafolio",
      react: EmailTemplate({
        fullName: zodData.fullName,
        email: zodData.email,
        message: zodData.message,
      }) as React.ReactElement,
    });

    if (resendError) {
      return Response.json(
        { error: "No se pudo enviar el correo." },
        { status: 500 },
      );
    }

    return Response.json(resendData);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
