import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

const difficultySchema = z.enum(['Easy', 'Moderate', 'Difficult', 'Extreme']);
const ctaLinkSchema = z.object({
  label: z.string(),
  href: z.string(),
});
const boardMemberSchema = z.object({
  name: z.string(),
  position: z.string(),
  order: z.number(),
  email: z.email(),
  phone: z.string().optional(),
  photo: z.string().min(1).optional(),
});

const awardCategoryIdSchema = z.enum([
  'glenn-ensign-memorial',
  'best-wrench',
  'best-break',
  'off-roader-of-the-year',
  'gear-head',
  'helping-hand',
  'most-improved',
  'trail-of-the-year',
]);


const trailsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/trails' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    location: z.string(),
    difficulty: difficultySchema,
    distance: z.string().optional(),
    duration: z.string().optional(),
    description: z.string(),
    author: z.string().optional(),
  }),
});

const eventsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    location: z.string().optional(),
    time: z.string().optional(),
    description: z.string(),
    registrationRequired: z.boolean().default(false),
    registrationUrl: z.url().optional(),
  }),
});

const pagesCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.discriminatedUnion('pageType', [
    z.object({
      pageType: z.literal('generic'),
      title: z.string(),
      description: z.string().optional(),
    }),
    z.object({
      pageType: z.literal('home'),
      title: z.string(),
      description: z.string().optional(),
      hero: z.object({
        description: z.string(),
        primaryCta: ctaLinkSchema,
        secondaryCta: ctaLinkSchema,
      }),
      meetings: z.object({
        title: z.string(),
        whenLabel: z.string(),
        whereLabel: z.string(),
        directionsLabel: z.string(),
      }),
      upcomingEvents: z.object({
        title: z.string(),
        ctaLabel: z.string(),
      }),
      recentTrails: z.object({
        title: z.string(),
        ctaLabel: z.string(),
      }),
      cta: z.object({
        title: z.string(),
        description: z.string(),
        primaryCta: ctaLinkSchema,
        secondaryCta: ctaLinkSchema,
      }),
    }),
    z.object({
      pageType: z.literal('contact'),
      title: z.string(),
      description: z.string().optional(),
      intro: z.string(),
      meetingSection: z.object({
        title: z.string(),
        whenLabel: z.string(),
        whereLabel: z.string(),
        directionsLabel: z.string(),
      }),
      onlineSection: z.object({
        title: z.string(),
        intro: z.string(),
        note: z.string(),
        facebookLabel: z.string(),
        instagramLabel: z.string(),
      }),
      mapSectionTitle: z.string(),
      welcomeSection: z.object({
        title: z.string(),
        paragraphs: z.array(z.string()).min(1),
      }),
    }),
    z.object({
      pageType: z.literal('events'),
      title: z.string(),
      description: z.string().optional(),
      intro: z.string(),
      meetingSection: z.object({
        title: z.string(),
        ctaLabel: z.string(),
      }),
      calendarSection: z.object({
        title: z.string(),
        linkLabel: z.string(),
      }),
      upcomingEventsTitle: z.string(),
      pastEventsTitle: z.string(),
      noUpcomingEvents: z.object({
        title: z.string(),
        description: z.string(),
      }),
    }),
    z.object({
      pageType: z.literal('trails'),
      title: z.string(),
      description: z.string().optional(),
      intro: z.string(),
      noTrails: z.object({
        title: z.string(),
        description: z.string(),
      }),
      contributeSection: z.object({
        title: z.string(),
        paragraphs: z.array(z.string()).min(1),
      }),
      difficultyGuide: z.object({
        title: z.string(),
        levels: z.array(z.object({
          level: difficultySchema,
          description: z.string(),
        })).length(4),
      }),
    }),
    z.object({
      pageType: z.literal('board'),
      title: z.string(),
      description: z.string().optional(),
      intro: z.string(),
    }),
    z.object({
      pageType: z.literal('annual-awards'),
      title: z.string(),
      description: z.string().optional(),
      intro: z.string(),
    }),
  ]),
});

const siteCollection = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/site' }),
  schema: z.discriminatedUnion('kind', [
    z.object({
      kind: z.literal('settings'),
      site: z.object({
        name: z.string(),
        shortName: z.string(),
        tagline: z.string(),
      }),
      organization: z.object({
        status: z.string(),
        mission: z.string(),
      }),
      meeting: z.object({
        schedule: z.string(),
        time: z.string(),
        earlyArrival: z.string(),
        location: z.object({
          name: z.string(),
          address: z.string(),
          city: z.string(),
          state: z.string(),
          zip: z.string(),
          mapUrl: z.url(),
          embedMapUrl: z.url(),
        }),
      }),
      social: z.object({
        facebook: z.url(),
        instagram: z.url(),
      }),
      calendar: z.object({
        embedUrl: z.url(),
        publicUrl: z.url(),
      }),
      branding: z.object({
        titleSuffix: z.string(),
        faviconPath: z.string().min(1),
      }),
    }),
    z.object({
      kind: z.literal('navigation'),
      items: z.array(z.object({
        href: z.string().min(1),
        label: z.string().min(1),
      })).min(1),
    }),
  ]),
});

const boardCollection = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/board' }),
  schema: z.object({
    members: z.array(boardMemberSchema).min(1),
  }),
});

const awardsCollection = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/awards' }),
  schema: ({ image }) => z.object({
    year: z.number().int(),
    categories: z.array(z.object({
      id: awardCategoryIdSchema,
      title: z.string(),
      recipient: z.string().optional(),
      photo: image().optional(),
    })).length(8),
  }),
});

export const collections = {
  'trails': trailsCollection,
  'events': eventsCollection,
  'pages': pagesCollection,
  'site': siteCollection,
  'board': boardCollection,
  'awards': awardsCollection,
};

