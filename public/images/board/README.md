# Board Member Photos

Place board member photos in this directory.

## Photo Guidelines

- **Format**: JPG or PNG
- **Recommended Size**: 240x240 pixels (displayed at 120x120)
- **Aspect Ratio**: Square (1:1)
- **Style**: Professional headshot
- **File Size**: Under 200KB recommended
- **Naming**: Use lowercase with hyphens (e.g., `gary-rowe.jpg`)

## How to Add Photos

1. Save your photo with the naming convention above
2. Add the file to this `public/images/board/` directory
3. Update the board member's entry in `src/content/pages/board.md` (in the frontmatter):
   ```yaml
     - name: Gary Rowe
       position: President
       order: 1
       email: president@sc4wdc.com
       photo: /images/board/gary-rowe.jpg
   ```
4. Commit and push your changes

## Note

The `photo` field is optional. If no photo is provided, a placeholder icon will be displayed instead.

