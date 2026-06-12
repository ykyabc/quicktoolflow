# Search Console Priority Submission Plan

Date: 2026-06-12
Site: https://quicktoolflow.com

This document is a working checklist for Search Console URL inspection, manual indexing requests, and follow-up tracking. It should be used after deploying the latest sitemap and structured-data changes.

## Goal

Improve discovery and indexing for the strongest existing pages first, instead of asking Google to process every new or low-priority URL at once.

Primary targets:

- Tool pages with strong search intent.
- Tool hub pages that connect many related utilities.
- A small set of high-value guide articles that support the tool clusters.

Do not manually request indexing for low-value paginated category URLs.

## Search Console Setup

Submit or resubmit these sitemaps in Search Console:

- `https://quicktoolflow.com/sitemap-index.xml`
- `https://quicktoolflow.com/priority-sitemap.xml`

Use `priority-sitemap.xml` as the working pool for manual URL inspection. The main sitemap can remain broader.

## Tracking Fields

Use this table structure in a spreadsheet or notes file.

| URL                                               | Group     | Batch | GSC status | Last crawled | Canonical selected | Manual request date | Follow-up date | Action                       |
| ------------------------------------------------- | --------- | ----- | ---------- | ------------ | ------------------ | ------------------- | -------------- | ---------------------------- |
| `https://quicktoolflow.com/tools/json-formatter/` | Core tool | 1     | Pending    |              |                    |                     |                | Inspect and request indexing |

Recommended GSC status labels:

- `Indexed`
- `Crawled - currently not indexed`
- `Discovered - currently not indexed`
- `Duplicate, Google chose different canonical`
- `Blocked / noindex`
- `Not found`
- `Unknown / not inspected`

## Batch 1: Foundation And Strongest Tool Cluster

Submit these first. They represent the strongest internal architecture and the most important structured-data workflows.

| Priority | URL                                                      | Why it matters                                | Desired result |
| -------: | -------------------------------------------------------- | --------------------------------------------- | -------------- |
|        1 | `https://quicktoolflow.com/`                             | Site root and main brand entry                | Indexed        |
|        2 | `https://quicktoolflow.com/tools/`                       | Main tools directory and largest internal hub | Indexed        |
|        3 | `https://quicktoolflow.com/tools/structured-data/`       | Strongest topic hub for JSON, CSV, YAML, XML  | Indexed        |
|        4 | `https://quicktoolflow.com/tools/json-formatter/`        | Core high-intent utility                      | Indexed        |
|        5 | `https://quicktoolflow.com/tools/json-schema-validator/` | High-value developer utility                  | Indexed        |
|        6 | `https://quicktoolflow.com/tools/json-path-tester/`      | Supports structured-data cluster depth        | Indexed        |
|        7 | `https://quicktoolflow.com/tools/csv-formatter/`         | Supports CSV cleanup and conversion workflows | Indexed        |
|        8 | `https://quicktoolflow.com/tools/json-to-csv/`           | Core converter, recently strengthened         | Indexed        |
|        9 | `https://quicktoolflow.com/tools/csv-to-json/`           | Paired converter for JSON/CSV workflow        | Indexed        |
|       10 | `https://quicktoolflow.com/blog/json-vs-yaml-vs-xml/`    | Bridge article for structured-data decisions  | Indexed        |

Follow-up after 7-10 days:

- If `Indexed`: leave it alone.
- If `Discovered - currently not indexed`: inspect again, confirm sitemap/canonical, then wait another week unless it is a core tool URL.
- If `Crawled - currently not indexed`: add more unique examples or link support before requesting again.

## Batch 2: Security, Encoding, And Publishing Utilities

Submit this after Batch 1 has been checked once.

