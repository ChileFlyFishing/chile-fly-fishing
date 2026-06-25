// src/utils/seo.ts
import { SchemaData } from "@/types/seo";

// Usamos export para que pueda ser llamado desde cualquier página [slug]
export function generateJsonLd(data: SchemaData) {
  const baseSchema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": data.type,
    "name": data.name,
    "description": data.description,
    "url": data.url,
  };

  if (data.image) {
    baseSchema.image = data.image;
  }

  // Si la data trae propiedades adicionales personalizadas de ríos, las inyectamos limpiamente
  if (data.additionalProps) {
    Object.keys(data.additionalProps).forEach((key) => {
      if (data.additionalProps) {
        baseSchema[key] = data.additionalProps[key];
      }
    });
  }

  return baseSchema;
}