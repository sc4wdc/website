export const SITE = {
  name: "Santa Cruz 4 Wheel Drive Club",
  tagline: "Keeping Public Lands Open",
} as const;

export const MEETING = {
  schedule: "Third Thursday of every month",
  time: "6:30 PM",
  earlyArrival: "Members and guests can come early",
  location: {
    name: "Round Table Pizza",
    address: "1975 Main St",
    city: "Watsonville",
    state: "CA",
    zip: "95076",
    mapUrl:
      "https://www.google.com/maps?q=Round+Table+Pizza+1975+Main+St+Watsonville+CA+95076",
    embedMapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3189.8445872698285!2d-121.78502522415612!3d36.917980072213695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e1aee2193910b%3A0x7f8664073d599e1f!2sRound%20Table%20Pizza!5e0!3m2!1sen!2sus!4v1764211758702!5m2!1sen!2sus",
  },
} as const;

export const SOCIAL = {
  facebook: "https://www.facebook.com/groups/sc4wdc",
  instagram: "https://www.instagram.com/santacruz4wd",
} as const;

export const NONPROFIT = {
  status: "501(c)(3) Non-Profit Organization",
  mission:
    "We raise money to keep public lands open and help local non-profit organizations.",
} as const;

export const CALENDAR = {
  embedUrl:
    "https://calendar.google.com/calendar/embed?src=santacruz4wd%40gmail.com&ctz=America%2FLos_Angeles",
  publicUrl:
    "https://calendar.google.com/calendar/u/0?cid=santacruz4wd%40gmail.com",
} as const;
