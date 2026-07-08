import type { NextConfig } from "next";

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com;
  font-src 'self' data:;
  connect-src 'self' https://ipapi.co https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com;
  media-src 'self';
  frame-src 'none';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
`.replace(/\s{2,}/g, " ").trim();

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // Canonicalización www -> no-www: Search Console muestra 415 de 417
        // impresiones totales de la homepage en la versión no-www, que se
        // fija aquí como canónica. Va primero para que cualquier tráfico a
        // www quede en no-www antes de evaluar el resto de las reglas.
        source: "/:path*",
        has: [{ type: "host", value: "www.chileflyfishingexpeditions.com" }],
        destination: "https://chileflyfishingexpeditions.com/:path*",
        permanent: true,
      },
      // Encargo 5 (auditoría de canibalización "chile trout fishing"):
      // URLs legacy de WordPress sin equivalente actual, consolidadas hacia
      // la página vigente de programa. Ver knowledge/06-seo-geo-aeo/brief-claude-code-contenido-julio.md
      {
        // Next.js normaliza la barra final antes de evaluar redirects propios,
        // así que esta única regla cubre tanto la variante con "/" como sin ella.
        source: "/migratory-trout-a-legendary-moment-in-coyhaiques-fly-fishing-season",
        destination: "/patagonia-fly-fishing",
        permanent: true,
      },
      {
        source: "/migratory-trout-in-coyhaique-fly-fishing-season",
        destination: "/patagonia-fly-fishing",
        permanent: true,
      },
      {
        source: "/definitive-all-inclusive-trout-fishing-trip-chilean-patagonia",
        destination: "/patagonia-fly-fishing",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "Content-Security-Policy", value: ContentSecurityPolicy },
        ],
      },
    ];
  },
};

export default nextConfig;
