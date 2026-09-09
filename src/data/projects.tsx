import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
// Spline has no thesvg entry — keep the Three.js mark as its stand-in.
import {
  SiAmazonwebservices,
  SiAndroid,
  SiCapacitor,
  SiGit,
  SiGithubactions,
  SiJsonwebtokens,
  SiKotlin,
  SiMysql,
  SiNginx,
  SiSqlite,
  SiThreedotjs,
  SiVite,
} from "react-icons/si";
const BASE_PATH = "/assets/projects-screenshots";

// Renders a brand SVG from /public as a monochrome glyph that inherits the
// surrounding text color (the skill dock styles every icon via currentColor),
// so full-color marks like Mistral flatten to match the rest of the set.
const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Ver el sitio
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Ver el código
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
// Brand chips sourced from thesvg CLI mono SVGs in /public/assets/logos,
// rendered via MaskIcon so each one inherits the dock's currentColor.
const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});
const PROJECT_SKILLS = {
  next: brand("Next.js", "nextdotjs-mono.svg"),
  chakra: brand("Chakra UI", "chakra-ui-mono.svg"),
  node: brand("Node.js", "nodedotjs-mono.svg"),
  python: brand("Python", "python-mono.svg"),
  prisma: brand("Prisma", "prisma-mono.svg"),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  mongo: brand("MongoDB", "mongodb-mono.svg"),
  express: brand("Express", "express-mono.svg"),
  reactQuery: brand("React Query", "react-query-mono.svg"),
  shadcn: brand("shadcn/ui", "shadcn-ui-mono.svg"),
  // Not in the thesvg registry — keep the existing custom logo.
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: brand("Tailwind", "tailwind-css-mono.svg"),
  docker: brand("Docker", "docker-mono.svg"),
  // Not in the thesvg registry — keep the text mark.
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: brand("Firebase", "firebase-mono.svg"),
  sockerio: brand("Socket.io", "socketdotio-mono.svg"),
  js: brand("JavaScript", "javascript-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  vue: brand("Vue.js", "vuedotjs-mono.svg"),
  react: brand("React.js", "react-mono.svg"),
  sanity: brand("Sanity", "sanity-mono.svg"),
  // Not in the thesvg registry — keep the Three.js stand-in.
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: brand("GSAP", "gsap-mono.svg"),
  motion: brand("Motion", "motion.svg"),
  supabase: brand("Supabase", "supabase-mono.svg"),
  trpc: brand("tRPC", "trpc-mono.svg"),
  drizzle: brand("Drizzle ORM", "drizzle-mono.svg"),
  hono: brand("Hono", "hono-mono.svg"),
  redis: brand("Redis / BullMQ", "redis-mono.svg"),
  cloudflare: brand("Cloudflare", "cloudflare-mono.svg"),
  // React Native reuses the React mark.
  reactNative: brand("React Native", "react-mono.svg"),
  betterAuth: brand("Better Auth", "better-auth-mono.svg"),
  // Not in the thesvg registry — keep the text marks.
  zustand: {
    title: "Zustand",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Zu</span>,
  },
  partykit: {
    title: "PartyKit",
    bg: "black",
    fg: "white",
    icon: <span className="text-base">🎈</span>,
  },
  hocuspocus: {
    title: "Hocuspocus",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Hp</span>,
  },
  // React Flow ships under the xyflow brand.
  reactFlow: brand("React Flow", "xyflow-mono.svg"),
  codemirror: brand("CodeMirror", "codemirror-mono.svg"),
  // "Satori / sharp" — uses the sharp mark.
  satori: brand("Satori / sharp", "sharp-mono.svg"),
  turborepo: brand("Turborepo", "turborepo-mono.svg"),
  // Vercel AI SDK uses the Vercel mark.
  aiSDK: brand("Vercel AI SDK", "vercel-mono.svg"),
  anthropic: brand("Anthropic Claude", "anthropic-mono.svg"),
  mistral: brand("Mistral AI", "mistral-ai-mono.svg"),
  // Not in the thesvg registry — keep the text mark.
  nextIntl: {
    title: "next-intl",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">i18n</span>,
  },
  // Not in the thesvg registry — keep the text marks.
  expo: {
    title: "Expo",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Expo</span>,
  },
  mcp: {
    title: "MCP",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">MCP</span>,
  },
};
// Tecnologías del stack de Cristian sin SVG propio en /assets/logos.
// Se usan los iconos de react-icons, que ya es dependencia del proyecto.
const iconoReact = (title: string, Icono: React.ComponentType): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <Icono />,
});

