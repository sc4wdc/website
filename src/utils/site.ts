import { getEntry } from 'astro:content';

export async function getSiteSettings() {
  const entry = await getEntry('site', 'settings');

  if (!entry || entry.data.kind !== 'settings') {
    throw new Error('Site settings not found');
  }

  return entry.data;
}

export async function getSiteNavigation() {
  const entry = await getEntry('site', 'navigation');

  if (!entry || entry.data.kind !== 'navigation') {
    throw new Error('Site navigation not found');
  }

  return entry.data.items;
}

export async function getBoardMembers() {
  const entry = await getEntry('board', 'members');

  if (!entry) {
    throw new Error('Board members not found');
  }

  return [...entry.data.members].sort((a, b) => a.order - b.order);
}