| Priority | URL                                                            | Why it matters                               | Desired result |
| -------: | -------------------------------------------------------------- | -------------------------------------------- | -------------- |
|        1 | `https://quicktoolflow.com/tools/security-encoding/`           | Topic hub for Base64, JWT, hashes, passwords | Indexed        |
|        2 | `https://quicktoolflow.com/tools/code-formatting/`             | Topic hub for formatting/minification tools  | Indexed        |
|        3 | `https://quicktoolflow.com/tools/web-publishing/`              | Topic hub for metadata, UTM, QR, robots.txt  | Indexed        |
|        4 | `https://quicktoolflow.com/tools/base64/`                      | High-intent encoding utility                 | Indexed        |
|        5 | `https://quicktoolflow.com/tools/password-generator/`          | Broad utility keyword, featured tool         | Indexed        |
|        6 | `https://quicktoolflow.com/tools/qr-code-generator/`           | Broad utility keyword, structured data added | Indexed        |
|        7 | `https://quicktoolflow.com/tools/html-formatter/`              | Supports code-formatting cluster             | Indexed        |
|        8 | `https://quicktoolflow.com/tools/html-minifier/`               | Strengthened tool page                       | Indexed        |
|        9 | `https://quicktoolflow.com/tools/css-minifier/`                | Strengthened tool page                       | Indexed        |
|       10 | `https://quicktoolflow.com/blog/base64-vs-url-encoding-guide/` | Bridge article for encoding cluster          | Indexed        |

## Batch 3: Remaining Priority Hubs And Converters

Submit this after Batch 2, especially if Search Console starts indexing tool hubs reliably.

| Priority | URL                                                                       | Why it matters               | Desired result |
| -------: | ------------------------------------------------------------------------- | ---------------------------- | -------------- |
|        1 | `https://quicktoolflow.com/tools/frontend-design/`                        | Frontend/design topic hub    | Indexed        |
|        2 | `https://quicktoolflow.com/tools/converters/`                             | Converter hub                | Indexed        |
|        3 | `https://quicktoolflow.com/tools/generators/`                             | Generator hub                | Indexed        |
|        4 | `https://quicktoolflow.com/tools/text/`                                   | Text tool hub                | Indexed        |
|        5 | `https://quicktoolflow.com/tools/developer/`                              | Developer tool hub           | Indexed        |
|        6 | `https://quicktoolflow.com/tools/seo/`                                    | SEO tool hub                 | Indexed        |
|        7 | `https://quicktoolflow.com/tools/yaml-formatter/`                         | Structured-data support tool | Indexed        |
|        8 | `https://quicktoolflow.com/tools/xml-formatter/`                          | Structured-data support tool | Indexed        |
|        9 | `https://quicktoolflow.com/tools/timestamp-converter/`                    | Core converter utility       | Indexed        |
|       10 | `https://quicktoolflow.com/blog/top-10-free-online-developer-tools-2026/` | Broad discovery article      | Indexed        |

## Batch 4: Supporting Article Cluster

Use this batch after the main tool URLs have been inspected. These articles should support tool discovery, not replace tool page submissions.

| Priority | URL                                                                  | Supports                              | Desired result |
| -------: | -------------------------------------------------------------------- | ------------------------------------- | -------------- |
|        1 | `https://quicktoolflow.com/blog/csv-vs-json-for-developers/`         | Structured data cluster               | Indexed        |
|        2 | `https://quicktoolflow.com/blog/why-is-my-json-invalid/`             | JSON Formatter                        | Indexed        |
|        3 | `https://quicktoolflow.com/blog/clean-api-data-before-importing/`    | JSON Path, JSON to CSV, CSV Formatter | Indexed        |
|        4 | `https://quicktoolflow.com/blog/json-schema-for-api-validation/`     | JSON Schema Validator                 | Indexed        |
|        5 | `https://quicktoolflow.com/blog/common-csv-formatting-problems/`     | CSV Formatter                         | Indexed        |
|        6 | `https://quicktoolflow.com/blog/json-formatting-best-practices/`     | JSON Formatter                        | Indexed        |
|        7 | `https://quicktoolflow.com/blog/json-schema-vs-json-validation/`     | JSON Schema Validator                 | Indexed        |
|        8 | `https://quicktoolflow.com/blog/html-formatter-vs-html-minifier/`    | HTML Formatter, HTML Minifier         | Indexed        |
|        9 | `https://quicktoolflow.com/blog/utm-parameters-vs-query-parameters/` | UTM Builder, URL Query Builder        | Indexed        |

