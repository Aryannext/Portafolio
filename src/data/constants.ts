// thoda zada ts ho gya idhar
export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  VUE = "vue",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  PRETTIER = "prettier",
  NPM = "npm",
  FIREBASE = "firebase",
  WORDPRESS = "wordpress",
  LINUX = "linux",
  DOCKER = "docker",
  NGINX = "nginx",
  AWS = "aws",
  GCP = "gcp",
  VIM = "vim",
  VERCEL = "vercel",
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
  SkillNames.AWS,
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
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription:
      "JavaScript avisando de los errores antes de que exploten.",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "Los cimientos. Sin esto no hay nada.",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "Donde el diseño por fin se vuelve real.",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: "Con esto está hecho este portafolio.",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.VUE]: {
    id: 6,
    name: "vue",
    label: "Vue",
    shortDescription:
      "Con esto construí Costura App.",
    color: "#41b883",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription:
      "React con las pilas puestas: rutas, servidor y build en uno.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Tailwind",
    shortDescription: "Estilos sin salir del HTML. Se vuelve rápido cuando le agarras el ritmo.",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "JavaScript también del lado del servidor.",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Express",
    shortDescription: "La API del Sistema Jurídico y del proyecto de sincronización.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "Cuando el proyecto empieza a crecer en serio.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "Datos sin esquema fijo, para cuando aún no sabes la forma.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "Mi máquina del tiempo. Me ha salvado varias veces.",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "Ahí vive todo lo que he construido.",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.PRETTIER]: {
    id: 15,
    name: "prettier",
    label: "Prettier",
    shortDescription: "El que acaba las discusiones sobre formato.",
    color: "#f7b93a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prettier/prettier-original.svg",
  },
  [SkillNames.NPM]: {
    id: 16,
    name: "npm",
    label: "NPM",
    shortDescription: "Una línea y ya tienes medio internet instalado. Para bien y para mal.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 17,
    name: "firebase",
    label: "Firebase",
    shortDescription:
      "Backend sin montar backend.",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  [SkillNames.WORDPRESS]: {
    id: 18,
    name: "wordpress",
    label: "WordPress",
    shortDescription: "Buena parte de la web sigue corriendo sobre esto.",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  [SkillNames.LINUX]: {
    id: 19,
    name: "linux",
    label: "Linux",
    shortDescription: "Donde vive el pingüino. Y donde corre todo.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "docker",
    label: "Docker",
    shortDescription: "Funciona en mi máquina, y ahora también en la tuya.",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.NGINX]: {
    id: 21,
    name: "nginx",
    label: "NginX",
    shortDescription: "El portero de mi VPS: reparte el tráfico y sirve los proyectos.",
    color: "#008000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  },
  [SkillNames.AWS]: {
    id: 22,
    name: "aws",
    label: "AWS",
    shortDescription:
      "S3 para guardar los archivos del Sistema Jurídico.",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
  },
  [SkillNames.GCP]: {
    id: 25,
    name: "gcp",
    label: "Google Cloud",
    shortDescription:
      "La otra nube grande.",
    color: "#4285f4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  [SkillNames.VIM]: {
    id: 23,
    name: "vim",
    label: "Vim",
    shortDescription: "Se entra fácil. Salir es otra historia.",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
  },
  [SkillNames.VERCEL]: {
    id: 24,
    name: "vercel",
    label: "Vercel",
    shortDescription:
      "Un push y ya está desplegado.",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
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

