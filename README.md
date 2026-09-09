# Portafolio — Cristian Cantillo Mejía

Mi portafolio como desarrollador de software. Tecnólogo en Análisis y Desarrollo
de Software (SENA), Florencia, Caquetá.

**[proyectosena.online](https://proyectosena.online)** ·
[LinkedIn](https://www.linkedin.com/in/cristia-mejia-23a3a2435/) ·
[cristiamejia155@gmail.com](mailto:cristiamejia155@gmail.com)

---

## De dónde salió esto

Está construido sobre **[3d-portfolio](https://github.com/Naresh-Khatri/3d-portfolio)**
de **[Naresh Khatri](https://github.com/Naresh-Khatri)**, que lo publicó como
código abierto y pide un enlace de vuelta a quien lo use. Este README y el pie de
página del sitio son ese crédito. El detalle completo está en
**[CREDITS.md](./CREDITS.md)**.

**Si te gusta el diseño, ve al repositorio de Naresh** — el mérito del teclado 3D
y de la arquitectura es suyo.

## Qué cambié

No es la plantilla con otro nombre. Lo que hice:

**Contenido**
- Mis datos, mis tres proyectos y mi formación real.
- Se retiró todo el contenido personal del autor original: sus fotos, su hoja de
  vida, las capturas de sus ocho proyectos y su entrada de blog.
- Interfaz completamente en español, incluidos los textos que solo lee un lector
  de pantalla.

**El teclado 3D**
- La escena de Spline trae 24 tecnologías. Solo se muestran las **16 que manejo**;
  las demás quedan ocultas e inertes, sin responder al cursor ni al teclado.
- Esto se resuelve desde el código con `visible` del runtime de Spline. No se
  puede con `color`, porque cada keycap es un grupo y no una malla.
- Las descripciones de cada tecnología están reescritas en español, contando para
  qué la uso de verdad.

**Correcciones sobre la plantilla**
- Se **desactivó la telemetría**: un componente enviaba el dominio del despliegue
  al servidor del autor original, desde el navegador de cada visitante.
- El botón "Hoja de vida" apuntaba al Google Drive del autor original.
- El diálogo de proyectos no tenía `DialogTitle`, que Radix exige para que un
  lector de pantalla anuncie la ventana al abrirse.
- `/api/send` creaba el cliente de Resend al cargar el módulo. Como su
  constructor lanza si falta la API key, **el build entero fallaba** sin ella.
  Ahora se crea dentro del handler y responde 503 con un mensaje claro.
- Se eliminaron las rutas de blog: sin artículos, `generateStaticParams` devolvía
  vacío y *Cache Components* lo trata como error de compilación.

## Los proyectos

| Proyecto | Qué es | Stack |
|---|---|---|
| [Sistema Jurídico](https://proyectosena.online/sistema-juridico) | Gestión de casos legales y expedientes | React 19, Vite, Tailwind · Node 22, Express, PostgreSQL 16 + Prisma, JWT, Cloudflare R2 · Docker, Nginx |
| [Costura App](https://proyectosena.online/costura) | Pedidos y medidas para un taller, en móvil y web | Vue 3, Vite · Capacitor 8, SQLite nativo, Android |
| [Sincronización Web / App nativa](https://github.com/Aryannext/Sincronizaci-n-Web---app-Nativa) | Sincronización offline-first entre app nativa y web | React 19 · Express 5, PostgreSQL · Kotlin, Room, WorkManager |

## Stack de este sitio

Next.js 16 · React 19 · TypeScript · Tailwind · Shadcn UI · GSAP · Framer Motion ·
Spline (teclado 3D) · Lenis · Resend

## Cómo correrlo

Necesitas Node 18+ y pnpm.

```bash
pnpm install
```

```bash
cp .env.example .env.local
```

```bash
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000).

**Ninguna variable de entorno es obligatoria.** Sin `RESEND_API_KEY` el sitio
funciona igual; solo el formulario de contacto responde 503 con un mensaje que
invita a escribir al correo directo.

### Compilar

```bash
pnpm exec next build --webpack
```

> **Por qué `--webpack`:** Turbopack genera nombres de archivo muy largos. En una
> ruta profunda de Windows se supera el límite de 260 caracteres y el build
> revienta. En Linux no pasa, pero se usa webpack en ambos lados para que el
> build sea reproducible.

## Despliegue

Corre en un VPS con **Dokploy**: GitHub → build con Docker → Traefik con SSL
automático. El `Dockerfile` usa `output: standalone` (imagen de ~200 MB) y el
proceso no corre como root.

El paso a paso está en **[DESPLIEGUE.md](./DESPLIEGUE.md)**.

## Licencia

El código de la plantilla base es de Naresh Khatri, publicado como código
abierto — ver [CREDITS.md](./CREDITS.md). El contenido de este sitio (textos,
proyectos, datos personales) es mío.
