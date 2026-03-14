# Future Git-Backed CMS Option

The current architecture is intentionally file-first:

- editors work in `src/content/**` and `public/images/**`
- Astro renders the site from validated content collections
- no database or runtime CMS is required

If the club later decides that editing files in GitHub is still too technical, the next step should be a lightweight Git-backed CMS.

## Why This Is the Right Next Step

- It keeps the existing Astro site static.
- It keeps the current `src/content/` structure instead of replacing it.
- It avoids adding a custom backend or database.
- It adds a friendlier editor UI on top of the content files already in the repo.

## What It Would Need

- Git provider access, such as GitHub
- Editor authentication through that provider
- A CMS config that maps forms to the existing collections:
  - `src/content/site/settings.yaml`
  - `src/content/site/navigation.yaml`
  - `src/content/board/members.yaml`
  - `src/content/pages/*.md`
  - `src/content/events/*.md`
  - `src/content/trails/*.md`

## Good Candidate Tools

- Decap CMS
- TinaCMS, if a richer editorial UI is needed later
- A similar Git-based editor that writes directly to the repo

## Recommended Rollout

1. Keep using the new file-based structure for now.
2. Collect editor pain points for a few weeks.
3. If GitHub editing is still too technical, prototype a Git-backed CMS against the existing content files.
4. Roll it out without changing the Astro rendering layer.

## Not Recommended Right Now

- A traditional database-backed CMS
- A custom admin backend
- Replacing Astro with a runtime CMS application

Those options add complexity that is not justified for the current static site.
