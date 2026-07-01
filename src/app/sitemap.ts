import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Aquí defines tus rutas estáticas
  const routes = [
    '',
    '/patagonia-fly-fishing',
    '/fishing-season',
    '/about-us',
    '/contact-us',
    '/fishing-destinations',
    '/patagonia-fly-fishing-faq',
    '/privacy-policy',
    '/patagonia-fly-fishing-blog',
    '/patagonia-fly-fishing-blog/coyhaique-spring-creeks-technical-guide-to-sight-presentation',
    '/patagonia-fly-fishing-blog/how-to-travel-to-coyhaique-in-patagonia-chile',
    '/patagonia-fly-fishing-blog/migratory-trout-mechanics-and-autumn-river-runs',
    '/patagonia-fly-fishing-blog/why-coyhaique-chile-is-world-famous-for-dry-fly-fishing'
  ];

  const baseUrl = 'https://chileflyfishingexpeditions.com';

  const staticRoutes = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // SI TUVIERAS RUTAS DINÁMICAS (Ej: posts del blog):
  // const posts = await getPosts(); // Tu función para traer los slugs
  // const dynamicRoutes = posts.map((post) => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: new Date(post.updatedAt),
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.6,
  // }));

  return [...staticRoutes /*, ...dynamicRoutes*/];
}