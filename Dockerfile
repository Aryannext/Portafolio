# Imagen para desplegar el portafolio con Dokploy (o con docker compose a mano).
#
# Tres etapas para que la imagen final sea pequeña: las dependencias y el
# compilador se quedan atrás y solo viaja lo que hace falta para servir.

# ---------- 1. Dependencias ----------
FROM node:22-alpine AS deps
WORKDIR /app

# corepack trae pnpm sin instalarlo aparte; la versión sale de package.json
RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# ---------- 2. Compilación ----------
FROM node:22-alpine AS builder
WORKDIR /app
RUN corepack enable

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Sin telemetría de Next durante el build
ENV NEXT_TELEMETRY_DISABLED=1

# Turbopack genera nombres de archivo larguísimos que revientan en Windows.
# En Linux no hay ese límite, pero se usa webpack igual para que el build sea
# idéntico al que se puede reproducir en local.
RUN pnpm exec next build --webpack

# ---------- 3. Ejecución ----------
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Usuario sin privilegios: si alguien escapa del proceso, no es root
RUN addgroup --system --gid 1001 nodejs \
 && adduser --system --uid 1001 nextjs

# `output: standalone` deja en .next/standalone el servidor con solo las
# dependencias que de verdad usa. Los assets públicos y estáticos van aparte.
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs
EXPOSE 3000

CMD ["node", "server.js"]
