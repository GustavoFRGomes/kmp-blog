# Kotlin MPP Blog

A simple Kotlin Multiplatform static blog generator.

## Prerequisites

- Java 11+
- Gradle (or use Gradle wrapper)

## Getting Started

1. (Optional) Generate Gradle wrapper:

   ```bash
   gradle wrapper
   ```

2. Build and generate site:

   ```bash
   ./gradlew buildSite
   ```

3. Preview locally:

   Serve the generated site with any static file server:

   ```bash
   # Python (built-in, no install needed)
   cd build/site && python3 -m http.server 8000

   # Or with npx serve
   npx serve build/site
   ```

   Then open http://localhost:8000 in your browser.

## Deploy

### GitHub Pages

- Copy `build/site` to `docs` (served by GitHub Pages on `docs` folder).
- Commit and push to `main` branch.

### Cloudflare Pages

#### Manual Deployment
- In Cloudflare Pages settings, set build command to `./gradlew buildSite` and publish directory to `build/site`.

#### Automated Deployment via GitHub Actions
The repository is configured to automatically deploy to Cloudflare Pages when changes are pushed to the `main` branch. To set this up:

1. Create a Cloudflare Pages project for your site.
2. Add the following secrets to your GitHub repository:
   - `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token with Pages permissions
   - `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID

The CI workflow will build the site and deploy it to Cloudflare Pages automatically.

## Customization

- Add Markdown posts in `content/posts`.
- Static assets in `static`.
- Update CSS in `static/style.css`.
- Edit `Main.kt` for site configuration (base URL, title, description).
- RSS feed available at `/rss.xml`.
