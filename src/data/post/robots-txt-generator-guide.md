---
title: 'Robots.txt: Crawl Rules and Sitemaps'
excerpt: 'Learn what robots.txt does, how user-agent rules work, when to use disallow paths, and why robots.txt is not a privacy tool.'
publishDate: 2026-06-06
category: 'SEO'
tags:
  - robots.txt
  - technical seo
  - crawling
  - sitemap
author: 'QuickToolFlow'
---

Robots.txt is one of the simplest technical SEO files, but it is often misunderstood. It gives crawler instructions about which paths should or should not be crawled. It does not protect private pages, remove URLs from search results by itself, or replace proper access control.

Use the [Robots.txt Generator](/tools/robots-txt-generator/) to create a clean starter file, then review the rules before publishing.

## Where Robots.txt Lives

Robots.txt should be available at the root of a domain.

```text
https://example.com/robots.txt
```

Rules apply to that host. If you use subdomains, each subdomain can have its own robots.txt file.

## Basic Robots.txt Syntax

A simple file looks like this:

```text
User-agent: *
Disallow: /admin/
Disallow: /private/

Sitemap: https://example.com/sitemap.xml
```

`User-agent: *` means the rule group applies to all crawlers that respect robots.txt. `Disallow` tells crawlers not to crawl matching paths.

## Allow vs Disallow

`Disallow` blocks crawling for a path.

```text
Disallow: /search/
```

`Allow` can make an exception inside a broader blocked area.

```text
User-agent: *
Disallow: /assets/
Allow: /assets/public/
```

Not every crawler interprets complex rule conflicts in the same way, so keep rules simple when possible.

## Add Your Sitemap

The sitemap line helps crawlers discover your XML sitemap.

```text
Sitemap: https://example.com/sitemap.xml
```

For many static websites, this is one of the most useful lines in the file.

## Multiple Sitemaps and Sitemap Indexes

Large sites and static site generators often use a sitemap index instead of one sitemap file:

```text
Sitemap: https://example.com/sitemap-index.xml
```

That index can point to one or more sitemap files. Robots.txt can also include multiple `Sitemap` lines:

```text
Sitemap: https://example.com/sitemap-pages.xml
Sitemap: https://example.com/sitemap-posts.xml
```

Use absolute URLs and the canonical host. If the public site is `https://example.com`, avoid pointing crawlers to a staging domain, localhost URL, or old `www` variant unless that is the preferred host.

## Common Patterns

A simple public site often only needs a sitemap:

```text
User-agent: *
Allow: /

Sitemap: https://example.com/sitemap.xml
```

A site with internal search results may block those paths:

```text
User-agent: *
Disallow: /search/
Disallow: /internal/

Sitemap: https://example.com/sitemap.xml
```

Keep patterns broad enough to be useful but not so broad that they accidentally block important pages. For example, `Disallow: /tag` may also affect paths that only start with those characters.

## Pattern Review Examples

Before publishing a rule, read it as a prefix match:

```text
Disallow: /admin/
```

This is usually clear. It targets paths under `/admin/`.

```text
Disallow: /app
```

This is broader. It can match `/app`, `/app/`, `/application`, and other paths that begin the same way depending on crawler interpretation. A trailing slash often makes intent clearer:

```text
Disallow: /app/
```

When rules affect important folders, test a few real URLs manually and confirm which pages should remain crawlable.

## Robots.txt Is Not Security

Do not use robots.txt to hide private content. The file is public, and blocked paths can still be discovered from links, logs, referrers, or other sources.

If content is private, protect it with authentication, permissions, or server-side access control.

## Robots.txt vs Noindex

Robots.txt controls crawling. It does not reliably control indexing.

If you want a page excluded from search results, use a proper `noindex` directive on the page or in HTTP headers, and make sure crawlers are allowed to crawl the page so they can see it.

This distinction matters for Search Console. A URL blocked by robots.txt may still be known to Google if other pages link to it, but Google may not be able to crawl the page to see a `noindex` tag. If the goal is removal from search results, do not block the crawler before it can see the removal signal.

## Robots.txt and Crawl Budget

For small sites, robots.txt is mostly about avoiding obviously unhelpful crawl paths such as internal search, preview URLs, parameter-heavy pages, or generated admin routes. For larger sites, it can also help reduce wasted crawling.

Good candidates to block may include:

- internal search result pages
- duplicate filter paths
- temporary preview routes
- generated admin dashboards
- script endpoints that should not be crawled

Bad candidates to block include important article pages, product pages, landing pages, tool pages, and pages that need a `noindex` directive to be seen.

## Launch and Staging Mistakes

Robots.txt problems often happen during launches. A staging site may use:

```text
User-agent: *
Disallow: /
```

That is fine for a private preview environment, but it is dangerous if copied to production. Before launch, confirm that the production file allows the pages you want indexed and includes the correct sitemap URL.

Also check canonical domains. If your site uses `https://www.example.com`, the sitemap line should point to the preferred host, not an old preview domain.

## Practical Robots.txt Checklist

Before publishing:

- Is the file available at `/robots.txt`?
- Are paths written relative to the domain root?
- Are staging block rules removed before launch?
- Is the sitemap URL absolute?
- Are private pages protected by real access control?
- Are you using `noindex` where indexing control matters?
- Have you tested a few important URLs against the final rules?
- Does the sitemap line point to the deployed production domain?
- Are AI crawler or special bot rules separated clearly from normal search crawler rules?

## Troubleshooting Common Search Console Messages

If Search Console reports a robots-related issue, classify it first:

| Message pattern               | Likely meaning                               | What to check                                          |
| ----------------------------- | -------------------------------------------- | ------------------------------------------------------ |
| Blocked by robots.txt         | Google cannot crawl the URL                  | Review matching `Disallow` rules                       |
| Indexed, though blocked       | Google knows the URL but cannot crawl it     | Use `noindex` instead if removal is the goal           |
| Discovered but not indexed    | Known URL not yet crawled or indexed         | Usually quality/crawl priority, not necessarily robots |
| Sitemap submitted URL blocked | Sitemap contains a URL blocked by robots.txt | Remove the URL or change the robots rule               |

Robots.txt is only one part of indexing. Always check sitemap inclusion, page-level robots tags, canonical URLs, and actual page quality together.

## Related QuickToolFlow Tools

- [Robots.txt Generator](/tools/robots-txt-generator/) for creating crawler rules.
- [Meta Tag Generator](/tools/meta-tag-generator/) for generating robots meta tags.
- [SERP Snippet Preview Tool](/tools/serp-snippet-preview/) for checking how page metadata may appear in search.

## Related Guides

- [SERP Snippet Preview: Titles and Descriptions](/blog/serp-snippet-preview-guide/) for page-level search metadata.
- [Open Graph Preview for Social Cards](/blog/open-graph-preview-guide/) for social metadata checks.
- [SEO Tools](/tools/seo/) for robots.txt, metadata, snippets, and URL publishing helpers.
