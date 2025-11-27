# Quick Editing Guide for SC4WDC Website

This is a simplified guide for club members who want to edit the website content.

## How to Edit Using GitHub (No Software Needed!)

### 1. Edit Existing Content

1. Navigate to the file you want to edit:
   - **About page**: `src/content/pages/about.md`
   - **Membership page**: `src/content/pages/membership.md`
   - **Trail reports**: `src/content/trails/` (click on any file)
   - **Events**: `src/content/events/` (click on any file)
   - **Club info**: `src/data/club-info.json`
1. Click the **pencil icon** (✏️) at the top right
1. Make your changes
1. Scroll to bottom, add a description of what you changed
1. Click **"Commit changes"**
1. Wait 2-3 minutes - your changes will be live!

### 2. Add a New Trail Report

1. Go to https://github.com/dsmigiel/sc4wdc/tree/main/src/content/trails
1. Click **"Add file"** → **"Create new file"**
1. Name your file: `trail-name.md` (example: `rubicon-spring-2024.md`)
1. Copy and paste this template:

```markdown
---
title: Your Trail Name
date: 2024-03-15
location: Trail Location
difficulty: Moderate
distance: 15 miles
duration: 6 hours
description: One sentence describing the trail
author: Your Name
---

## Trail Overview

Describe your experience...

## Highlights

- Point 1
- Point 2

## Tips

Share your recommendations...
```

1. Edit the template with your information
1. Click **"Commit new file"** at the bottom

**Difficulty Options**: Easy, Moderate, Difficult, Extreme

### 3. Add a New Event

1. Click **"Add file"** → **"Create new file"**
1. Name your file: `event-name.md` (example: `summer-bbq-2024.md`)
1. Copy and paste this template:

```markdown
---
title: Event Name
date: 2024-06-15
location: Event Location
time: 6:30 PM
description: Brief description
registrationRequired: false
---

## Event Details

Describe the event...

## What to Bring

- Item 1
- Item 2
```

1. Edit with your event details
1. Click **"Commit new file"**

### 4. Update Club Information

To change meeting times, board members, or social media links:

1. Go to src/data/club-info.json
1. Click the **pencil icon** (✏️)
1. Carefully edit the information (keep the format exactly the same!)
1. Click **"Commit changes"**

**Example - Changing a board member's information**:
```json
{
  "name": "New Person Name",
  "position": "President",
  "order": 1,
  "email": "president@sc4wdc.org",
  "phone": "(831) 555-0100",
  "photo": "/sc4wdc/images/board/person-name.jpg"
}
```

**Important**: Email addresses and phone numbers will be publicly visible on the website. Make sure board members agree to share their contact information.

**Photo Field**: The `photo` field is optional. Leave it as `""` if no photo is available. To add photos, see the README.md file for detailed instructions (requires file upload access).

### 5. Click **"Commit changes"**

The calendar will automatically appear on the Events page! If you haven't set it up yet, the page shows instructions on how to get the embed URL.

## Markdown Basics

When editing `.md` files, use these formatting tips:

| To Get This | Type This |
|-------------|-----------|
| **Bold text** | `**Bold text**` |
| *Italic text* | `*Italic text*` |
| Heading | `## Heading` |
| Bullet list | `- Item` |
| Numbered list | `1. Item` |
| Link | `[text](https://url.com)` |

## Need Help?

- **Ask at a meeting**: Bring questions to monthly meetings
- **Facebook group**: Post in our group
- **Contact board**: Reach out to any board member

Remember: You can't break anything! GitHub keeps a history of all changes, so mistakes can always be undone.

