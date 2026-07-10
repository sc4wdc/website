import { parseLocalDate, getTodayLocal } from './date';

export interface GeneratedMeeting {
  id: string;
  generated: true;
  data: {
    title: string;
    date: Date;
    location: string;
    time: string;
    description: string;
    trailLeader?: string;
    cancelled: boolean;
    registrationRequired: boolean;
    registrationUrl?: string;
  };
}

interface MeetingLocation {
  name: string;
  address: string;
  city: string;
  state: string;
}

interface MeetingConfig {
  time: string;
  startDate: Date;
  location: MeetingLocation;
}

export function getThirdThursday(year: number, month: number): Date {
  const firstDay = new Date(Date.UTC(year, month, 1));
  const dayOfWeek = firstDay.getUTCDay();
  const daysUntilThursday = (4 - dayOfWeek + 7) % 7;
  const thirdThursday = 1 + daysUntilThursday + 14;
  return new Date(Date.UTC(year, month, thirdThursday));
}

function formatLocation(loc: MeetingLocation): string {
  return `${loc.name}, ${loc.address} ${loc.city}, ${loc.state}`;
}

export function generateMeetings(meeting: MeetingConfig): GeneratedMeeting[] {
  const start = parseLocalDate(meeting.startDate);
  const today = getTodayLocal();
  const end = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth() + 12, 1));

  const location = formatLocation(meeting.location);
  const meetings: GeneratedMeeting[] = [];

  let year = start.getUTCFullYear();
  let month = start.getUTCMonth();

  while (true) {
    const date = getThirdThursday(year, month);
    if (date >= end) break;

    const monthStr = String(month + 1).padStart(2, '0');
    meetings.push({
      id: `${year}-${monthStr}-meeting`,
      generated: true,
      data: {
        title: 'Meeting',
        date,
        location,
        time: meeting.time,
        description: 'Monthly club meeting - all are welcome!',
        cancelled: false,
        registrationRequired: false,
      },
    });

    month++;
    if (month > 11) {
      month = 0;
      year++;
    }
  }

  return meetings;
}