const SKILLS = {
  ...PROJECT_SKILLS,
  mysql: iconoReact("MySQL", SiMysql),
  sqlite: iconoReact("SQLite", SiSqlite),
  kotlin: iconoReact("Kotlin", SiKotlin),
  capacitor: iconoReact("Capacitor", SiCapacitor),
  android: iconoReact("Android", SiAndroid),
  git: iconoReact("Git", SiGit),
  vite: iconoReact("Vite", SiVite),
  nginx: iconoReact("Nginx", SiNginx),
  aws: iconoReact("AWS S3", SiAmazonwebservices),
  jwt: iconoReact("JWT", SiJsonwebtokens),
  github: iconoReact("GitHub Actions", SiGithubactions),
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

/**
 * Proyectos reales de Cristian: académicos y personales, desarrollados solo.
 * Las capturas van en /assets/projects-screenshots/<id>/landing.png
 */
const projects: Project[] = [
  {
    id: "sistema-juridico",
    category: "Plataforma web",
    title: "Sistema Jurídico",
    src: "/assets/projects-screenshots/sistema-juridico/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        SKILLS.react,
        SKILLS.vite,
        SKILLS.tailwind,
        SKILLS.shadcn,
      ],
      backend: [
        SKILLS.node,
        SKILLS.express,
        SKILLS.postgres,
        SKILLS.prisma,
        SKILLS.jwt,
        SKILLS.aws,
        SKILLS.docker,
        SKILLS.nginx,
      ],
    },
    live: "https://proyectosena.online/sistema-juridico",
    github: "https://github.com/Aryannext/sistema-juridico",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Gestión de casos legales y expedientes, desplegada y accesible en
            línea.
          </TypographyP>
          <TypographyP className="font-mono">
            Plataforma completa para administrar casos, expedientes y
            actuaciones. Es mi proyecto más grande: React 19 con Vite en el
            frente, API en Express sobre Node 22, y PostgreSQL 16 con Prisma
            como ORM.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Seguridad</TypographyH3>
          <p className="font-mono mb-2">
            Autenticación con JWT y contraseñas cifradas con bcrypt. La API va
            detrás de Helmet, CORS y limitación de peticiones, para que un
            cliente no pueda martillarla.
          </p>

          <TypographyH3 className="my-4 mt-8">Archivos y correos</TypographyH3>
          <p className="font-mono mb-2">
            Los documentos de cada expediente se guardan en S3 con el SDK de AWS,
            no en el disco del servidor. Los PDFs se generan con PDFKit y las
            notificaciones salen por Nodemailer.
          </p>

          <TypographyH3 className="my-4 mt-8">Cómo corre</TypographyH3>
          <p className="font-mono mb-2">
            Todo va en Docker Compose, con su propio contenedor de PostgreSQL
            para no depender de lo que tenga instalado el servidor. Nginx sirve
            el frontend compilado. Pruebas con Jest y Supertest en el backend,
            Cypress en el navegador.
          </p>
        </div>
      );
    },
  },
  {
    id: "costura-app",
    category: "Aplicación móvil y web",
    title: "Costura App (Atelier Manager)",
    src: "/assets/projects-screenshots/costura-app/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [SKILLS.vue, SKILLS.vite, SKILLS.js],
      backend: [
        SKILLS.capacitor,
        SKILLS.sqlite,
        SKILLS.android,
        SKILLS.github,
      ],
    },
    live: "https://proyectosena.online/costura",
    github: "https://github.com/Aryannext/Costura-app",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Gestión de pedidos y medidas para un taller de costura, en el celular
            y en la web.
          </TypographyP>
          <TypographyP className="font-mono">
            Vue 3 con Vite, empaquetado a Android con Capacitor 8. La idea era
            que una modista pudiera registrar pedidos y medidas en el taller
            aunque no tuviera internet, y que al reconectar todo subiera solo.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Primero sin conexión</TypographyH3>
          <p className="font-mono mb-2">
            Los datos viven en SQLite nativo dentro del dispositivo, con el
            plugin de la comunidad de Capacitor. La app funciona completa sin
            señal; la sincronización ocurre después.
          </p>

          <TypographyH3 className="my-4 mt-8">Detalles que aprendí</TypographyH3>
          <p className="font-mono mb-2">
            Contraseñas cifradas con bcrypt, gráficas con Chart.js, y un tour
            guiado con driver.js para que la usuaria no se pierda la primera vez.
            Las actualizaciones llegan por aire con Capacitor Updater, sin
            reinstalar la app.
          </p>

          <TypographyH3 className="my-4 mt-8">Pruebas y despliegue</TypographyH3>
          <p className="font-mono mb-2">
            Vitest y Vue Test Utils para las unidades, Playwright para el flujo
            completo, y GitHub Actions ejecutándolo todo en cada push.
          </p>
        </div>
      );
    },
  },
  {
    id: "sincronizacion-nativa",
    category: "Arquitectura",
    title: "Sincronización Web / App nativa",
    src: "/assets/projects-screenshots/sincronizacion-nativa/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [SKILLS.react, SKILLS.vite],
      backend: [
        SKILLS.node,
        SKILLS.express,
        SKILLS.postgres,
        SKILLS.kotlin,
        SKILLS.android,
        SKILLS.sqlite,
      ],
    },
    live: "#",
    github: "https://github.com/Aryannext/Sincronizaci-n-Web---app-Nativa",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Cómo se ponen de acuerdo una app nativa y una plataforma web cuando
            ninguna de las dos tiene internet garantizado.
          </TypographyP>
          <TypographyP className="font-mono">
            Un centro de mando en React 19 con Vite, una API en Express 5 sobre
            PostgreSQL, y una app Android en Kotlin con Room. Es el proyecto
            donde más aprendí: el problema no es mover datos, es decidir qué pasa
            cuando los dos lados cambiaron el mismo registro.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Conflictos de escritura</TypographyH3>
          <p className="font-mono mb-2">
            Cada registro lleva un <code>uuid</code> y un número de versión. Al
            reconectar se comparan y se resuelve con una regla explícita, en vez
            de dejar que gane el último que escriba por azar.
          </p>

          <TypographyH3 className="my-4 mt-8">Nada se borra de verdad</TypographyH3>
          <p className="font-mono mb-2">
            El borrado es lógico: la fila se marca, no se elimina. Si se borrara
            de verdad, el otro lado no tendría cómo enterarse de que desapareció.
            Una tabla <code>sync_log</code> guarda el rastro de cada cambio.
          </p>

          <TypographyH3 className="my-4 mt-8">En el teléfono</TypographyH3>
          <p className="font-mono mb-2">
            Room sobre SQLite guarda todo localmente, y WorkManager se encarga de
            sincronizar en segundo plano cuando el sistema lo permite — sin
            drenar la batería ni exigir que la app esté abierta.
          </p>
        </div>
      );
    },
  },
];
export default projects;
