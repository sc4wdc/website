import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import { getSiteSettings } from './site';
import { generateMeetings, type GeneratedMeeting } from './meetings';

export type AnyEvent = CollectionEntry<'events'> | GeneratedMeeting;

export function isGeneratedMeeting(event: AnyEvent): event is GeneratedMeeting {
  return 'generated' in event && event.generated === true;
}

export async function getAllEvents(): Promise<AnyEvent[]> {
  const [fileEvents, settings] = await Promise.all([
    getCollection('events'),
    getSiteSettings(),
  ]);

  const generated = generateMeetings(settings.meeting);
  const fileIds = new Set(fileEvents.map(e => e.id));
  const newMeetings = generated.filter(m => !fileIds.has(m.id));

  return [...fileEvents, ...newMeetings];
}
