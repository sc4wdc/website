import { describe, it, expect, vi, afterEach } from 'vitest';
import { parseLocalDate, formatDate, getTodayLocal } from './date';

describe('parseLocalDate', () => {
  it('converts a Date to UTC midnight preserving the calendar day', () => {
    const result = parseLocalDate(new Date('2026-06-15T00:00:00Z'));
    expect(result.toISOString()).toBe('2026-06-15T00:00:00.000Z');
  });

  it('strips hours/minutes from a non-midnight Date', () => {
    const result = parseLocalDate(new Date('2026-06-15T18:30:45Z'));
    expect(result.toISOString()).toBe('2026-06-15T00:00:00.000Z');
  });

  it('handles a winter (PST) date correctly', () => {
    const result = parseLocalDate(new Date('2026-01-10T00:00:00Z'));
    expect(result.toISOString()).toBe('2026-01-10T00:00:00.000Z');
  });

  it('handles a summer (PDT) date correctly', () => {
    const result = parseLocalDate(new Date('2026-07-04T00:00:00Z'));
    expect(result.toISOString()).toBe('2026-07-04T00:00:00.000Z');
  });

  it('handles DST spring-forward boundary (March)', () => {
    const result = parseLocalDate(new Date('2026-03-08T00:00:00Z'));
    expect(result.toISOString()).toBe('2026-03-08T00:00:00.000Z');
  });

  it('handles DST fall-back boundary (November)', () => {
    const result = parseLocalDate(new Date('2026-11-01T00:00:00Z'));
    expect(result.toISOString()).toBe('2026-11-01T00:00:00.000Z');
  });
});

describe('formatDate', () => {
  it('renders a summer date with the correct calendar day', () => {
    const result = formatDate(new Date('2026-06-15T00:00:00Z'));
    expect(result).toBe('Monday, June 15, 2026');
  });

  it('renders a winter date with the correct calendar day', () => {
    const result = formatDate(new Date('2026-01-10T00:00:00Z'));
    expect(result).toBe('Saturday, January 10, 2026');
  });

  it('does not shift a PDT-period date back by one day', () => {
    const result = formatDate(new Date('2026-08-20T00:00:00Z'));
    expect(result).toBe('Thursday, August 20, 2026');
  });

  it('normalizes a non-midnight Date before formatting', () => {
    const result = formatDate(new Date('2026-06-15T23:59:59Z'));
    expect(result).toBe('Monday, June 15, 2026');
  });
});

describe('getTodayLocal', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('returns UTC midnight', () => {
    const result = getTodayLocal();
    expect(result.getUTCHours()).toBe(0);
    expect(result.getUTCMinutes()).toBe(0);
    expect(result.getUTCSeconds()).toBe(0);
    expect(result.getUTCMilliseconds()).toBe(0);
  });

  it('returns the Pacific calendar day at midday UTC (morning Pacific)', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-07-15T19:00:00Z'));
    const result = getTodayLocal();
    expect(result.toISOString()).toBe('2026-07-15T00:00:00.000Z');
    vi.useRealTimers();
  });

  it('returns the previous Pacific day when UTC is past midnight but Pacific is not', () => {
    vi.useFakeTimers();
    // 2026-07-16T06:00:00Z = 2026-07-15T23:00:00 PDT (still July 15 in Pacific)
    vi.setSystemTime(new Date('2026-07-16T06:00:00Z'));
    const result = getTodayLocal();
    expect(result.toISOString()).toBe('2026-07-15T00:00:00.000Z');
    vi.useRealTimers();
  });

  it('handles the PST/PDT spring-forward boundary', () => {
    vi.useFakeTimers();
    // 2026-03-08T10:00:00Z = 2026-03-08T02:00:00 PST -> springs to 03:00 PDT
    vi.setSystemTime(new Date('2026-03-08T10:00:00Z'));
    const result = getTodayLocal();
    expect(result.toISOString()).toBe('2026-03-08T00:00:00.000Z');
    vi.useRealTimers();
  });
});
