# Créditos

## Base del proyecto

Este portafolio está construido sobre **[3d-portfolio](https://github.com/Naresh-Khatri/3d-portfolio)**,
de **[Naresh Khatri](https://github.com/Naresh-Khatri)** — [nareshkhatri.dev](https://nareshkhatri.dev).

El README original dice, textualmente:

> **Free to use!** This portfolio is open source. If you use it, a credit/link
> back would be really appreciated 🙏

> This project is open source and available under the MIT License.
>
> If you use this portfolio, a credit or link back to the original repo would be
> much appreciated ❤️

Este archivo y el enlace en el pie de página del sitio son ese crédito.

> **Nota sobre la licencia:** el README enlaza a un archivo `LICENSE` que **no
> existe** en el repositorio, y `package.json` no declara licencia. La intención
> del autor es inequívoca y permisiva — lo dice dos veces —, pero el archivo
> formal falta. Si algún día lo publica, conviene revisarlo.

### Qué se conserva de la base

- La escena 3D del teclado (`public/assets/skills-keyboard.spline`), modelada en Spline
- La arquitectura Next.js, los componentes de interfaz y los patrones de animación
- Los sonidos de teclas y los fondos

### Qué se quitó

Todo el contenido personal del autor original: su foto (`me.jpg`), su hoja de
vida en PDF, las capturas de sus ocho proyectos y su entrada de blog. Un sitio
no debe mostrar los datos de otra persona.

También se **desactivó la telemetría**: el componente `src/components/analytics.tsx`
enviaba el dominio del despliegue al servidor del autor mediante `sendBeacon`,
y `src/lib/umami.ts` cargaba por defecto un script desde su dominio. Ambas cosas
ocurrían en el navegador de quien visitara el sitio. Se eliminaron.

### Qué es propio

- Todo el contenido: datos personales, proyectos, textos y traducciones al español
- Los logos de las tecnologías que faltaban en la escena 3D

## Otros recursos

- **[simple-icons](https://github.com/simple-icons/simple-icons)** — logos de marcas (CC0)
- **[Spline](https://spline.design)** — herramienta con la que está modelado el teclado
