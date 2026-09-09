"use client";

import { useInView } from "motion/react";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Mail } from "lucide-react";
import { config } from "@/data/config";
import Link from "next/link";
import EnlaceCorreo from "../enlace-correo";

const BUTTONS = [
  {
    name: "GitHub",
    href: config.social.github,
    icon: <SiGithub size={"24"} color={"#fff"} />,
  },
  {
    name: "LinkedIn",
    href: config.social.linkedin,
    icon: <SiLinkedin size={"24"} color={"#fff"} />,
  },
];

// El correo va aparte: no es un enlace externo, y necesita copiar al
// portapapeles (ver EnlaceCorreo).
const ICONO_CORREO = <Mail size={24} color={"#fff"} />;

const SocialMediaButtons = () => {
  const ref = useRef<HTMLDivElement>(null);
  const show = useInView(ref, { once: true });
  return (
    <div ref={ref} className="z-10">
      {show && (
        <>
          {BUTTONS.map((button) => (
            <Link href={button.href} key={button.name} target="_blank">
              <Button variant={"ghost"}>{button.icon}</Button>
            </Link>
          ))}
          <EnlaceCorreo ariaLabel="Escribir un correo">
            <Button variant={"ghost"}>{ICONO_CORREO}</Button>
          </EnlaceCorreo>
        </>
      )}
    </div>
  );
};

export default SocialMediaButtons;
