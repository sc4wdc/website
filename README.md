# Santa Cruz 4 Wheel Drive Club Website

This is the official website for the Santa Cruz 4 Wheel Drive Club (SC4WDC), a 501(c)(3) non-profit organization dedicated to keeping public lands open and supporting our local community.

🌐 **Live Site**: [https://sc4wdc.com](https://sc4wdc.com)

## About This Website

This website is built with [Astro](https://astro.build), a modern static site generator that creates fast, content-focused websites. The entire site is generated from simple markdown files, making it easy for non-technical users to update content.

## For Content Editors

### How to Edit Content

You don't need any programming knowledge or special software to edit this website! All edits can be made directly on GitHub using your web browser.

#### Step-by-Step Guide to Editing

1. **Navigate to GitHub**: Go to [https://github.com/sc4wdc/sc4wdc](https://github.com/sc4wdc/sc4wdc)
2. **Find the file you want to edit**:
   - For pages: `src/content/pages/`
   - For trail reports: `src/content/trails/`
   - For events: `src/content/events/`
   - For board members: `src/content/pages/board.md`
   - For site-wide settings: `src/consts.ts`
3. **Click on the file** to view it
4. **Click the pencil icon** (✏️) in the top-right to edit
5. **Make your changes** using the simple text editor
6. **Save your changes**:
   - Scroll to the bottom
   - Add a brief description of your changes
   - Click "Commit changes"
7. **Wait 2-3 minutes** for the site to automatically rebuild and deploy

### Editing Different Types of Content

#### Updating Board Members

**File**: `src/content/pages/board.md`

Board member data is stored in the frontmatter of this markdown file. Edit the `board` array entries to update names, positions, and contact info.

**Example**: To update a board member's information (YAML frontmatter):
```yaml
  - name: Gary Rowe
    position: President
    order: 1
    email: president@sc4wdc.com
    phone: "(831) 555-0100"
    photo: /images/board/gary-rowe.jpg
```

**Note**: Email addresses and phone numbers are publicly visible on the website. Make sure board members are comfortable with their contact information being displayed.

**Photo Field**: The `photo` field is optional. Omit it if no photo is available. See "Adding Board Member Photos" section below for details.

#### Updating Site-Wide Settings

**File**: `src/consts.ts`

This TypeScript file contains settings used across the site:
- Club name and tagline (`SITE`)
- Meeting times and location (`MEETING`)
- Social media links (`SOCIAL`)
- Nonprofit status and mission (`NONPROFIT`)
- Google Calendar URLs (`CALENDAR`)

#### Editing Pages (About, Membership)

**Files**: `src/content/pages/*.md`

These pages use Markdown format. Here's what you need to know:

```markdown
---
title: Page Title
description: Brief description for search engines
---

## Section Header

Regular text goes here.

**Bold text** and *italic text*

- Bullet point 1
- Bullet point 2

[Link text](https://example.com)
```

#### Adding a New Trail Report

1. Go to `src/content/trails/`
2. Click "Add file" → "Create new file"
3. Name your file: `trail-name.md` (use lowercase, hyphens instead of spaces)
4. Copy this template:

```markdown
---
title: Trail Name Here
date: 2024-03-15
location: Location Name
difficulty: Moderate
distance: 10 miles
duration: 4 hours
description: Brief one-sentence description of the trail
author: Your Name
---

## Trail Overview

Write about your experience here...

## What Went Well

- Point 1
- Point 2

## Challenges

Describe any challenges...

## Recommendations

Your tips for others...
```

**Difficulty levels**: Easy, Moderate, Difficult, Extreme

#### Adding a New Event

1. Go to `src/content/events/`
2. Click "Add file" → "Create new file"
3. Name your file: `event-name-2024.md`
4. Copy this template:

```markdown
---
title: Event Name
date: 2024-06-15
location: Location Name
time: 6:30 PM
description: Brief description of the event
registrationRequired: false
registrationUrl: https://example.com (optional)
---

## Event Details

Write about the event here...

## What to Bring

- Item 1
- Item 2

## Questions?

Contact information...
```

### Adding Images

Images need to be placed in the `public/` folder and referenced in your markdown:

```markdown
![Image description](/images/photo-name.jpg)
```

**Note**: You may need help from someone with Git installed to add images initially. Ask a board member for assistance.

### Adding Board Member Photos

Board member photos require direct file system access and cannot be added through GitHub's web interface alone. Here's the process:

1. **Prepare your photo**:
   - Format: JPG or PNG
   - Size: 240x240 pixels recommended (displayed at 120x120)
   - Square aspect ratio (1:1)
   - Professional headshot style
   - File size: Under 200KB
   - File name: Use lowercase with hyphens (e.g., `gary-rowe.jpg`)

2. **Add the photo file**:
   - Clone the repository locally or use GitHub's file upload feature
   - Place the photo in `public/images/board/`
   - Commit the file to the repository

3. **Update the board page**:
   - Edit `src/content/pages/board.md`
   - Add the `photo` field to the board member's entry with the path: `/images/board/filename.jpg`
   - Example (YAML frontmatter):
   ```yaml
     - name: Gary Rowe
       position: President
       order: 1
       email: president@sc4wdc.com
       photo: /images/board/gary-rowe.jpg
   ```

4. **Commit and deploy**: Push your changes to GitHub

**Important**: The photo field is optional. If left empty (`""`), a placeholder icon will display instead.

## For Developers

### Local Development Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sc4wdc/sc4wdc.git
   cd sc4wdc
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**: Navigate to `http://localhost:4321`

### Project Structure

```
sc4wdc/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   └── favicon.svg             # Site favicon
├── src/
│   ├── components/             # Reusable components
│   │   ├── EventCard.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   └── TrailCard.astro
│   ├── content/                # Content collections (markdown files)
│   │   ├── events/             # Event posts
│   │   ├── pages/              # Static pages
│   │   ├── trails/             # Trail reports
│   │   └── config.ts           # Content collection schemas
│   ├── consts.ts               # Site-wide settings (club name, meeting, social, etc.)
│   ├── layouts/
│   │   └── BaseLayout.astro    # Main page layout
│   ├── pages/                  # Page routes
│   │   ├── events/
│   │   │   └── [slug].astro    # Dynamic event pages
│   │   ├── trails/
│   │   │   └── [slug].astro    # Dynamic trail pages
│   │   ├── about.astro
│   │   ├── board.astro
│   │   ├── contact.astro
│   │   ├── events.astro
│   │   ├── index.astro         # Homepage
│   │   ├── membership.astro
│   │   └── trails.astro
├── astro.config.mjs            # Astro configuration
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript configuration
└── README.md                   # This file
```

### Available Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm test` | Run unit tests |
| `npm run lint` | Run type checking |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |

### Making Code Changes

1. Create a new branch: `git checkout -b feature-name`
2. Make your changes
3. Test locally: `npm run dev`
4. Build to verify: `npm run build`
5. Commit: `git commit -m "Description of changes"`
6. Push: `git push origin feature-name`
7. Create a Pull Request on GitHub

### Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch. The deployment workflow:

1. Runs `npm run build` to generate static files
2. Uploads the `dist/` folder
3. Deploys to GitHub Pages
4. Site is live at: https://sc4wdc.com

#### First-Time GitHub Pages Setup

If this is a new repository, you need to configure GitHub Pages:

1. Go to repository **Settings**
2. Click **Pages** in the left sidebar
3. Under "Build and deployment":
   - Source: **GitHub Actions**
4. Save the settings

After the first deployment, your site will be available at the URL shown on the Pages settings.

### Configuration Notes

#### Updating the Site URL

If the domain changes, update `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://sc4wdc.com',
  base: '/',
  // ...
});
```

## Adding Google Calendar

When you have the Google Calendar embed code:

1. Open `src/consts.ts`
2. Find the `CALENDAR` constant
3. Update with your Google Calendar information:

```typescript
export const CALENDAR = {
  embedUrl: "https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID",
  publicUrl: "https://calendar.google.com/calendar/u/0?cid=YOUR_CALENDAR_ID",
} as const;
```

### How to Get Your Google Calendar Embed Code

1. Go to [Google Calendar](https://calendar.google.com)
2. Find your club calendar in the left sidebar
3. Click the three dots (...) next to the calendar name
4. Select **"Settings and sharing"**
5. Scroll to **"Access permissions"** section:
   - Check **"Make available to public"** (if you want anyone to see it)
   - Note: You can keep it private and only share with specific people
6. Scroll to **"Integrate calendar"** section
7. Copy the **iframe** embed code (looks like `<iframe src="https://calendar.google.com/calendar/embed?src=...">`)
8. Extract the **URL** from the `src` attribute (the part between the quotes after `src=`)
9. This is your `embedUrl`
10. For `publicUrl`, use: `https://calendar.google.com/calendar/u/0?cid=YOUR_CALENDAR_ID`
    - Replace `YOUR_CALENDAR_ID` with your actual calendar ID (found in the same settings page)

### Example Configuration

```typescript
export const CALENDAR = {
  embedUrl: "https://calendar.google.com/calendar/embed?src=abc123%40group.calendar.google.com&ctz=America%2FLos_Angeles",
  publicUrl: "https://calendar.google.com/calendar/u/0?cid=abc123@group.calendar.google.com",
} as const;
```

The calendar will automatically display on the Events page once both URLs are configured.

## Markdown Formatting Guide

### Headers
```markdown
# Main Title
## Section Header
### Subsection
```

### Text Formatting
```markdown
**Bold text**
*Italic text*
***Bold and italic***
```

### Lists
```markdown
- Bullet point 1
- Bullet point 2
  - Nested item

1. Numbered item 1
2. Numbered item 2
```

### Links
```markdown
[Link text](https://example.com)
```

### Images
```markdown
![Image description](/images/photo.jpg)
```

### Blockquotes
```markdown
> This is a quote
```

## Need Help?

### For Content Updates
- Contact any board member
- Post in the Facebook group
- Ask at the monthly meeting

### For Technical Issues
- Create an issue on GitHub: [Issues Page](https://github.com/sc4wdc/sc4wdc/issues)
- Contact the VP (Dariusz Smigiel) who maintains the site

## Credits

- **Built with**: [Astro](https://astro.build)
- **Hosted on**: GitHub Pages
- **Design**: Custom theme inspired by off-road and outdoor aesthetics
- **Maintained by**: Santa Cruz 4 Wheel Drive Club Board Members

## License

This website is maintained by Santa Cruz 4 Wheel Drive Club. Content and design © 2025 SC4WDC. All rights reserved.
