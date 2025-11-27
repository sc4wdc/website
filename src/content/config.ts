import { defineCollection, z } from 'astro:content';

// Define schema for trail reports
const trailsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    location: z.string(),
    difficulty: z.enum(['Easy', 'Moderate', 'Difficult', 'Extreme']),
    distance: z.string().optional(),
    duration: z.string().optional(),
    description: z.string(),
    author: z.string().optional(),
  }),
});

// Define schema for events
const eventsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    location: z.string().optional(),
    time: z.string().optional(),
    description: z.string(),
    registrationRequired: z.boolean().default(false),
    registrationUrl: z.string().optional(),
  }),
});

// Define schema for general pages
const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = {
  'trails': trailsCollection,
  'events': eventsCollection,
  'pages': pagesCollection,
};

