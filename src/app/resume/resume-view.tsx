"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Download, ArrowLeft, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import ResumeDoodle from "./resume-doodle";
import { RESUME_PATH } from "./resume-path";
import { config } from "@/data/config";

export default function ResumeView({ disponible }: { disponible: boolean }) {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      {/* Hide the global nav on mobile, only while this page is mounted */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "@media (max-width: 767px){ header { display: none !important; } }",
        }}
      />

      {/* Barra superior: volver (izquierda) + descargar (derecha) */}
      <div className="mx-auto w-full max-w-4xl shrink-0 px-4 pt-16 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 flex items-center justify-between gap-4"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al portafolio
          </Link>
          {disponible && (
            <Button>
              <a
                href={RESUME_PATH}
                download
                className="flex gap-2 text-sm transition-colors hover:text-foreground"
              >
                <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                Descargar PDF
              </a>
            </Button>
          )}
        </motion.div>
      </div>

      {/* Visor del PDF — centrado en móvil (tarjeta A4 baja), arriba en escritorio (alta) */}
      <div className="mx-auto flex w-full max-w-4xl flex-1 items-center justify-center px-2 pb-6 md:items-start md:px-4 md:pb-24">
        {/* animación solo de opacidad: un ancestro transformado atraparía el botón flotante del garabato */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={
            // Con PDF hace falta el alto de una hoja A4; sin él, esa proporción
            // deja una tarjeta blanca enorme con el aviso escondido a mitad de
            // página, así que se usa una tarjeta baja.
            disponible
              ? "aspect-[210/297] w-full overflow-hidden rounded-2xl bg-white shadow-xl"
              : "w-full overflow-hidden rounded-2xl bg-white py-20 shadow-xl"
          }
        >
          {disponible ? (
            <ResumeDoodle
              src={`${RESUME_PATH}#toolbar=0&navpanes=0&view=FitH`}
              title="Cristian Cantillo Mejía — Hoja de vida"
            />
          ) : (
            <SinPdf />
          )}
        </motion.div>
      </div>
    </div>
  );
}

/**
 * Qué se ve mientras el PDF no esté subido.
 *
 * Antes el `<iframe>` cargaba una ruta inexistente y mostraba la página 404 del
 * sitio dentro del visor. Es mejor decir la verdad y dejar a mano el correo.
 */
function SinPdf() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 px-8 text-center text-neutral-700">
      <FileText className="h-10 w-10 text-neutral-400" aria-hidden />
      <p className="text-lg font-medium text-neutral-900">
        La hoja de vida en PDF aún no está publicada
      </p>
      <p className="max-w-sm text-sm text-neutral-500">
        Mientras tanto puedes ver mi formación, mis proyectos y las tecnologías
        que manejo en el portafolio, o escribirme y te la envío.
      </p>
      <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/#projects"
          className="rounded-full bg-neutral-900 px-4 py-2 text-sm text-white transition-opacity hover:opacity-90"
        >
          Ver mis proyectos
        </Link>
        <a
          href={`mailto:${config.email}`}
          className="rounded-full border border-neutral-300 px-4 py-2 text-sm transition-colors hover:bg-neutral-100"
        >
          Escribirme
        </a>
      </div>
    </div>
  );
}
