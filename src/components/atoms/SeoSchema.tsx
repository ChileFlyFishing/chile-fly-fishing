import React from "react";

interface SeoSchemaProps {
  jsonLd: Record<string, unknown>;
}

export default function SeoSchema({ jsonLd }: SeoSchemaProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}