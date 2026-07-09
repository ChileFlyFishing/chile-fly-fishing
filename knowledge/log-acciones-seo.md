## 2026-07-08 — Incidente y fix: canonicalización www/no-www

**Contexto:** Se detectó división de autoridad entre www y no-www con
data real de Search Console (415 vs 2 impresiones en el mismo período).

**Intento 1 (causó incidente):** Se agregó redirect www→no-www en
next.config.ts sin revisar que Vercel ya tenía configurado, a nivel de
dominio, el redirect inverso (no-www→www). Las dos reglas en conflicto
causaron un loop infinito (ERR_TOO_MANY_REDIRECTS) — sitio caído en
producción para todos los usuarios.

**Resolución:**
1. Revert de emergencia del commit conflictivo (1c6e2ea) — sitio
   restaurado.
2. Causa raíz identificada: redirect duplicado en dos capas (Vercel +
   código) apuntando en direcciones opuestas.
3. Fix definitivo aplicado SOLO en Vercel (Domains): www configurado
   para redirigir (308) hacia no-www; no-www confirmado como Production.
   Next.config.ts NO contiene ninguna regla de este redirect — se dejó
   como única fuente de verdad en Vercel para evitar conflicto futuro.
4. Reaplicados por separado (commit limpio) los 3 fixes que se habían
   perdido en el revert de emergencia: canonical/openGraph roto en
   /patagonia-fly-fishing-blog (apuntaba a ruta inexistente
   /fly-fishing-blog), y 2 referencias sueltas a www. (logo de email de
   contacto, link de política de privacidad).
5. Verificado: los 3 redirects legacy del Encargo 5 (WordPress →
   /patagonia-fly-fishing) intactos. Home y blog hub responden 200 en
   no-www, sin saltos extra.

**Estado:** Resuelto, en producción, verificado.

**Impacto esperado / KPI relacionado:** Consolidación de la señal de
dominio dividida. Efecto medible en Search Console esperado en 1-3
semanas tras recrawl de Google.

**Lección para el log (evitar repetir):** Antes de agregar cualquier
redirect a nivel de código, revisar primero la configuración de
dominio de Vercel — puede existir una regla de plataforma que entre en
conflicto.


## 2026-07-08 (cont.) — Fix UX: carrusel de testimonios (transición + mobile)

**Contexto:** Tras reemplazar el bloque de testimonios placeholder por
los 4 testimonios reales (Kevin J., Julie Church, Cindy Sabo, Scott y
Christine Teele), se detectaron dos problemas de experiencia en el
carrusel: efecto de "foto pegada" al cambiar de testimonio (imagen
anterior visible hasta que la nueva cargaba), y falta de soporte de
swipe táctil en mobile.

**Qué se hizo:**
1. Precarga de las 4 imágenes de testimonios al montar el componente —
   elimina el salto visual de imagen anterior/nueva.
2. Sincronización del fade con doble requestAnimationFrame, para que
   el navegador pinte el frame intermedio en opacidad 0 antes del
   fade-in (React estaba batcheando índice y visibilidad en el mismo
   tick, saltándose la animación).
3. Soporte de swipe horizontal táctil (onTouchStart/onTouchEnd) para
   cambiar de testimonio en mobile, sin bloquear el scroll vertical.
4. Verificado con Playwright: transición correcta en desktop, swipe
   funcionando en mobile sin interferir con scroll vertical.

**Estado:** Comiteado y en producción.

**Impacto esperado / KPI relacionado:** Mejora de experiencia de
usuario en las 4 páginas con testimonios (home /fishing-season + 3
artículos del blog). Indirectamente relevante para Core Web Vitals
(percepción de carga fluida), señal técnica de SEO.


## 2026-07-08 (cont.) — Nueva iniciativa editorial: "Beyond Patagonia"

**Qué se hizo:** Creado hub /beyond-patagonia con 2 artículos
(/madison-river-montana, /dubois-wyoming). Enfoque editorial (no venta):
posiciona el conocimiento técnico de los guías de Chile Fly Fishing en
ríos icónicos de EE.UU. como trasfondo de su lectura del agua
patagónica, sin ofrecer estos destinos como producto. Cumple plantilla
completa (meta tags, respuesta directa, tabla, FAQ+schema, sitemap.ts,
robots.ts con acceso explícito para bots de IA).

**Estado:** Comiteado y en producción (commit b05e6a9). Confirmado con
Matías: enfoque editorial/EEAT, no una línea de negocio — el hub no
toca destinationsRegistry ni la ruta catch-all [slug] para evitar
mensajes de venta inconsistentes.

**Nota:** Pendiente reflejar este pilar en
01-pilares-y-arquitectura-de-topicos.md.


## 2026-07-09 — Fix: contradicción de fechas de temporada en /patagonia-fly-fishing

**Contexto:** Las tarjetas de temporada (componente InteractiveGallery,
el que realmente se renderiza en la página — SeasonGrid.tsx quedó como
código muerto sin usar) y el FAQ de la misma página mostraban rangos de
fechas distintos entre sí, y ninguno coincidía con el dato canónico de
02-marca-y-datos-canonicos/02-datos-canonicos-programa-precios-reglas.md
(High Season dic-ene, Early Season oct-nov).

