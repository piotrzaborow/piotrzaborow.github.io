import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		// Transform string to Date object
		pubDate: z.string().transform((str) => new Date(str)),
		upDate: z.coerce.date().optional(),
		tag: z.string().optional(),
	}),
});

export const collections = { blog };
