# Santa Cruz 4 Wheel Drive Club Website

Official website for Santa Cruz 4 Wheel Drive Club, built with [Astro](https://astro.build).

Live site: [https://sc4wdc.com](https://sc4wdc.com)

## Editor Boundary

After the content separation work, the repo has a clear split:

- Editors change only `src/content/**`, `public/images/**`, and can copy from `templates/**`.
- Developers change `src/pages/**`, `src/components/**`, `src/layouts/**`, `src/utils/**`, `src/content/config.ts`, and build/config files.

If you are updating club content, do not edit application code.

## Editor-Owned Files

| What you want to change | File or folder |
| --- | --- |
| Club name, meeting info, map links, social links, calendar links | `src/content/site/settings.yaml` |
| Header navigation labels/order | `src/content/site/navigation.yaml` |
| Board member names, positions, emails, phones, photos | `src/content/board/members.yaml` |
| Home page copy | `src/content/pages/home.md` |
| Contact page copy | `src/content/pages/contact.md` |
| Events page copy | `src/content/pages/events.md` |
| Trails page copy | `src/content/pages/trails.md` |
| Board page intro/body copy | `src/content/pages/board.md` |
| About and Membership pages | `src/content/pages/about.md`, `src/content/pages/membership.md` |
| Individual events | `src/content/events/` |
| Individual trail reports | `src/content/trails/` |
| Images | `public/images/` |
| Copyable starting points | `templates/` |

## Common Editor Tasks

### Update site-wide settings

Edit `src/content/site/settings.yaml`.

This file controls:

- Club name and tagline
- Meeting schedule, address, Google Maps link, and embed URL
- Social media links
- Google Calendar links
- Footer nonprofit text

### Update navigation

Edit `src/content/site/navigation.yaml`.

Each item has:

- `href`: the page URL
- `label`: the text shown in the header

### Update board members

Edit `src/content/board/members.yaml`.

Each member can include:

- `name`
- `position`
- `order`
- `email`
- `phone` (optional)
- `photo` (optional, path under `public/images/board/`)

### Update page copy

Edit the matching file in `src/content/pages/`.

These files contain the user-facing text for the main pages. The Astro route files now only render the structured content.

### Add a new event

1. Copy `templates/event.md`
2. Create a new file in `src/content/events/`
3. Use a lowercase, hyphenated filename such as `summer-bbq-2026.md`

### Add a new trail report

1. Copy `templates/trail.md`
2. Create a new file in `src/content/trails/`
3. Use a lowercase, hyphenated filename such as `rubicon-spring-2026.md`

### Add or update images

Place images in `public/images/`, for example:

- `public/images/board/`
- `public/images/events/`
- `public/images/trails/`

Then reference them in content using paths like `/images/board/person-name.jpg`.

## Editing on GitHub

Non-technical editors can make all content changes directly in GitHub:

1. Open the repository on GitHub
2. Navigate to the file you want to change
3. Click the pencil icon
4. Edit the file
5. Commit the change
6. Wait a few minutes for deployment

For a shorter editor-only walkthrough, see `EDITING-GUIDE.md`.

## Local Development

```bash
npm install
npm run dev
```

Useful commands:

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the local dev server |
| `npm run build` | Type-check and build the site |
| `npm run lint` | Run Astro, ESLint, and Stylelint checks |
| `npm test` | Run tests |
| `npm run preview` | Preview the production build |

## Project Structure

```text
src/
  components/          Reusable Astro components
  content/
    board/             Board member data
    events/            Event entries
    pages/             Editor-owned page copy
    site/              Site-wide settings and navigation
    trails/            Trail reports
    config.ts          Validation schemas for editor-owned content
  layouts/             Shared page layouts
  pages/               Route files and rendering logic
  utils/               App-side helper utilities
public/
  images/              Editor-managed images
templates/             Copyable templates for new content
```

## Future CMS Option

If editing files in GitHub is still too technical later, the recommended next step is a lightweight Git-backed CMS layered on top of the existing `src/content/` structure.

See `docs/future-git-backed-cms.md`.