**Qué se hizo:**
1. Card "High Season": "January - February" → "December - January".
2. Card "Close Season": "April - May" → "Autumn (Season Close)" — el
   dato canónico no especifica meses exactos de cierre de temporada
   (Migratory Run), así que se dejó sin rango de meses en vez de
   inventar uno (confirmado con Matías).
3. FAQ (config/faqs.ts, compartido por /patagonia-fly-fishing y
   /patagonia-fly-fishing-faq): "January to March" → "December to
   January"; "(November-December)" → "(October-November)"; "late
   season (April)" → "autumn".
4. Early Season ("October - November") ya coincidía con el canónico,
   no se tocó.

**Estado:** Comiteado y en producción (commit 12609d4).

**Impacto esperado / KPI relacionado:** Elimina señal contradictoria
para motores de búsqueda y de IA sobre las fechas de temporada de la
página de programa — relevante para AEO/GEO (citabilidad consistente)
y para no confundir al usuario que compara card vs FAQ en la misma
página.

**Pendiente:** El bloque de FAQ hardcodeado (no el compartido) en
/patagonia-fly-fishing-faq/page.tsx (líneas 76-77) tiene el mismo tipo
de inconsistencia ("January through March" / "October 12-December") y
no fue tocado — fuera del alcance pedido.


## 2026-07-09 (cont.) — Fix: anchor text duplicado en enlaces internos a /patagonia-fly-fishing

**Contexto:** Para consolidar la señal de /patagonia-fly-fishing en la
keyword "fly fishing patagonia" (~1.000 búsquedas/mes EE.UU., baja
competencia), se pidió agregar un enlace interno contextual en los 3
artículos del blog (costo, logística, uncrowded) apuntando a esa
página. Al revisar, los 3 ya tenían un enlace en el cuerpo del artículo
(no en el CTA de cierre) — pero Costo y Logística usaban el anchor
exacto idéntico "Patagonia fly fishing program", el patrón de anchor
text duplicado que el pedido buscaba evitar.

**Qué se hizo:** Se reescribió solo el anchor del artículo de
logística: "Patagonia fly fishing program" → "fly fishing Patagonia
program" (mismo link, mismo lugar en el cuerpo, sin tocar el resto del
contenido). Costo mantiene su anchor original (ya contenía la
variante); Uncrowded ya tenía un anchor distinto ("guided fishing
program"), no requirió cambio.

**Estado:** Comiteado y en producción (commit 6539c81).

**Impacto esperado / KPI relacionado:** 3 anchors distintos entre sí
apuntando a /patagonia-fly-fishing, 2 de 3 conteniendo variantes
naturales de "fly fishing patagonia"/"patagonia fly fishing" —
consolida la señal de esa keyword sin patrón de manipulación de anchor
text.


## 2026-07-09 (cont.) — Pilar 2 "Early Season Giants": 3 artículos nuevos

**Contexto:** Encargo de los 3 primeros artículos del Pilar 2, sobre la
ventana de Early Season (Río Baker, Lago Brown). Antes de escribir se
encontraron 3 puntos donde el dato canónico no alcanzaba y se confirmó
con Matías en vez de inventar:
1. Técnica/línea de Early Season (el canónico solo dice "sight
   fishing" y asocia sinking lines/streamers explícitamente al
   Migratory Run de otoño, no a esta ventana) → confirmado: floating
   line + leader largo, mosca presentada a la vista del pez.
2. Diferenciación Río Baker vs Lago Brown (el canónico los menciona
   juntos sin distinguirlos) → confirmado: usar solo distinciones
   genéricas río-vs-lago (tipo de agua, acceso, técnica de lectura),
   sin inventar detalle operativo específico de cuál se pesca primero.
3. No existía ninguna imagen etiquetada específicamente para Río Baker
   o Lago Brown → confirmado: usar imágenes genéricas de
   early-season/rainbow trout ya disponibles, con alt text que describe
   especie/temporada, no el lugar exacto.

**Qué se hizo:** 3 artículos bajo /patagonia-fly-fishing-blog:
"When Is Early Season Fly Fishing in Patagonia?", "Sight Fishing Río
Baker: What to Expect", "Río Baker vs Lago Brown: Which to Fish First"
(con tabla comparativa). Misma plantilla que los artículos anteriores
(respuesta directa, tabla/lista, FAQ real, schema Article+FAQPage en
@graph). Cross-linkeados entre sí y hacia /patagonia-fly-fishing.
Agregados a data.ts, a las cards del hub del blog y a sitemap.ts.
robots.ts ya cubre /patagonia-fly-fishing-blog por prefijo, sin cambios
necesarios.

**Estado:** Comiteado y en producción (commit de66ced).

**Impacto esperado / KPI relacionado:** Cubre el segundo pilar
estacional de contenido (tras Waters/Travel/Pricing/Logística) con
fechas 100% alineadas al dato canónico — relevante para AEO/GEO
(pregunta-respuesta directa sobre "cuándo es early season") y para
capturar intención de búsqueda estacional temprana en el embudo.

**Nota:** El Pilar 2 completo probablemente incluye más artículos
(hatches, gear específico, etc.) — estos 3 son el punto de partida.
text.