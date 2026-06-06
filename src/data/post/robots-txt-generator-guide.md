---
title: 'Robots.txt Generator Guide: Crawl Rules, Sitemaps, and Common Mistakes'
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

## Robots.txt Is Not Security

Do not use robots.txt to hide private content. The file is public, and blocked paths can still be discovered from links, logs, referrers, or other sources.

If content is private, protect it with authentication, permissions, or server-side access control.

## Robots.txt vs Noindex

Robots.txt controls crawling. It does not reliably control indexing.

If you want a page excluded from search results, use a proper `noindex` directive on the page or in HTTP headers, and make sure crawlers are allowed to crawl the page so they can see it.

## Practical Robots.txt Checklist

Before publishing:

- Is the file available at `/robots.txt`?
- Are paths written relative to the domain root?
- Are staging block rules removed before launch?
- Is the sitemap URL absolute?
- Are private pages protected by real access control?
- Are you using `noindex` where indexing control matters?

## Related QuickToolFlow Tools

- [Robots.txt Generator](/tools/robots-txt-generator/) for creating crawler rules.
- [Meta Tag Generator](/tools/meta-tag-generator/) for generating robots meta tags.
- [SERP Snippet Preview Tool](/tools/serp-snippet-preview/) for checking how page metadata may appear in search.