## Do Not Manually Submit

These URLs can remain crawlable where appropriate, but should not consume manual indexing requests:

- `/blog/category/developer-tools/2/`
- `/blog/category/developer-tools/3/`
- `/blog/category/developer-tools/4/`
- `/blog/category/security/2/`
- Any future `/blog/category/[category]/2/` or deeper pagination.
- `/privacy/`
- `/terms/`
- `/contact/`
- `/about/`
- `/404.html`

Reason:

- Category pagination is now `noindex, follow` and excluded from the sitemap.
- Legal/basic pages are useful for trust and AdSense review, but they are not priority organic landing pages.
- Error/admin pages should not be indexed.

## Follow-Up Rules

### If a URL is Indexed

No action needed. Record the date and move on.

### If a URL is Discovered But Not Indexed

For Batch 1 and Batch 2 tool pages:

1. Confirm the URL is in `priority-sitemap.xml`.
2. Confirm canonical points to itself.
3. Confirm the page has internal links from a hub, related tools, or related guides.
4. Wait 7-14 days before requesting indexing again.

For article URLs:

1. Check whether the article has enough original explanation and internal links.
2. Add a stronger example, comparison table, or checklist if it remains stuck after 2-3 weeks.
3. Request indexing again after the content update.

### If a URL is Crawled But Not Indexed

Treat this as a quality signal, not a technical crawling problem.

Recommended fixes:

- Add a practical example that does not appear on similar pages.
- Add a short troubleshooting section.
- Add better links from the relevant topic hub.
- Link from one or two supporting articles using descriptive anchor text.
- Avoid requesting indexing repeatedly without changing the page.

### If Google Chooses A Different Canonical

Check:

- Does the page title or description overlap too heavily with another page?
- Does the content mostly repeat the parent topic page?
- Does canonical point to the exact trailing-slash URL?
- Does the internal link target consistently use the trailing-slash version?

## Weekly Review Rhythm

Week 1:

- Submit both sitemaps.
- Inspect Batch 1.
- Request indexing for Batch 1 pages that are not indexed.

Week 2:

- Recheck Batch 1.
- Inspect Batch 2.
- Request indexing for Batch 2 pages.

Week 3:

- Recheck Batch 2.
- Inspect Batch 3.
- Request indexing for Batch 3 pages only if Batch 1/2 are improving.

Week 4:

- Inspect Batch 4 articles.
- Strengthen any article that is `Crawled - currently not indexed`.
- Do not submit new low-priority URLs until the priority pool stabilizes.

## Success Metrics

Track these numbers weekly:

- Indexed URLs in Batch 1.
- Indexed URLs in Batch 2.
- Number of priority tool pages still `Discovered - currently not indexed`.
- Number of priority tool pages `Crawled - currently not indexed`.
- Whether Google-selected canonical matches the submitted URL.

Good short-term target:

- Batch 1: 8-10 indexed URLs.
- Batch 2: 6-10 indexed URLs.
- No priority URL blocked by `noindex`.
- No priority URL missing from sitemap.

## Current Priority Pool Summary

| Group               | URLs | Manual submission priority |
| ------------------- | ---: | -------------------------- |
| Foundation pages    |    3 | Highest                    |
| Tool topic hubs     |   10 | High                       |
| Core tool pages     |   15 | Highest                    |
| Supporting articles |   12 | Medium-high                |
| Total priority pool |   40 | Controlled manual pool     |

This pool is intentionally smaller than the full sitemap. The goal is to help Google understand the strongest site sections first, then let internal links and the main sitemap carry the rest.
