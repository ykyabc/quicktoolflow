# Search Console URL Group Audit

Date: 2026-06-11
Site: https://quicktoolflow.com

This audit groups the current built URLs by page type so Search Console coverage issues such as `Discovered - currently not indexed` can be checked by pattern instead of one URL at a time.

## Current URL Inventory

| URL group           | Built URLs | In sitemap | In priority sitemap | Noindex | Median visible words | Main risk                                                           |
| ------------------- | ---------: | ---------: | ------------------: | ------: | -------------------: | ------------------------------------------------------------------- |
| Home                |          1 |          1 |                   1 |       0 |                  895 | Healthy                                                             |
| All Tools           |          1 |          1 |                   1 |       0 |                 1434 | Healthy                                                             |
| Tool topic pages    |         10 |         10 |                  10 |       0 |                  760 | Mostly healthy; a few lighter hub pages                             |
| Tool detail pages   |         49 |         49 |                  15 |       0 |                  548 | Main indexing risk: many pages are function-first but content-light |
| Blog index          |          1 |          1 |                   1 |       0 |                 2406 | Healthy                                                             |
| Blog category index |          1 |          1 |                   1 |       0 |                  193 | Acceptable navigation page                                          |
| Blog category pages |         10 |         10 |                   0 |       0 |                  324 | Low standalone value; should not be priority URLs                   |
| Blog articles       |         70 |         70 |                  12 |       0 |                  786 | Many older guides are still light                                   |
| Legal/basic pages   |          4 |          4 |                   0 |       0 |                  239 | Low SEO priority                                                    |
| Admin/error pages   |          2 |          0 |                   0 |       2 |                   28 | Correctly excluded/noindexed                                        |

## Technical Indexing Signals

- Sitemap coverage is good: 147 canonical URLs are in `sitemap-0.xml`.
- Priority sitemap coverage is focused: 41 high-value URLs are in `priority-sitemap.xml`.
- No unexpected `noindex` pages were found.
- No indexed page is missing from the sitemap.
- No duplicate titles or duplicate meta descriptions were found in the built output.
- `/decapcms/` and `/404.html` are excluded/noindexed as expected.

Conclusion: the main cause of `Discovered - currently not indexed` is unlikely to be robots, canonical, or sitemap configuration. The stronger hypothesis is Google quality/crawl prioritization: many URLs are crawlable, but not yet convincing enough to be indexed quickly.

## Highest-Risk URL Groups

### 1. Tool Detail Pages

49 tool detail pages exist. 47 are under the 900-word review threshold, and the median page has about 548 visible words.

Priority tool pages that should be strengthened first:

| URL                        | Visible words | Priority sitemap | Suggested action                                                          |
| -------------------------- | ------------: | ---------------- | ------------------------------------------------------------------------- |
| `/tools/xml-formatter/`    |           474 | Yes              | Add real XML workflows, validation pitfalls, namespace examples, FAQ      |
| `/tools/json-to-csv/`      |           488 | Yes              | Add flattening rules, array handling, import checklist, examples          |
| `/tools/json-path-tester/` |           505 | Yes              | Add JSONPath patterns, arrays, filters, debugging examples                |
| `/tools/yaml-formatter/`   |           511 | Yes              | Add indentation mistakes, CI/config use cases, YAML vs JSON notes         |
| `/tools/css-minifier/`     |           536 | Yes              | Add safe minification workflow, source map caution, before/after examples |
| `/tools/csv-to-json/`      |           575 | Yes              | Add delimiter, typing, nested output, import/export examples              |

Secondary tool pages to strengthen after priority URLs:

- `/tools/html-minifier/`
- `/tools/base64-image-converter/`
- `/tools/url-query-builder/`
- `/tools/utm-builder/`
- `/tools/robots-txt-generator/`
- `/tools/sql-formatter/`
- `/tools/uuid-generator/`
- `/tools/regex-tester/`

### 2. Older Blog Guides

70 blog articles exist. 56 are under the 850-word review threshold. This does not mean they are bad, but it does mean many pages may look similar in depth to common lightweight tool-site articles.

Old or important guides to improve first:

