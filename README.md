# QuickToolFlow

QuickToolFlow is a privacy-first collection of free online tools for developers, writers, marketers, and everyday productivity workflows.

Production site: https://quicktoolflow.com

## What It Includes

- Text tools such as word count, case conversion, text diff, whitespace cleanup, and word frequency analysis.
- Developer tools such as JSON formatting, Base64 encoding, regex testing, JWT decoding, hashing, and cron helpers.
- Generators for passwords, UUIDs, QR codes, lorem ipsum, random numbers, and placeholder images.
- Converters for colors, timestamps, number bases, CSS units, JSON to CSV, and JSON to YAML.
- SEO utilities such as meta tag generation.

Most tools run entirely in the browser, so tool input is processed locally whenever possible.

## Tech Stack

- Astro v6
- Tailwind CSS v4
- TypeScript
- MDX content collections
- Sharp image optimization

## Local Development

Requires Node.js 22.12.0 or newer.

```bash
npm install
npm run dev
```

The development server runs at http://localhost:4321.

## Verification

Before deploying changes:

```bash
npm run build
npm run check
```

Also review the homepage, core tool pages, blog pages, dark mode, and mobile navigation in a browser.

## Advertising Setup

AdSense is disabled until a valid publisher ID is configured.

1. Add the approved client ID in `src/config.yaml`:

```yaml
analytics:
  vendors:
    googleAdsense:
      clientId: 'ca-pub-0000000000000000'
```

2. Replace the placeholder line in `public/ads.txt`:

```txt
google.com, pub-0000000000000000, DIRECT, f08c47fec0942fa0
```

Keep ad placements away from primary tool controls such as Generate, Copy, Download, Format, and Clear buttons.

## Project Notes

This project started from the AstroWind template and has been adapted into a static English utility site for QuickToolFlow.

## License

See [LICENSE.md](LICENSE.md).
