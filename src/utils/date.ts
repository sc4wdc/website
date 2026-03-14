/**
 * Normalize a content-collection Date to UTC midnight for stable comparison.
 * YAML dates are parsed as UTC midnight by Astro; this strips any residual
 * hours/minutes/seconds so all comparisons use date-only granularity.
 */
export function parseLocalDate(date: Date): Date {
  return new Date(Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate()
  ));
}

/**
 * Format a content collection date for display.
 * Normalizes via parseLocalDate first so the UTC calendar day matches the
 * frontmatter value, then formats in UTC to avoid timezone day-shift.
 */
export function formatDate(date: Date): string {
  const d = parseLocalDate(date);
  return d.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  });
}

/**
 * Get today's date as UTC midnight, based on the current Pacific-timezone calendar day.
 * Uses Intl.DateTimeFormat.formatToParts for reliable locale-independent parsing.
 */
export function getTodayLocal(): Date {
  const fmt = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Los_Angeles',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
  const parts = Object.fromEntries(
    fmt.formatToParts(new Date()).map(p => [p.type, p.value])
  );
  return new Date(Date.UTC(+parts.year, +parts.month - 1, +parts.day));
}
