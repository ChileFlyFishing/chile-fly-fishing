// src/app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Reglas globales para todos los motores de búsqueda (incluyendo Googlebot y agentes de IA)
        userAgent: "*",
        allow: [
          "/",
          "/patagonia-fly-fishing-blog", // Indexación total del Hub de contenidos
          "/beyond-patagonia", // Indexación total del Hub editorial de destinos internacionales
          "/about-us",
          "/fishing-season",
          "/fishing-program",
          "/contact-us",
        ],
        disallow: [
          "/api/",           // Bloquea rutas internas de la API
          "/_next/",          // Bloquea archivos del sistema e hidratación de Next.js
          "/static/",         // Bloquea archivos estáticos que no requieren indexación directa
          "/admin/",          // Bloquea posibles paneles de administración futuros
          "/*?*",             // Bloquea URLs con parámetros de filtrado duplicados para evitar contenido duplicado
        ],
      },
      {
        // Regla específica para los rastreadores de Inteligencia Artificial (GEO/AEO optimization)
        userAgent: ["GPTBot", "ChatGPT-User", "ClaudeBot", "Google-Extended"],
        allow: [
          "/",
          "/patagonia-fly-fishing-blog", // Permite explícitamente el rastreo para citabilidad en motores generativos
          "/beyond-patagonia", // Contenido editorial citable para motores generativos (GEO/AEO)
          "/fishing-season",
        ],
      },
    ],
    // Declaración obligatoria del Sitemap para guiar el rastreo eficiente
    sitemap: "https://chileflyfishingexpeditions.com/sitemap.xml",
  };
}