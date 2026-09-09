import fs from "node:fs";
import path from "node:path";

import ResumeView from "./resume-view";
import { RESUME_FILE } from "./resume-path";

export const metadata = {
  title: "Hoja de vida | Cristian Cantillo Mejía",
  description:
    "Hoja de vida de Cristian Cantillo Mejía — Desarrollador de Software. Puedes verla en línea o descargar el PDF.",
};

/**
 * ¿Está el PDF en `public/`?
 *
 * Se resuelve al cargar el módulo (una sola vez, en compilación) y no dentro
 * del render: así no cuenta como IO dinámico para Cache Components y la página
 * se sigue prerenderizando estática.
 *
 * Sin esta comprobación, el `<iframe>` pedía un archivo inexistente y el
 * visitante veía dentro del visor la página 404 del sitio — con su escena 3D
 * incluida — como si la hoja de vida fuera un error.
 */
const hayPdf = fs.existsSync(path.join(process.cwd(), "public", RESUME_FILE));

export default function ResumePage() {
  return <ResumeView disponible={hayPdf} />;
}
