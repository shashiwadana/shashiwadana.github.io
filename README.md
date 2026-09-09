# Shashiwadana Nirmani — Portfolio Redesign

A dependency-free static portfolio designed for GitHub Pages.

## Files

- `index.html` — all website content and semantic structure
- `css/styles.css` — all visual styling, layout, responsive rules, and design variables
- `js/main.js` — mobile menu, active navigation, and publication-year filters
- `images/` — keep using your existing image folder
- `favicon.ico` — keep using your existing favicon if desired

## How to replace the current site

1. Back up the current repository.
2. Replace the current `index.html` with this one.
3. Add `css/styles.css`.
4. Add `js/main.js`.
5. Keep your current `images/` directory unchanged.
6. You can remove the old Colorlib-related CSS/JS libraries once nothing else in your repository uses them.

## Easy customisation

Most visual changes can be made at the top of `css/styles.css` under `:root`.

- `--accent` changes the main green accent.
- `--sidebar` changes the desktop sidebar width.
- `--content` changes the maximum content width.
- `--radius` changes card roundness.

## Adding content

### Experience / Education
Copy one `.timeline-item` block and edit the date, heading, organisation, and details.

### Publication
Copy one `.publication` block and set the matching `data-year`. If it is a new year, add one publication filter button with the same `data-year`.

### Research project
Copy one `.project-card` block.

### Certification
Copy one `.cert-card` link.

### Testimonial
Copy one `.quote-card` block.

No framework, template license, attribution footer, jQuery, Bootstrap, carousel library, or animation library is required.

## Beyond Research: adding the extra image
The updated gallery includes one additional slot using `images/img_6.jpeg`.
Add your new photo to the `images` folder with that filename, or change the filename in `index.html`.
