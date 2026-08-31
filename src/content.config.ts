import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const entries = defineCollection({
  loader: glob({ base: './src/content/entries', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(), description: z.string(), pubDate: z.coerce.date(),
    kind: z.literal('article'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
});
export const collections = { entries };
