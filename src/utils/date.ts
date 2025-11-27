/**
 * Parse a date from Astro content collection and convert to Pacific timezone.
 * YAML dates are parsed as UTC, so we extract the year/month/day components
 * and interpret them as Pacific timezone dates.
 */
export function parseLocalDate(dateString: string | Date): Date {
  if (dateString instanceof Date) {
    // Extract UTC date components
    const year = dateString.getUTCFullYear();
    const month = dateString.getUTCMonth();
    const day = dateString.getUTCDate();
    
    // Create a date string in YYYY-MM-DD format
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    
    // Parse as Pacific timezone by appending timezone offset
    // Using PST offset (UTC-8), which covers most of the year
    return new Date(`${dateStr}T00:00:00-08:00`);
  }
  // Fallback for string dates
  return new Date(`${dateString}T00:00:00-08:00`);
}

/**
 * Format a date for display in Pacific timezone
 */
export function formatDate(date: Date): string {
  const pacificDate = parseLocalDate(date);
  return pacificDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'America/Los_Angeles'
  });
}

/**
 * Get current date in Pacific timezone for comparison
 */
export function getTodayLocal(): Date {
  const now = new Date();
  // Get the current date in Pacific timezone
  const pacificDateStr = now.toLocaleDateString('en-US', {
    timeZone: 'America/Los_Angeles',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
  
  // Parse MM/DD/YYYY format
  const [month, day, year] = pacificDateStr.split('/');
  const dateStr = `${year}-${month}-${day}`;
  
  return new Date(`${dateStr}T00:00:00-08:00`);
}

