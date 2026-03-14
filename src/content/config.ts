import { defineCollection, z } from 'astro:content';

const difficultySchema = z.enum(['Easy', 'Moderate', 'Difficult', 'Extreme']);
const ctaLinkSchema = z.object({
  label: z.string(),
  href: z.string(),
});
const boardMemberSchema = z.object({
  name: z.string(),
  position: z.string(),
  order: z.number(),
  email: z.string().email(),
  phone: z.string().optional(),
  photo: z.string().min(1).optional(),
});

// Define schema for trail reports
const trailsCollection = defineCollection({
  type: 'content',
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
    registrationUrl: z.string().url().optional(),
  }),
});

// Define schema for general pages
const pagesCollection = defineCollection({
  type: 'content',
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
  ]),
});

const siteCollection = defineCollection({
  type: 'data',
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
          mapUrl: z.string().url(),
          embedMapUrl: z.string().url(),
        }),
      }),
      social: z.object({
        facebook: z.string().url(),
        instagram: z.string().url(),
      }),
      calendar: z.object({
        embedUrl: z.string().url(),
        publicUrl: z.string().url(),
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
  type: 'data',
  schema: z.object({
    members: z.array(boardMemberSchema).min(1),
  }),
});

export const collections = {
  'trails': trailsCollection,
  'events': eventsCollection,
  'pages': pagesCollection,
  'site': siteCollection,
  'board': boardCollection,
};

