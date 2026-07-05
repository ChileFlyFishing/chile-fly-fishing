// src/types/seo.ts
export type SchemaType = "Organization" | "Place" | "Product" | "Article" | "ContactPage";

export interface SchemaData {
  type: SchemaType;
  name: string;
  description: string;
  url: string;
  image?: string;
  additionalProps?: Record<string, unknown>;
}