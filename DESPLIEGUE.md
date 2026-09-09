# Desplegar en el VPS con Dokploy

Flujo: **local → GitHub → Dokploy (VPS) → Docker → Traefik + SSL → internet**.

## 1. Subir el código a GitHub

El repositorio `Aryannext/Portafolio` ya existe y está vacío. Desde la carpeta
del proyecto:

```bash
git init
```

```bash
git remote add origin https://github.com/Aryannext/Portafolio.git
```

```bash
git add . && git commit -m "Portafolio v4"
```

```bash
git branch -M main && git push -u origin main
```

> `.gitignore` ya excluye `node_modules`, `.next` y `.env*.local`, así que no se
> sube ninguna clave ni basura de compilación. Verifícalo con `git status` antes
> del primer push.

## 2. Crear la aplicación en Dokploy

1. En el panel de Dokploy: **Create Application**.
2. Origen: **GitHub** → repositorio `Aryannext/Portafolio`, rama `main`.
3. Tipo de compilación: **Dockerfile** (está en la raíz del proyecto).
4. Puerto interno: **3000**.

Dokploy clona, construye la imagen y levanta el contenedor. En cada `git push`
puede reconstruir solo si activas el despliegue automático (webhook).

## 3. Variables de entorno

En Dokploy, sección **Environment**:

| Variable | ¿Obligatoria? | Para qué |
|---|---|---|
| `RESEND_API_KEY` | No | El formulario de contacto. Sin ella responde 503 con un mensaje que invita a escribir directo al correo — no se rompe nada |
| `NEXT_PUBLIC_WS_URL` | No | Funciones en tiempo real (cursores, chat). Vacío = desactivadas |
| `UMAMI_DOMAIN` y `UMAMI_SITE_ID` | No | Analítica propia, si algún día montas Umami |

**Ninguna es obligatoria para que el sitio funcione.** El build pasa sin ellas.

Para que el formulario envíe correos de verdad: crea una cuenta gratis en
[resend.com](https://resend.com), genera una API key y pégala en `RESEND_API_KEY`.

## 4. Dominio y SSL

En la pestaña **Domains** de la aplicación:

- Host: `proyectosena.online` (o el subdominio que decidas)
- Puerto: `3000`
- **HTTPS activado** y certificado **Let's Encrypt**

Dokploy usa Traefik por dentro y pide el certificado solo. No tienes que tocar
Nginx a mano ni correr certbot.

> **Cuidado si usas la raíz del dominio.** `proyectosena.online` ya sirve tus
> proyectos en `/costura` y `/sistema-juridico`. Si apuntas la raíz al
> portafolio, revisa que esas rutas sigan atendidas por su contenedor actual,
> o quedarán inaccesibles. Si tienes dudas, empieza por un subdominio como
> `portafolio.proyectosena.online` — no rompe nada y siempre puedes moverlo.

## 5. Comprobar

Cuando termine el despliegue:

- La página carga y el teclado 3D aparece
- `/resume` muestra la hoja de vida
- El formulario responde (envía si hay `RESEND_API_KEY`, o da el mensaje claro si no)
- El candado de HTTPS está activo

## Actualizar después

```bash
git add . && git commit -m "lo que cambiaste" && git push
```

Y en Dokploy: **Redeploy** (o automático, si activaste el webhook).

---

## Notas técnicas

**Por qué `--webpack` en el Dockerfile.** Turbopack genera nombres de archivo
larguísimos que superan el límite de 260 caracteres de Windows y revientan el
build en local. En Linux no existe ese límite, pero se usa webpack en ambos
lados para que el build del servidor sea igual al que puedes reproducir en tu
máquina. Si algún día mueves el proyecto a una ruta corta, puedes volver a
Turbopack quitando la bandera.

**Por qué `output: standalone`.** Next empaqueta el servidor con solo las
dependencias que de verdad usa. La imagen baja de ~1.5 GB a ~200 MB.

**El contenedor no corre como root.** El Dockerfile crea el usuario `nextjs`
(uid 1001) y el proceso corre con él.

**El formulario de contacto no miente.** Si falta la clave de Resend devuelve
503 con un mensaje que invita a escribir al correo directo, en vez de aparentar
que envió algo que se perdió.
