# Quick Editing Guide for SC4WDC Website

This guide is for club members and other non-developers.

## Golden Rule

Only edit:

- `src/content/**`
- `public/images/**`

You can also copy starting files from:

- `templates/**`

Do not edit:

- `src/pages/**`
- `src/components/**`
- `src/layouts/**`
- `src/utils/**`
- `src/content/config.ts`
- `astro.config.mjs`

## What Each File Controls

| What you want to change | File or folder |
| --- | --- |
| Club name, tagline, meeting time, map link, calendar, social links | `src/content/site/settings.yaml` |
| Header menu labels and order | `src/content/site/navigation.yaml` |
| Board member contact info | `src/content/board/members.yaml` |
| Home page text | `src/content/pages/home.md` |
| Contact page text | `src/content/pages/contact.md` |
| Events page text | `src/content/pages/events.md` |
| Trails page text | `src/content/pages/trails.md` |
| Board page intro/body text | `src/content/pages/board.md` |
| About page | `src/content/pages/about.md` |
| Membership page | `src/content/pages/membership.md` |
| Annual Awards intro/body text | `src/content/pages/annual-awards.md` |
| Annual Awards per-year data | `src/content/awards/` |
| Event entries | `src/content/events/` |
| Trail reports | `src/content/trails/` |
| Images | `public/images/` |

## Edit an Existing File in GitHub

1. Open the repository on GitHub.
2. Browse to the file you want to change.
3. Click the pencil icon.
4. Make your edits.
5. Add a short summary of the change.
6. Click "Commit changes".
7. Wait a few minutes for the site to rebuild.

## Add a New Event

1. Open `templates/event.md`.
2. Copy the full file contents.
3. Create a new file under `src/content/events/`.
4. Use a lowercase, hyphenated filename such as `summer-bbq-2026.md`.
5. Paste the template and replace the placeholder values.
6. Commit the new file.

## Add a New Trail Report

1. Open `templates/trail.md`.
2. Copy the full file contents.
3. Create a new file under `src/content/trails/`.
4. Use a lowercase, hyphenated filename such as `rubicon-spring-2026.md`.
5. Paste the template and replace the placeholder values.
6. Commit the new file.

## Update Board Members

Edit `src/content/board/members.yaml`.

Example entry:

```yaml
members:
  - name: Board Member Name
    position: President
    order: 1
    email: boardmember@example.com
    phone: "(831) 555-0100"
    photo: /images/board/board-member-name.jpg
```

Notes:

- `order` controls display order
- `phone` is optional
- `photo` is optional
- Email addresses and phone numbers are public on the website

## Update Annual Awards

Each year's winners live in their own file under `src/content/awards/`.

To add a new year:

1. Open `templates/awards-year.yaml`.
2. Copy the full file contents.
3. Create a new file at `src/content/awards/YYYY.yaml` (e.g. `2026.yaml`).
4. Replace `YYYY` with the year.
5. For each category, uncomment `recipient` and fill in the winner's name.
6. Optionally add winner photos under `src/assets/awards/YYYY/` and uncomment `photo` with a relative path (e.g. `../../assets/awards/2026/best-wrench.jpg`). Supported formats include JPEG, PNG, WebP, AVIF, TIFF, and GIF. Astro automatically optimizes images at build time. Note: HEIC files must be converted to JPEG first (macOS: `sips -s format jpeg photo.heic --out photo.jpg`).
7. Commit the new file.

The eight category `id` values must stay exactly as shown in the template. Do not rename or reorder them.

## Update Meeting, Map, Calendar, or Social Links

Edit `src/content/site/settings.yaml`.

This is the file to change when:

- the meeting time changes
- the meeting location changes
- the Google Maps URL changes
- the map embed URL changes
- the Facebook or Instagram URL changes
- the Google Calendar URL changes

If you are not sure about formatting, compare against `templates/site-settings.yaml`.

## Reorder the Header Menu

Edit `src/content/site/navigation.yaml`.

Move items up or down in the list to change the order.

## Add Images

Place images under `public/images/`, for example:

- `public/images/board/`
- `public/images/events/`
- `public/images/trails/`

Then reference the image path in content, such as `/images/board/person-name.jpg`.

## Need Help?

- Ask a board member
- Ask in the Facebook group
- Bring the question to a monthly meeting

GitHub keeps a history of every change, so mistakes can be fixed.
