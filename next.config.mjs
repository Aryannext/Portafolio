/** @type {import('next').NextConfig} */
const nextConfig = {
  // Empaqueta el servidor y solo las dependencias que realmente usa en
  // .next/standalone. La imagen de Docker pasa de ~1.5 GB a ~200 MB porque no
  // necesita llevar node_modules completo.
  output: "standalone",
  reactStrictMode: true,
  cacheComponents: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // SAMEORIGIN (not DENY) so the resume page can embed its own PDF;
          // still blocks other sites from framing us (clickjacking protection).
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      // Nada de Cache-Control propio para /_next/static: Next ya lo sirve con
      // el suyo y sus nombres llevan hash. El que había (immutable, un año)
      // hacía que en desarrollo el navegador se quedara pegado a chunks
      // viejos; el propio Next avisa de esto al arrancar.
      {
        source: "/assets/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
