import { defineCollection, z } from 'astro:content';

const stamps = defineCollection({
  type: 'content',
  schema: z.object({
    title:        z.string(),
    date:         z.date(),
    country:      z.string(),
    region:       z.string().optional(),
    denomination: z.string(),
    year_issued:  z.number(),
    printer:      z.string(),
    technique:    z.enum(['recess', 'letterpress', 'lithography', 'photogravure', 'mixed']),
    tags:         z.array(z.string()),
    image:        z.string(),
    draft:        z.boolean().optional().default(false),
  }),
});

export const collections = { stamps };
