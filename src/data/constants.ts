// thoda zada ts ho gya idhar
export enum SkillNames {
  JS = "js",
  PHP = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  VUE = "vue",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  // Teclas reaprovechadas. El valor es el nombre del objeto DENTRO de la escena
  // 3D, que sigue siendo el de la tecnología que traía la plantilla; el logo
  // que se ve y la etiqueta ya son otros (ver cv/logos-teclado y el README).
  // Cambiarlo aquí no renombra nada en el archivo .spline.
  ANDROID = "mongodb",
  GIT = "git",
  GITHUB = "github",
  CAPACITOR = "prettier",
  NPM = "npm",
  VITE = "firebase",
  SQLITE = "wordpress",
  LINUX = "linux",
  DOCKER = "docker",
  NGINX = "nginx",
  CLOUDFLARE = "aws",
  GCP = "gcp",
  KOTLIN = "vim",
  PRISMA = "vercel",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
/**
 * Las tecnologías que Cristian realmente maneja, de las que trae la escena 3D.
 *
 * Las demás teclas siguen existiendo en el teclado (borrarlas exige editar la
 * escena en Spline), pero se apagan: se pintan de gris oscuro y no reaccionan
 * al pasar el cursor ni al presionarlas. Así el teclado no dice que sabes cosas
 * que no sabes, y queda el hueco listo por si más adelante agregas alguna.
 */
export const MIS_SKILLS: SkillNames[] = [
  SkillNames.HTML,
  SkillNames.CSS,
  SkillNames.JS,
  SkillNames.REACT,
  SkillNames.VUE,
  SkillNames.NODEJS,
  SkillNames.POSTGRES,
  SkillNames.GIT,
  SkillNames.GITHUB,
  SkillNames.LINUX,
  SkillNames.DOCKER,
  SkillNames.NEXTJS,
  SkillNames.TAILWIND,
  SkillNames.NGINX,
  SkillNames.NPM,
  SkillNames.EXPRESS,
  SkillNames.VITE,
  SkillNames.PRISMA,
  SkillNames.SQLITE,
  SkillNames.CAPACITOR,
  SkillNames.ANDROID,
  SkillNames.KOTLIN,
  SkillNames.CLOUDFLARE,
  SkillNames.PHP,
];

/** Color de las teclas apagadas. */
export const COLOR_TECLA_APAGADA = "#2a2a30";

export const esMiSkill = (nombre: string): boolean =>
  MIS_SKILLS.includes(nombre as SkillNames);

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "Donde todo empezó para mí.",
    color: "#f0db4f",
    icon: "/assets/logos-skills/javascript-original.svg",
  },
  [SkillNames.PHP]: {
    id: 2,
    name: "ts",
    label: "PHP",
    shortDescription: "Con lo que aprendí a montar un servidor que devuelve páginas.",
    color: "#777bb4",
    icon: "/assets/logos-skills/php-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "Los cimientos. Sin esto no hay nada.",
    color: "#e34c26",
    icon: "/assets/logos-skills/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "Donde el diseño por fin se vuelve real.",
    color: "#563d7c",
    icon: "/assets/logos-skills/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: "Con esto está hecho este portafolio.",
    color: "#61dafb",
    icon: "/assets/logos-skills/react-original.svg",
  },
  [SkillNames.VUE]: {
    id: 6,
    name: "vue",
    label: "Vue",
    shortDescription:
      "Con esto construí Costura App.",
    color: "#41b883",
    icon: "/assets/logos-skills/vuejs-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription:
      "React con las pilas puestas: rutas, servidor y build en uno.",
    color: "#fff",
    icon: "/assets/logos-skills/nextjs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Tailwind",
    shortDescription: "Estilos sin salir del HTML. Se vuelve rápido cuando le agarras el ritmo.",
    color: "#38bdf8",
    icon: "/assets/logos-skills/tailwindcss-original.svg",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "JavaScript también del lado del servidor.",
    color: "#6cc24a",
    icon: "/assets/logos-skills/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Express",
    shortDescription: "La API del Sistema Jurídico y del proyecto de sincronización.",
    color: "#fff",
    icon: "/assets/logos-skills/express-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "Cuando el proyecto empieza a crecer en serio.",
    color: "#336791",
    icon: "/assets/logos-skills/postgresql-original.svg",
  },
  [SkillNames.ANDROID]: {
    id: 12,
    name: "mongodb",
    label: "Android",
    shortDescription: "Publiqué en Android la app del taller de costura y la app nativa.",
    color: "#3ddc84",
    icon: "/assets/logos-skills/android-original.svg",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "Mi máquina del tiempo. Me ha salvado varias veces.",
    color: "#f1502f",
    icon: "/assets/logos-skills/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "Ahí vive todo lo que he construido.",
    color: "#000000",
    icon: "/assets/logos-skills/github-original.svg",
  },
  [SkillNames.CAPACITOR]: {
    id: 15,
    name: "prettier",
    label: "Capacitor",
    shortDescription: "Con esto la Costura App pasó de web a aplicación de Android.",
    color: "#119eff",
    icon: "/assets/logos-skills/capacitor-original.svg",
  },
  [SkillNames.NPM]: {
    id: 16,
    name: "npm",
    label: "NPM",
    shortDescription: "Una línea y ya tienes medio internet instalado. Para bien y para mal.",
    color: "#fff",
    icon: "/assets/logos-skills/npm-original-wordmark.svg",
  },
  [SkillNames.VITE]: {
    id: 17,
    name: "firebase",
    label: "Vite",
    shortDescription: "El empaquetador de mis tres proyectos. Recarga al instante.",
    color: "#646cff",
    icon: "/assets/logos-skills/vitejs-original.svg",
  },
  [SkillNames.SQLITE]: {
    id: 18,
    name: "wordpress",
    label: "SQLite",
    shortDescription: "La base que vive dentro del celular y funciona sin internet.",
    color: "#003b57",
    icon: "/assets/logos-skills/sqlite-original.svg",
  },
  [SkillNames.LINUX]: {
    id: 19,
    name: "linux",
    label: "Linux",
    shortDescription: "Donde vive el pingüino. Y donde corre todo.",
    color: "#fff",
    icon: "/assets/logos-skills/linux-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "docker",
    label: "Docker",
    shortDescription: "Funciona en mi máquina, y ahora también en la tuya.",
    color: "#2496ed",
    icon: "/assets/logos-skills/docker-original.svg",
  },
  [SkillNames.NGINX]: {
    id: 21,
    name: "nginx",
    label: "NginX",
    shortDescription: "El portero de mi VPS: reparte el tráfico y sirve los proyectos.",
    color: "#008000",
    icon: "/assets/logos-skills/nginx-original.svg",
  },
  [SkillNames.CLOUDFLARE]: {
    id: 22,
    name: "aws",
    label: "Cloudflare",
    shortDescription: "Ahí guardo los documentos de los expedientes del Sistema Jurídico.",
    color: "#f38020",
    icon: "/assets/logos-skills/cloudflare-original.svg",
  },
  [SkillNames.GCP]: {
    id: 25,
    name: "gcp",
    label: "Google Cloud",
    shortDescription:
      "La otra nube grande.",
    color: "#4285f4",
    icon: "/assets/logos-skills/googlecloud-original.svg",
  },
  [SkillNames.KOTLIN]: {
    id: 23,
    name: "vim",
    label: "Kotlin",
    shortDescription: "La app nativa de Android que sincroniza con la plataforma web.",
    color: "#7f52ff",
    icon: "/assets/logos-skills/kotlin-original.svg",
  },
  [SkillNames.PRISMA]: {
    id: 24,
    name: "vercel",
    label: "Prisma",
    shortDescription: "El ORM con el que hablo con PostgreSQL en el Sistema Jurídico.",
    color: "#2d3748",
    icon: "/assets/logos-skills/prisma-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "2024",
    endDate: "2026",
    title: "Tecnólogo en Análisis y Desarrollo de Software",
    company: "SENA — Centro Tecnológico de la Amazonia, Florencia",
    description: [
      "Formación en desarrollo web y móvil, bases de datos y análisis de sistemas.",
      "Construí y desplegué por mi cuenta tres proyectos completos, dos de ellos accesibles en línea.",
      "Diseñé una arquitectura de sincronización offline-first entre una app nativa y una plataforma web.",
      "Actualmente busco mi primera oportunidad profesional, remota o presencial.",
    ],
    skills: [
      SkillNames.JS,
      SkillNames.HTML,
      SkillNames.CSS,
      SkillNames.REACT,
      SkillNames.VUE,
      SkillNames.NODEJS,
      SkillNames.POSTGRES,
      SkillNames.GIT,
      SkillNames.LINUX,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Aviso: el modo claro emite un trillón de lúmenes de puro resplandor.",
    "Cuidado, modo claro por delante. No intentes esto en casa.",
    "Solo profesionales entrenados aguantan tanto brillo. Ponte gafas de sol.",
    "Prepárate: el modo claro va a hacer que todo brille más que tu futuro.",
    "Activando modo claro… ¿seguro que tus ojos están listos?",
  ],
  dark: [
    "¿Modo claro? Pensé que habías perdido la cabeza… bienvenido de vuelta al lado oscuro.",
    "Volviste. Sabía que la oscuridad te llamaba.",
    "Modo oscuro activado. Tus ojos te lo agradecen.",
  ],
};