| URL                                            | Visible words | Priority sitemap | Suggested action                                          |
| ---------------------------------------------- | ------------: | ---------------- | --------------------------------------------------------- |
| `/blog/json-formatting-best-practices/`        |           688 | Yes              | Add debugging workflow, broken examples, API/log handling |
| `/blog/utm-parameters-vs-query-parameters/`    |           700 | Yes              | Add campaign QA checklist and analytics examples          |
| `/blog/base64-image-converter-guide/`          |           665 | No               | Add performance thresholds and data URL examples          |
| `/blog/how-to-create-strong-passwords-guide/`  |           673 | No               | Add entropy examples, password manager workflow           |
| `/blog/text-diff-checker-guide/`               |           676 | No               | Add code/config/content review scenarios                  |
| `/blog/number-base-conversion-for-developers/` |           687 | No               | Add binary/hex/debugging examples                         |
| `/blog/css-minifier-guide/`                    |           696 | No               | Add production build and debugging cautions               |
| `/blog/yaml-formatting-guide/`                 |           725 | No               | Add config file mistakes and CI examples                  |

### 3. Blog Category Pages

Category pages are crawlable and indexed by design, but they are navigation pages with lower standalone value. They should not be submitted manually in Search Console unless Google already crawls them naturally.

Recommended stance:

- Keep category pages indexable for internal discovery.
- Do not put paginated category pages in the priority sitemap.
- Do not manually request indexing for paginated category URLs such as `/blog/category/developer-tools/4/`.

## How To Group Search Console Exports

When exporting affected URLs from Search Console, classify them by these patterns:

| Pattern                                                      | Group              | Priority    |
| ------------------------------------------------------------ | ------------------ | ----------- |
| `/tools/[tool-name]/`                                        | Tool detail        | Highest     |
| `/tools/structured-data/`, `/tools/security-encoding/`, etc. | Tool topic         | High        |
| `/blog/[slug]/`                                              | Blog article       | Medium-high |
| `/blog/category/[category]/`                                 | Blog category      | Low         |
| `/blog/category/[category]/2/` and deeper                    | Paginated category | Low         |
| `/privacy/`, `/terms/`, `/about/`, `/contact/`               | Basic pages        | Low         |

## Recommended Next Actions

1. In Search Console, export the `Discovered - currently not indexed` URL list.
2. Count URLs by the patterns above.
3. If tool detail pages are the largest group, continue the second round of core tool page differentiation.
4. If blog articles are the largest group, strengthen the older short guides before adding new posts.
5. If category/pagination URLs dominate, leave them alone unless important pages are being missed.
6. Submit only the priority sitemap after deploy: `https://quicktoolflow.com/priority-sitemap.xml`.

## Working Hypothesis

The site is technically indexable, but Google is being selective because many pages are new, similar in structure, and moderately thin. The most efficient fix is not to publish many more URLs immediately. The better next move is to make the existing high-intent tool URLs more differentiated, more specific, and more internally linked.

## Follow-Up Audit After Core Tool Enhancements

Date: 2026-06-11

This follow-up audit was run after three rounds of core tool page differentiation.

### Current Technical Status

- Built HTML URLs: 149
- URLs in the main sitemap: 147
- URLs in the priority sitemap: 41
- Unexpected noindex URLs: 0
- Indexed URLs missing from sitemap: 0
- Missing canonical URLs: 0
- Missing meta descriptions: 0
- Duplicate titles: 0
- Duplicate meta descriptions: 0
- Long titles: 0

Technical conclusion: the indexability foundation still looks healthy. The remaining Search Console risk is mostly a quality and crawl-priority issue, not a robots, sitemap, canonical, or metadata bug.

### Group Quality Snapshot

| URL group           | URLs | In sitemap | In priority sitemap | Median visible words | Under 700 words | Under 850 words | Main interpretation                                                |
| ------------------- | ---: | ---------: | ------------------: | -------------------: | --------------: | --------------: | ------------------------------------------------------------------ |
| Tool detail pages   |   49 |         49 |                  15 |                  576 |              35 |              45 | Improved for priority tools, but many secondary tools remain light |
| Blog articles       |   70 |         70 |                  12 |                  786 |              10 |              56 | Old articles are now the larger content-depth backlog              |
| Tool topic pages    |   10 |         10 |                  10 |                  760 |               4 |               7 | Some hub pages are still too light for priority sitemap status     |
| Blog category pages |   10 |         10 |                   0 |                  324 |              10 |              10 | Acceptable as navigation pages, not priority pages                 |
| All Tools           |    1 |          1 |                   1 |                 1434 |               0 |               0 | Healthy                                                            |
| Blog index          |    1 |          1 |                   1 |                 2406 |               0 |               0 | Healthy                                                            |

### What Improved

The most important high-intent tool pages are now substantially stronger:

