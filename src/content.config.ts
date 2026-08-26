import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const entries = defineCollection({
  loader: glob({ base: './src/content/entries', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(), description: z.string(), pubDate: z.coerce.date(),
    kind: z.enum(['briefing', 'article', 'history']),
    tags: z.array(z.string()).default([]),
    series: z.object({ slug: z.string(), title: z.string(), order: z.number() }).optional(),
    draft: z.boolean().default(false)
  })
});
export const collections = { entries };
