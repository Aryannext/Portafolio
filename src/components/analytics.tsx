"use client";

/**
 * Telemetría desactivada.
 *
 * La versión original de este componente enviaba el dominio del despliegue al
 * servidor del autor de la plantilla (`https://nareshkhatri.dev/api/collect`)
 * mediante `navigator.sendBeacon`, con el comentario "so I know where builds run".
 *
 * Se eliminó esa llamada: es telemetría hacia un tercero que ocurre en el
 * navegador de quien visita este sitio, y no fue una decisión de su dueño.
 * Además solo se disparaba cuando el dominio NO era localhost ni el del autor,
 * es decir, precisamente en producción.
 *
 * El componente se conserva como no-op para no romper el árbol de imports.
 * Si algún día quieres analítica propia, este es el lugar donde ponerla.
 */
export default function Analytics() {
  return null;
}
