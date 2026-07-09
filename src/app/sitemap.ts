import { MetadataRoute } from 'next';
import { destinationsRegistry } from './data';

export default function sitemap(): MetadataRoute.Sitemap {
  // Rutas estáticas
  const routes = [
    '',
    '/patagonia-fly-fishing',
    '/fishing-season',
    '/logistical-guide-season',
    '/about-us',
    '/contact-us',
    '/fishing-destinations',
    '/patagonia-fly-fishing-faq',
    '/privacy-policy',
    '/patagonia-fly-fishing-blog',
    '/patagonia-fly-fishing-blog/coyhaique-spring-creeks-technical-guide-to-sight-presentation',
    '/patagonia-fly-fishing-blog/how-to-travel-to-coyhaique-in-patagonia-chile',
    '/patagonia-fly-fishing-blog/migratory-trout-mechanics-and-autumn-river-runs',
    '/patagonia-fly-fishing-blog/why-coyhaique-chile-is-world-famous-for-dry-fly-fishing',
    '/patagonia-fly-fishing-blog/explore-best-fly-fishing-waters-in-coyhaique-chile',
    '/patagonia-fly-fishing-blog/technical-patagonia-fly-fishing-packing-list',
    '/patagonia-fly-fishing-blog/how-much-does-a-fly-fishing-trip-to-patagonia-cost',
    '/patagonia-fly-fishing-blog/getting-to-coyhaique-complete-logistics-guide',
    '/patagonia-fly-fishing-blog/uncrowded-patagonia-why-isolation-is-the-real-luxury',
    '/patagonia-fly-fishing-blog/when-is-early-season-fly-fishing-in-patagonia',
    '/patagonia-fly-fishing-blog/sight-fishing-rio-baker-what-to-expect',
    '/patagonia-fly-fishing-blog/rio-baker-vs-lago-brown-which-to-fish-first',
    '/beyond-patagonia',
    '/beyond-patagonia/madison-river-montana',
    '/beyond-patagonia/dubois-wyoming'
  ];

  const baseUrl = 'https://chileflyfishingexpeditions.com';

  const staticRoutes = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Rutas dinámicas: páginas de destino en /[slug], generadas desde el mismo
  // registry que alimenta las cards del blog (src/app/data.ts) — así una
  // entrada nueva en destinationsRegistry queda en el sitemap automáticamente.
  const dynamicRoutes = Object.keys(destinationsRegistry).map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}