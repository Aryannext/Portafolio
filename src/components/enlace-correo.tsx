"use client";

import React from "react";
import { useToast } from "@/components/ui/use-toast";
import { config } from "@/data/config";

/**
 * Enlace al correo que, además de abrirlo, lo copia al portapapeles.
 *
 * Un `mailto:` solo hace algo si el sistema tiene un programa de correo
 * asociado. Quien lee su correo en el navegador —o sea, casi todo el mundo—
 * hace clic y no pasa nada: ni se abre nada, ni sale un error, ni queda pista
 * de cuál es la dirección. En el botón que es la vía de contacto de un
 * portafolio, eso son visitas perdidas.
 *
 * Se conserva el `mailto:` para quien sí tiene cliente de correo, y encima se
 * copia la dirección y se avisa. Así el clic siempre deja algo.
 *
 * Nada de `target="_blank"`: sobre un `mailto:` abre una pestaña en blanco que
 * se queda ahí sin hacer nada.
 */
export default function EnlaceCorreo({
  children,
  className,
  ariaLabel,
}: {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  const { toast } = useToast();

  const copiar = () => {
    navigator.clipboard?.writeText(config.email).then(
      () =>
        toast({
          title: "Correo copiado",
          description: config.email,
        }),
      () =>
        // Portapapeles bloqueado (permisos, contexto inseguro): al menos que
        // vean la dirección para poder anotarla.
        toast({
          title: "Mi correo",
          description: config.email,
        })
    );
  };

  return (
    <a
      href={`mailto:${config.email}`}
      onClick={copiar}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
