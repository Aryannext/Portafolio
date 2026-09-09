const config = {
  title: "Cristian Cantillo Mejía | Desarrollador de Software",
  description: {
    long: "Portafolio de Cristian Cantillo Mejía, desarrollador de software en formación (Tecnólogo en Análisis y Desarrollo de Software, SENA). Aplicaciones web y móviles con bases de datos nativas y sincronización offline-first. Proyectos: Costura App, Sistema Jurídico y sincronización Web/App nativa.",
    short:
      "Portafolio de Cristian Cantillo Mejía, desarrollador de software enfocado en web y móvil con sincronización offline-first.",
  },
  keywords: [
    "Cristian Cantillo Mejía",
    "portafolio",
    "desarrollador de software",
    "ADSO",
    "SENA",
    "Florencia",
    "Caquetá",
    "Colombia",
    "desarrollo web",
    "aplicaciones móviles",
    "Vue 3",
    "React",
    "Capacitor",
    "SQLite",
    "offline-first",
  ],
  author: "Cristian Cantillo Mejía",
  email: "cristiamejia155@gmail.com",
  site: "https://proyectosena.online",

  // Datos propios, usados en el hero, el CV y los metadatos
  rol: "Desarrollador de Software",
  ubicacion: "Florencia, Caquetá — Colombia",
  telefono: "+57 320 603 4364",
  iniciales: "CM",
  formacion: "Tecnólogo en ADSO — SENA (2024 — 2026)",
  disponibilidad: "Remoto o presencial",

  // Botón de estrellas del encabezado: el repositorio de este portafolio.
  // Debe existir siempre; si no, la consulta a la API de GitHub falla en cada
  // carga (los errores no se cachean) y agota el límite de 60 peticiones/hora.
  githubUsername: "Aryannext",
  githubRepo: "Portafolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    github: "https://github.com/Aryannext",
    linkedin: "https://www.linkedin.com/in/cristia-mejia-23a3a2435/",
  },
};
export { config };
