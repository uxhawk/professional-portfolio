import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().default(""),
    /** Display position in project listings (mirrors the original site's order) */
    order: z.number(),
    /** Employer/client the project was done for (omit for personal projects) */
    company: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    thumbnail: z.string().optional(),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(""),
    date: z.coerce.date(),
    categories: z.array(z.string()).default([]),
    categoryPath: z.string(),
    heroImage: z.string().optional(),
  }),
});

export const collections = { projects, articles };
