import { defineCollection, z } from 'astro:content';
import { CONTINENTS } from '../lib/continentSlug';

const territories = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    continent: z.enum(CONTINENTS),
    period_start: z.number(),
    period_end: z.number().optional(),
    capital: z.string().optional(),
    current_country: z.string().optional(),
    eras: z.array(z.enum(['KGV', 'KGVI', 'QEII'])),
    printers: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    stamps: z.array(z.object({
      image: z.string(),
      denomination: z.string(),
      year: z.number(),
      era: z.enum(['KGV', 'KGVI', 'QEII']),
      printer: z.string().optional(),
      note: z.string().optional(),
    })).default([]),
    timeline: z.array(z.object({
      year: z.number(),
      event: z.string(),
    })).optional().default([]),
    flag: z.string().optional(),
    flags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { territories };
