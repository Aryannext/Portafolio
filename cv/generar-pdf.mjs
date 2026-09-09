/**
 * Genera public/cv-cristian-cantillo-mejia.pdf a partir de cv/cv-es.html.
 *
 *   node cv/generar-pdf.mjs
 *
 * Se imprime con Chrome (o Edge) en modo headless en vez de una librería de
 * PDF porque así el CV se escribe en HTML y CSS —lo mismo que ya sabemos
 * tocar— y el resultado es texto de verdad, seleccionable y legible por los
 * filtros automáticos de las bolsas de empleo, no una imagen.
 *
 * El PDF vive en public/ y se sube al repositorio a propósito: el sitio lo
 * sirve tal cual y el despliegue no necesita tener un navegador instalado.
 */
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const fuente = join(raiz, "cv", "cv-es.html");
const salida = join(raiz, "public", "cv-cristian-cantillo-mejia.pdf");

const candidatos = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
].filter(Boolean);

const navegador = candidatos.find((ruta) => existsSync(ruta));
if (!navegador) {
  console.error(
    "No encontré Chrome ni Edge. Instala uno, o pasa la ruta en CHROME_PATH."
  );
  process.exit(1);
}

if (!existsSync(fuente)) {
  console.error(`No existe ${fuente}`);
  process.exit(1);
}

execFileSync(
  navegador,
  [
    "--headless",
    "--disable-gpu",
    "--no-sandbox",
    // Sin encabezado ni pie: si no, Chrome estampa la fecha y la ruta del
    // archivo en cada hoja del CV.
    "--no-pdf-header-footer",
    `--print-to-pdf=${salida}`,
    new URL(`file://${fuente.replace(/\\/g, "/")}`).href,
  ],
  { stdio: "inherit" }
);

console.log(`Listo: ${salida}`);
