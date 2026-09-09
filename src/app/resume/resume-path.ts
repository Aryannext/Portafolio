/**
 * Ruta pública del PDF de la hoja de vida.
 *
 * Vive en su propio módulo para que el Server Component (`page.tsx`) pueda
 * comprobar si el archivo existe sin tener que importar el componente cliente.
 */
export const RESUME_FILE = "cv-cristian-cantillo-mejia.pdf";
export const RESUME_PATH = `/${RESUME_FILE}`;
