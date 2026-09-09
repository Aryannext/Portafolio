import Spline from "@splinetool/react-spline";
import type { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "404 — Página no encontrada",
  description: "La página que buscas no existe o fue movida.",
};

const NotFoundPage = () => {
  return (
    <>
      <Suspense fallback={<div>Cargando…</div>}>
        <Spline scene="/assets/404.spline" style={{ height: "100vh" }} />
      </Suspense>
    </>
  );
};

export default NotFoundPage;
