# Embrise SEO deployment checklist

## Before publishing

1. Install the locked project dependencies with `npm ci`.
2. Run `npm run build` and confirm the build completes. The build creates static entry files for all canonical routes and legacy aliases.
3. Publish the `dist/` directory using the existing GitHub Pages workflow.

## Verify after publishing

Open these URLs directly in a private browser window and confirm each page loads on refresh:

- `https://embrise.in/`
- `https://embrise.in/services/web-development/`
- `https://embrise.in/services/custom-software-development/`
- `https://embrise.in/insights/who-needs-a-website/`
- `https://embrise.in/insights/what-ai-can-do-for-your-business/`
- `https://embrise.in/robots.txt`
- `https://embrise.in/sitemap.xml`

Also test one old URL such as `https://embrise.in/#/whoneedsawebsite`; it should resolve to the corresponding new insights URL.

## Search engine setup

1. Add `https://embrise.in` to Google Search Console and complete site ownership verification.
2. Submit `https://embrise.in/sitemap.xml` in the Sitemaps report.
3. Inspect the homepage, each service page and each article. Request indexing after the live pages are accessible.
4. Check the Pages/Indexing and Core Web Vitals reports over time. Fix any crawl errors reported by Google.
5. Optionally add the site to Bing Webmaster Tools and submit the same sitemap.

## Notes

- Sitemap entries include the 13 canonical pages only; legacy URLs are intentionally excluded.
- Old route aliases and hash-based bookmarks are retained for compatibility.
- Article body copy and original H1 headings have been retained during this SEO pass. No publication dates, authors, client names, performance guarantees or physical addresses have been invented.
- Search rankings and indexing timing are controlled by search engines and cannot be guaranteed by code changes alone.
