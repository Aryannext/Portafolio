import React, { Suspense } from "react";
import Link from "next/link";
import { footer } from "./config";
import { Button } from "../ui/button";
import SocialMediaButtons from "../social/social-media-icons";
import { config } from "@/data/config";

// El año se lee en tiempo de ejecución, así que Next no puede prerenderizarlo:
// exige que vaya dentro de un <Suspense> (ver el uso más abajo). Tampoco puede
// ser `async`, porque Next 16 ya no admite componentes de cliente asíncronos.
function CopyrightYear() {
  return <>{new Date().getFullYear()}</>;
}

function Footer() {
  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t border-border px-4 py-6 sm:flex-row md:px-6 sm:justify-between">
      <div className="flex flex-col gap-1">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          ©{" "}
          <Suspense fallback={null}>
            <CopyrightYear />
          </Suspense>{" "}
          {config.author}. Todos los derechos reservados.
        </p>
        {/* Crédito al autor de la plantilla base: lo pide en su README. Ver CREDITS.md */}
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Construido sobre{" "}
          <Link
            href="https://github.com/Naresh-Khatri/3d-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-foreground"
          >
            3d-portfolio
          </Link>{" "}
          de{" "}
          <Link
            href="https://github.com/Naresh-Khatri"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-foreground"
          >
            Naresh Khatri
          </Link>
          .
        </p>
      </div>
      <SocialMediaButtons />
      <nav className="flex gap-4 sm:gap-6 z-10">
        {footer.map((link, index) => {
          const { title, href } = link;

          return (
            <Link
              className="text-xs underline-offset-4 hover:underline"
              href={href}
              key={`l_${index}`}
            >
              <Button variant={"link"}>{title}</Button>
            </Link>
          );
        })}
      </nav>
    </footer>
  );
}

export default Footer;
