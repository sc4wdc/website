import { describe, it, expect, vi, afterEach } from 'vitest';
import { getThirdThursday, generateMeetings } from './meetings';

describe('getThirdThursday', () => {
  it('October 2025 — first day is Wednesday', () => {
    const result = getThirdThursday(2025, 9);
    expect(result.toISOString()).toBe('2025-10-16T00:00:00.000Z');
  });

  it('December 2025 — first day is Monday', () => {
    const result = getThirdThursday(2025, 11);
    expect(result.toISOString()).toBe('2025-12-18T00:00:00.000Z');
  });

  it('January 2026 — first day is Thursday', () => {
    const result = getThirdThursday(2026, 0);
    expect(result.toISOString()).toBe('2026-01-15T00:00:00.000Z');
  });

  it('February 2026 — first day is Sunday', () => {
    const result = getThirdThursday(2026, 1);
    expect(result.toISOString()).toBe('2026-02-19T00:00:00.000Z');
  });

  it('March 2026 — first day is Sunday', () => {
    const result = getThirdThursday(2026, 2);
    expect(result.toISOString()).toBe('2026-03-19T00:00:00.000Z');
  });

  it('July 2026 — first day is Wednesday', () => {
    const result = getThirdThursday(2026, 6);
    expect(result.toISOString()).toBe('2026-07-16T00:00:00.000Z');
  });

  it('returns UTC midnight', () => {
    const result = getThirdThursday(2026, 5);
    expect(result.getUTCHours()).toBe(0);
    expect(result.getUTCMinutes()).toBe(0);
    expect(result.getUTCSeconds()).toBe(0);
  });
});

describe('generateMeetings', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  const meetingConfig = {
    time: '6:30 PM',
    startDate: new Date('2026-01-01T00:00:00Z'),
    location: {
      name: 'Round Table Pizza',
      address: '1975 Main St',
      city: 'Watsonville',
      state: 'CA',
    },
  };

  it('generates meetings from startDate through 12 months from now', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-03-15T20:00:00Z'));

    const meetings = generateMeetings(meetingConfig);
    expect(meetings.length).toBeGreaterThanOrEqual(14);

    expect(meetings[0].id).toBe('2026-01-meeting');
    expect(meetings[0].data.date.toISOString()).toBe('2026-01-15T00:00:00.000Z');
  });

  it('formats location from config', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-03-15T20:00:00Z'));

    const meetings = generateMeetings(meetingConfig);
    expect(meetings[0].data.location).toBe('Round Table Pizza, 1975 Main St Watsonville, CA');
  });

  it('uses YYYY-MM-meeting id format', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-03-15T20:00:00Z'));

    const meetings = generateMeetings(meetingConfig);
    expect(meetings[0].id).toBe('2026-01-meeting');
    expect(meetings[1].id).toBe('2026-02-meeting');
    expect(meetings[2].id).toBe('2026-03-meeting');
  });

  it('marks all generated meetings with generated: true', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-03-15T20:00:00Z'));

    const meetings = generateMeetings(meetingConfig);
    expect(meetings.every(m => m.generated === true)).toBe(true);
  });

  it('sets cancelled to false for generated meetings', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-03-15T20:00:00Z'));

    const meetings = generateMeetings(meetingConfig);
    expect(meetings.every(m => m.data.cancelled === false)).toBe(true);
  });
});
