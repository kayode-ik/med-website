# Local build

- live changes - `npm run dev`
- build dist - `npm run build`
- zip dist directory

# Update CPANEL

- Go to Account -> Dashboard
- Hover over the server icon - `Go to Cpanel`
- Click file manager
- open `public_html` directory
- delete everything except `.htaccess` and `.well-known`
- upload zipped dist to `public_html`
- extract content to `public_html/`
- move content to `public_html/`