| URL                              | Current visible words | Status                                      |
| -------------------------------- | --------------------: | ------------------------------------------- |
| `/tools/json-formatter/`         |                   934 | Strong core page                            |
| `/tools/json-schema-validator/`  |                   992 | Strong core page                            |
| `/tools/base64-image-converter/` |                   901 | Strong core page                            |
| `/tools/html-minifier/`          |                   822 | Much improved                               |
| `/tools/url-query-builder/`      |                   871 | Much improved                               |
| `/tools/csv-to-json/`            |                   839 | Much improved                               |
| `/tools/json-to-csv/`            |                   794 | Improved                                    |
| `/tools/css-minifier/`           |                   749 | Improved                                    |
| `/tools/yaml-formatter/`         |                   735 | Improved                                    |
| `/tools/xml-formatter/`          |                   689 | Improved, but still close to the lower band |
| `/tools/json-path-tester/`       |                   690 | Improved, but still close to the lower band |
| `/tools/qr-code-generator/`      |                   691 | Improved, but still close to the lower band |

### Remaining Tool Page Backlog

Most remaining under-700 tool pages are secondary tools and are not currently in the priority sitemap. They should be handled in smaller themed batches rather than all at once.

Highest-impact secondary tool pages to strengthen next:

| URL                                 | Visible words | Suggested cluster    |
| ----------------------------------- | ------------: | -------------------- |
| `/tools/robots-txt-generator/`      |           452 | SEO / Web publishing |
| `/tools/sql-formatter/`             |           486 | Developer formatting |
| `/tools/number-base-converter/`     |           497 | Developer converters |
| `/tools/cron-expression-generator/` |           498 | Developer generators |
| `/tools/uuid-generator/`            |           500 | Developer generators |
| `/tools/regex-tester/`              |           514 | Developer debugging  |
| `/tools/hash-generator/`            |           517 | Security / encoding  |
| `/tools/url-encoder/`               |           520 | Security / encoding  |
| `/tools/url-parser/`                |           520 | URL utilities        |
| `/tools/css-unit-converter/`        |           521 | Design / frontend    |

### Remaining Article Backlog

The blog backlog is now more important than adding many new posts. The first old-article batch should focus on articles under 700 visible words:

| URL                                              | Visible words | Priority                                   |
| ------------------------------------------------ | ------------: | ------------------------------------------ |
| `/blog/json-formatting-best-practices/`          |           688 | High because it is in the priority sitemap |
| `/blog/base64-image-converter-guide/`            |           665 | Medium-high                                |
| `/blog/how-to-create-strong-passwords-guide/`    |           673 | Medium-high                                |
| `/blog/text-diff-checker-guide/`                 |           676 | Medium                                     |
| `/blog/number-base-conversion-for-developers/`   |           687 | Medium                                     |
| `/blog/timestamp-batch-converter-guide/`         |           688 | Medium                                     |
| `/blog/robots-txt-generator-guide/`              |           691 | Medium                                     |
| `/blog/understanding-base64-encoding-explained/` |           695 | Medium                                     |
| `/blog/css-minifier-guide/`                      |           696 | Medium                                     |
| `/blog/slug-generator-guide/`                    |           697 | Medium                                     |

### Priority Sitemap Concern

Some priority sitemap URLs are navigation or hub pages with relatively low standalone content:

| URL                  | Visible words | Recommendation                          |
| -------------------- | ------------: | --------------------------------------- |
| `/blog/category/`    |           193 | Consider removing from priority sitemap |
| `/tools/seo/`        |           371 | Strengthen before treating as priority  |
| `/tools/converters/` |           468 | Strengthen before treating as priority  |
| `/tools/generators/` |           475 | Strengthen before treating as priority  |
| `/tools/text/`       |           535 | Strengthen before treating as priority  |

The main sitemap can keep these URLs. The priority sitemap should ideally highlight only the strongest crawl targets.

### Recommended Next Step

Do not add a large batch of new URLs yet. The next best move is:

1. Clean up the priority sitemap so it does not over-promote thin hub/navigation pages.
2. Strengthen the four thin priority hub pages: SEO, Converters, Generators, and Text Tools.
3. Then run an old-article strengthening batch starting with `json-formatting-best-practices`.

This sequence should send a clearer signal to Google: fewer weak priority URLs, stronger hubs, and deeper supporting articles.

## Priority Submission Follow-Up

Date: 2026-06-12

A separate execution checklist has been added for Search Console URL inspection and manual submission:

- `docs/search-console-priority-submission-plan.md`

Use that document as the working tracker for the current 40-URL priority pool. This audit remains the diagnostic baseline, while the submission plan defines batches, status labels, follow-up timing, and URLs that should not be manually submitted.
