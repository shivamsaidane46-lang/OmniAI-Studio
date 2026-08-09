import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    status: z.enum(['draft', 'published']).default('published'),
    featured: z.boolean().default(false),
    technologies: z.array(z.string()).default([]),
    demoVideo: z.string().optional(),
    liveDemo: z.string().optional(),
    github: z.string().optional(),
    coverImage: z.string().optional(),
  })
});

export const collections = { projects };
