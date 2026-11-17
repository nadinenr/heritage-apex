/**
 * Content Collections Configuration
 * Defines loaders, glob patterns, and Zod schemas for projects, services, and news collections.
 */
import { defineCollection, z } from 'astro:content';
import sitemap from '@astrojs/sitemap';
import { glob } from 'astro/loaders';

// Projects Collection Schema
const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    description: z.string(),
    gallery: z.array(z.string()),
    order: z.number().optional(),
  }),
});

// Services Collection Schema
const servicesCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    image: z.string(),
  }),
});

// News Collection Schema
const newsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
  schema: z.object({
    date: z.string(),
    title: z.string(),
    image: z.string(),
    details: z.string(),
  }),
});

// Export all collections
export const collections = {
  'projects': projectsCollection,
  'services': servicesCollection,
  'news': newsCollection,
};