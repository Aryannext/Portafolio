import { Link } from "@/types";

// Las miniaturas son capturas reales de cada sección, no los marcadores
// genéricos que traía la plantilla. El nombre lleva versión porque el
// despliegue viejo sirvió /assets con caché de un año: sin cambiar el nombre,
// quien ya entró seguiría viendo las de antes.

const links: Link[] = [
  {
    title: 'Inicio',
    href: '/',
    thumbnail: '/assets/nav-link-previews/landing-v2.webp'
  },
  {
    // Apuntaba a '/#about', que no existe en ninguna parte: era un enlace muerto.
    // La sección es `id="experience"` y en pantalla se titula "Formación".
    title: 'Formación',
    href: '/#experience',
    thumbnail: '/assets/nav-link-previews/experience-v2.webp'
  },
  {
    title: 'Habilidades',
    href: '/#skills',
    thumbnail: '/assets/nav-link-previews/skills-v2.webp'
  },
  {
    title: 'Proyectos',
    href: '/#projects',
    thumbnail: '/assets/nav-link-previews/projects-v2.webp'
  },
  {
    title: 'Contacto',
    href: '/#contact',
    thumbnail: '/assets/nav-link-previews/contact-v2.webp'
  }
];

export { links };
