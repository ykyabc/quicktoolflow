export interface RelatedGuide {
  title: string;
  href: string;
  description: string;
}

export const relatedGuidesMap: Record<string, RelatedGuide[]> = {
  'word-counter': [
    {
      title: 'Word Counter Guide',
      href: '/blog/word-counter-guide/',
      description: 'Learn how word count, character count, sentence count, and reading time estimates work.',
    },
    {
      title: 'Word Frequency Counter Guide',
      href: '/blog/word-frequency-counter-guide/',
      description: 'Use frequency analysis to find repeated terms and improve drafts after counting text length.',
    },
  ],
  'word-frequency-counter': [
    {
      title: 'Word Frequency Counter Guide',
      href: '/blog/word-frequency-counter-guide/',
      description: 'Learn how word frequency analysis reveals repetition, filler words, and content patterns.',
    },
    {
      title: 'Word Counter Guide',
      href: '/blog/word-counter-guide/',
      description: 'Combine frequency analysis with word count and reading time for practical content review.',
    },
  ],
  'whitespace-remover': [
    {
      title: 'Whitespace Remover Guide',
      href: '/blog/whitespace-remover-guide/',
      description: 'Learn how to clean extra spaces, blank lines, tabs, and pasted text without breaking structure.',
    },
    {
      title: 'Text Diff Checker Guide',
      href: '/blog/text-diff-checker-guide/',
      description: 'Clean spacing before comparing two versions of a draft, snippet, or copied text.',
    },
  ],
  'case-converter': [
    {
      title: 'Case Converter Guide',
      href: '/blog/case-converter-guide/',
      description: 'Compare title case, sentence case, camelCase, snake_case, kebab-case, and other formats.',
    },
    {
      title: 'Slug Generator Guide',
      href: '/blog/slug-generator-guide/',
      description: 'Turn normalized headings and labels into readable URL slugs.',
    },
  ],
  'text-to-slug': [
    {
      title: 'Slug Generator Guide',
      href: '/blog/slug-generator-guide/',
      description: 'Learn how clean URL slugs work and how to create stable, readable page paths.',
    },
    {
      title: 'UUID vs Short ID vs Slug',
      href: '/blog/uuid-vs-short-id-vs-slug/',
      description: 'Compare readable slugs with UUIDs and short IDs for URLs, records, and share links.',
    },
    {
      title: 'Case Converter Guide',
      href: '/blog/case-converter-guide/',
      description: 'Normalize titles and headings before converting them into URL-friendly slugs.',
    },
  ],
  'text-diff': [
    {
      title: 'Text Diff Checker Guide',
      href: '/blog/text-diff-checker-guide/',
      description: 'Learn how line-by-line comparison helps review drafts, code snippets, and config changes.',
    },
    {
      title: 'Whitespace Remover Guide',
      href: '/blog/whitespace-remover-guide/',
      description: 'Normalize messy spacing before comparing two similar text versions.',
    },
  ],
  'text-reverser': [
    {
      title: 'Text Reverser Guide',
      href: '/blog/text-reverser-guide/',
      description: 'Learn when to reverse characters, words, or lines and what formatting issues to watch for.',
    },
    {
      title: 'Case Converter Guide',
      href: '/blog/case-converter-guide/',
      description: 'Learn how quick text transformations support naming, formatting, and cleanup workflows.',
    },
    {
      title: 'Whitespace Remover Guide',
      href: '/blog/whitespace-remover-guide/',
      description: 'Clean copied text before applying small transformations such as reversing words or lines.',
    },
  ],
  'json-formatter': [
    {
      title: 'Why Is My JSON Invalid?',
      href: '/blog/why-is-my-json-invalid/',
      description: 'Debug common JSON syntax errors such as trailing commas, quotes, comments, and bad escapes.',
    },
    {
      title: 'Clean API Data Before Importing',
      href: '/blog/clean-api-data-before-importing/',
      description: 'Use a practical workflow for validating, inspecting, and preparing API responses.',
    },
    {
      title: 'JSON vs YAML vs XML',
      href: '/blog/json-vs-yaml-vs-xml/',
      description: 'Compare structured data formats before choosing how to store or share a payload.',
    },
    {
      title: 'JSON Schema vs JSON Validation',
      href: '/blog/json-schema-vs-json-validation/',
      description: 'Understand the difference between parseable JSON and data that matches an expected schema.',
    },
    {
      title: 'JSON Schema Validator Guide',
      href: '/blog/json-schema-validator-guide/',
      description: 'Validate formatted JSON against expected API and configuration shapes.',
    },
    {
      title: 'JSON Formatting Best Practices',
      href: '/blog/json-formatting-best-practices/',
      description: 'Learn how to format, validate, and clean JSON data for APIs, debugging, and development.',
    },
    {
      title: 'JSON to CSV Conversion Guide',
      href: '/blog/json-to-csv-conversion-guide/',
      description: 'See how formatted JSON can be prepared for spreadsheets, reporting, and CSV export.',
    },
  ],
  'json-minifier': [
    {
      title: 'JSON Minifier Guide',
      href: '/blog/json-minifier-guide/',
      description: 'Learn what JSON minification changes, when compact JSON is useful, and what mistakes to avoid.',
    },
    {
      title: 'JSON Schema Validator Guide',
      href: '/blog/json-schema-validator-guide/',
      description: 'Check JSON structure before creating compact output for transport or storage.',
    },
    {
      title: 'JSON Schema vs JSON Validation',
      href: '/blog/json-schema-vs-json-validation/',
      description: 'See why valid JSON syntax is not the same as valid API or configuration data.',
    },
    {
      title: 'JSON Formatting Best Practices',
      href: '/blog/json-formatting-best-practices/',
      description: 'Understand when to keep JSON readable and when to produce compact output.',
    },
  ],
  'json-schema-validator': [
    {
      title: 'JSON Schema for API Validation',
      href: '/blog/json-schema-for-api-validation/',
      description: 'Learn how schemas protect API contracts by checking fields, types, arrays, and enums.',
    },
    {
      title: 'JSON Schema vs JSON Validation',
      href: '/blog/json-schema-vs-json-validation/',
      description: 'Learn when to use syntax validation and when to validate data against a schema contract.',
    },
    {
      title: 'JSON Schema Validator Guide',
      href: '/blog/json-schema-validator-guide/',
      description: 'Learn how schema validation checks JSON types, required fields, arrays, enums, and nested objects.',
    },
    {
      title: 'JSON Formatting Best Practices',
      href: '/blog/json-formatting-best-practices/',
      description: 'Format and parse JSON before checking whether it matches a schema contract.',
    },
  ],
  'json-path-tester': [
    {
      title: 'Clean API Data Before Importing',
      href: '/blog/clean-api-data-before-importing/',
      description: 'Find nested records inside API responses before converting or importing them.',
    },
    {
      title: 'JSON Path Tester Guide',
      href: '/blog/json-path-tester-guide/',
      description: 'Learn how to query nested JSON objects, arrays, indexes, and wildcard matches.',
    },
    {
      title: 'JSON Schema vs JSON Validation',
      href: '/blog/json-schema-vs-json-validation/',
      description: 'Validate structure before writing JSON paths against nested API response data.',
    },
    {
      title: 'JSON Schema Validator Guide',
      href: '/blog/json-schema-validator-guide/',
      description: 'Validate payload shape before writing paths against nested response data.',
    },
  ],
  'json-to-csv': [
    {
      title: 'CSV vs JSON for Developers',
      href: '/blog/csv-vs-json-for-developers/',
      description: 'Understand when structured JSON should become spreadsheet-friendly CSV.',
    },
    {
      title: 'Clean API Data Before Importing',
      href: '/blog/clean-api-data-before-importing/',
      description: 'Validate and inspect API data before turning it into rows and columns.',
    },
    {
      title: 'JSON to CSV Conversion Guide',
      href: '/blog/json-to-csv-conversion-guide/',
      description:
        'Learn how JSON to CSV conversion works, how nested objects are handled, and when to use CSV output.',
    },
    {
      title: 'JSON Formatting Best Practices',
      href: '/blog/json-formatting-best-practices/',
      description: 'Clean and validate JSON before converting it to CSV or another structured format.',
    },
  ],
  'csv-formatter': [
    {
      title: 'Common CSV Formatting Problems',
      href: '/blog/common-csv-formatting-problems/',
      description: 'Fix headers, delimiters, quotes, line breaks, encodings, and empty rows before import.',
    },
    {
      title: 'CSV vs JSON for Developers',
      href: '/blog/csv-vs-json-for-developers/',
      description: 'Compare table-shaped CSV with nested JSON before choosing a data workflow.',
    },
    {
      title: 'CSV Formatting Guide',
      href: '/blog/csv-formatting-guide/',
      description: 'Learn how CSV delimiters, quoting, line breaks, and row cleanup work.',
    },
    {
      title: 'CSV to JSON Conversion Guide',
      href: '/blog/csv-to-json-conversion-guide/',
      description: 'See why clean CSV headers and fields produce better JSON output.',
    },
  ],
  'csv-to-json': [
    {
      title: 'Common CSV Formatting Problems',
      href: '/blog/common-csv-formatting-problems/',
      description: 'Clean CSV structure first so converted JSON keys and values are predictable.',
    },
    {
      title: 'CSV vs JSON for Developers',
      href: '/blog/csv-vs-json-for-developers/',
      description: 'Learn how tabular CSV data becomes structured JSON objects.',
    },
    {
      title: 'CSV to JSON Conversion Guide',
      href: '/blog/csv-to-json-conversion-guide/',
      description: 'Learn how headers become JSON keys and how quoted CSV fields should be parsed.',
    },
    {
      title: 'CSV Formatting Guide',
      href: '/blog/csv-formatting-guide/',
      description: 'Clean CSV delimiters, quotes, rows, and whitespace before converting to JSON.',
    },
  ],
  'json-to-yaml': [
    {
      title: 'JSON vs YAML vs XML',
      href: '/blog/json-vs-yaml-vs-xml/',
      description: 'Compare structured formats before converting application data into configuration data.',
    },
    {
      title: 'JSON to YAML Conversion Guide',
      href: '/blog/json-to-yaml-conversion-guide/',
      description: 'Understand the differences between JSON and YAML and how to convert data between both formats.',
    },
    {
      title: 'JSON Formatting Best Practices',
      href: '/blog/json-formatting-best-practices/',
      description: 'Validate JSON first so configuration conversion is easier to debug.',
    },
  ],
  'yaml-formatter': [
    {
      title: 'JSON vs YAML vs XML',
      href: '/blog/json-vs-yaml-vs-xml/',
      description: 'Understand why YAML is useful for human-edited configuration and where it can be risky.',
    },
    {
      title: 'YAML Formatting Guide',
      href: '/blog/yaml-formatting-guide/',
      description: 'Learn why YAML indentation matters and how to avoid common configuration mistakes.',
    },
    {
      title: 'JSON to YAML Conversion Guide',
      href: '/blog/json-to-yaml-conversion-guide/',
      description: 'Understand how YAML and JSON differ when moving structured configuration data.',
    },
  ],
  'xml-formatter': [
    {
      title: 'JSON vs YAML vs XML',
      href: '/blog/json-vs-yaml-vs-xml/',
      description: 'See when XML is still useful for feeds, documents, namespaces, and schema-heavy integrations.',
    },
    {
      title: 'XML Formatting Guide',
      href: '/blog/xml-formatting-guide/',
      description: 'Learn what well-formed XML means and how to format APIs, feeds, and sitemaps.',
    },
  ],
  'password-generator': [
    {
      title: 'Password Entropy Explained',
      href: '/blog/password-entropy-explained/',
      description: 'Learn how length, character pools, and randomness affect password strength.',
    },
    {
      title: 'How to Create Strong Passwords',
      href: '/blog/how-to-create-strong-passwords-guide/',
      description: 'Learn what makes a password secure and how to avoid common password mistakes.',
    },
    {
      title: 'UUID vs Random String',
      href: '/blog/uuid-vs-random-string-guide/',
      description: 'Understand when random strings should be treated as secrets and when UUIDs are enough.',
    },
  ],
  'qr-code-generator': [
    {
      title: 'QR Code Use Cases',
      href: '/blog/qr-code-use-cases-for-marketing-and-operations/',
      description: 'Explore QR code workflows for campaigns, events, WiFi access, support, and operations.',
    },
    {
      title: 'How to Create QR Codes',
      href: '/blog/how-to-create-qr-codes-guide/',
      description: 'Learn how QR codes work and how to create QR codes for URLs, WiFi, email, phone numbers, and more.',
    },
  ],
  'jwt-decoder': [
    {
      title: 'JWT Security Best Practices',
      href: '/blog/jwt-security-best-practices/',
      description: 'Learn how to inspect JWTs safely without confusing decoding with verification.',
    },
    {
      title: 'JWT Decoder Guide',
      href: '/blog/jwt-decoder-guide-json-web-token-explained/',
      description:
        'Understand JSON Web Tokens, claims, expiration, signatures, and how to inspect JWT payloads safely.',
    },
    {
      title: 'Understanding Base64 Encoding',
      href: '/blog/understanding-base64-encoding-explained/',
      description: 'Learn why JWT header and payload sections use Base64Url-style encoding.',
    },
  ],
  'regex-tester': [
    {
      title: 'Regex Tutorial for Beginners',
      href: '/blog/regex-tutorial-beginners-guide/',
      description: 'Learn regular expression basics with practical examples and testing tips.',
    },
  ],
  'markdown-preview': [
    {
      title: 'Markdown Preview Guide',
      href: '/blog/markdown-preview-guide-syntax-cheatsheet/',
      description: 'Learn Markdown syntax and how to preview formatted content before publishing.',
    },
  ],
  base64: [
    {
      title: 'Base64 Image vs Image File',
      href: '/blog/base64-image-vs-image-file/',
      description: 'Compare embedded Base64 data URLs with normal image files, caching, and performance tradeoffs.',
    },
    {
      title: 'Base64 Image Converter Guide',
      href: '/blog/base64-image-converter-guide/',
      description: 'See how Base64 encoding applies to image data URLs and small embedded assets.',
    },
    {
      title: 'Base64 vs URL Encoding',
      href: '/blog/base64-vs-url-encoding-guide/',
      description: 'Compare Base64, Base64Url, and URL encoding in practical web development workflows.',
    },
    {
      title: 'Understanding Base64 Encoding',
      href: '/blog/understanding-base64-encoding-explained/',
      description: 'Learn what Base64 encoding is, how it works, and when to use it.',
    },
    {
      title: 'JWT Decoder Guide',
      href: '/blog/jwt-decoder-guide-json-web-token-explained/',
      description: 'See a practical example of Base64Url-encoded data inside JSON Web Tokens.',
    },
  ],
  'base64-image-converter': [
    {
      title: 'Base64 Image vs Image File',
      href: '/blog/base64-image-vs-image-file/',
      description: 'Learn when a Base64 image data URL is useful and when a normal image file is better.',
    },
    {
      title: 'Base64 Image Converter Guide',
      href: '/blog/base64-image-converter-guide/',
      description: 'Learn how Base64 image data URLs work and when embedded images are useful or risky.',
    },
    {
      title: 'Understanding Base64 Encoding',
      href: '/blog/understanding-base64-encoding-explained/',
      description: 'Understand the encoding foundation behind Base64 image strings.',
    },
  ],
  'timestamp-converter': [
    {
      title: 'Timestamp Conversion for Logs and APIs',
      href: '/blog/timestamp-log-debugging-guide/',
      description: 'Debug API and log timestamps by checking units, time zones, and event order.',
    },
    {
      title: 'Unix Seconds vs Milliseconds',
      href: '/blog/unix-seconds-vs-milliseconds/',
      description: 'Learn how to detect timestamp units before converting dates from APIs, logs, or exports.',
    },
    {
      title: 'Timestamp Batch Converter Guide',
      href: '/blog/timestamp-batch-converter-guide/',
      description: 'Convert many timestamp values at once when logs or exports contain multiple rows.',
    },
    {
      title: 'Unix Timestamp Explained',
      href: '/blog/unix-timestamp-explained-guide/',
      description: 'Understand Unix timestamps and how to convert them into human-readable dates.',
    },
  ],
  'timestamp-batch-converter': [
    {
      title: 'Timestamp Conversion for Logs and APIs',
      href: '/blog/timestamp-log-debugging-guide/',
      description: 'Use batch conversion to compare event sequences, exports, and mixed timestamp formats.',
    },
    {
      title: 'Unix Seconds vs Milliseconds',
      href: '/blog/unix-seconds-vs-milliseconds/',
      description: 'Compare 10-digit second timestamps with 13-digit millisecond timestamps in batch data.',
    },
    {
      title: 'Timestamp Batch Converter Guide',
      href: '/blog/timestamp-batch-converter-guide/',
      description: 'Learn how to convert timestamp lists and detect seconds, milliseconds, and date strings.',
    },
    {
      title: 'Unix Timestamp Explained',
      href: '/blog/unix-timestamp-explained-guide/',
      description: 'Understand Unix time before converting many timestamp values at once.',
    },
  ],
  'number-base-converter': [
    {
      title: 'Number Base Conversion for Developers',
      href: '/blog/number-base-conversion-for-developers/',
      description: 'See where binary, decimal, hexadecimal, and octal appear in development workflows.',
    },
    {
      title: 'Number Base Converter Guide',
      href: '/blog/number-base-converter-guide/',
      description: 'Learn how binary, decimal, hexadecimal, and octal represent the same numeric value.',
    },
    {
      title: 'Color Conversion Guide for Web Designers',
      href: '/blog/color-conversion-guide-for-web-designers/',
      description: 'See where hexadecimal values appear in CSS colors and web design workflows.',
    },
  ],
  'uuid-generator': [
    {
      title: 'UUID vs Short ID vs Slug',
      href: '/blog/uuid-vs-short-id-vs-slug/',
      description: 'Choose the right identifier for databases, public URLs, share links, and readable paths.',
    },
    {
      title: 'UUID vs Random String',
      href: '/blog/uuid-vs-random-string-guide/',
      description: 'Learn when to use UUIDs, random strings, public IDs, and secret tokens.',
    },
    {
      title: 'UUID Generator Guide for Developers',
      href: '/blog/uuid-generator-guide-for-developers/',
      description: 'Learn what UUIDs are and when to use them in applications and databases.',
    },
  ],
  'hash-generator': [
    {
      title: 'SHA-256 vs SHA-512',
      href: '/blog/sha-256-vs-sha-512-guide/',
      description: 'Compare SHA-256 and SHA-512 and learn what cryptographic hashes should and should not be used for.',
    },
    {
      title: 'Password Entropy Explained',
      href: '/blog/password-entropy-explained/',
      description: 'Understand why fast hashes are not enough for password storage by themselves.',
    },
  ],
  'url-encoder': [
    {
      title: 'URL Encoder Guide',
      href: '/blog/url-encoder-guide/',
      description: 'Learn how percent-encoding works and when to encode query parameters or URL parts.',
    },
    {
      title: 'Base64 vs URL Encoding',
      href: '/blog/base64-vs-url-encoding-guide/',
      description: 'Learn the difference between reversible binary encoding and URL-safe percent encoding.',
    },
    {
      title: 'String Escaping Guide',
      href: '/blog/string-escaping-guide-json-javascript-html-csv/',
      description: 'Understand when URL encoding differs from JSON, JavaScript, HTML, and CSV escaping.',
    },
  ],
  'string-escape': [
    {
      title: 'String Escaping Guide',
      href: '/blog/string-escaping-guide-json-javascript-html-csv/',
      description: 'Learn how escaping differs across JSON, JavaScript, HTML, CSV, and URL contexts.',
    },
    {
      title: 'Base64 vs URL Encoding',
      href: '/blog/base64-vs-url-encoding-guide/',
      description: 'Compare encoding and escaping workflows that often appear together in APIs.',
    },
  ],
  'html-entity-encoder': [
    {
      title: 'HTML Entity Encoder Guide',
      href: '/blog/html-entity-encoder-guide/',
      description: 'Learn how HTML entities escape special characters such as brackets, ampersands, and quotes.',
    },
    {
      title: 'String Escaping Guide',
      href: '/blog/string-escaping-guide-json-javascript-html-csv/',
      description: 'Learn when to use HTML entities and how HTML escaping differs from JSON or CSV escaping.',
    },
  ],
  'cron-expression-generator': [
    {
      title: 'Cron Expression Guide',
      href: '/blog/cron-expression-guide-seo-complete/',
      description:
        'Learn cron syntax, common cron examples, schedule patterns, and best practices for recurring tasks.',
    },
  ],
  'css-unit-converter': [
    {
      title: 'CSS Unit Conversion for Responsive Design',
      href: '/blog/css-unit-conversion-responsive-design/',
      description: 'Compare px, rem, em, percentages, and viewport units in real responsive layouts.',
    },
    {
      title: 'CSS Units Guide',
      href: '/blog/css-units-guide-px-em-rem-vw-vh/',
      description: 'Understand px, em, rem, vw, vh, and when to use each CSS unit.',
    },
  ],
  'color-converter': [
    {
      title: 'Color Conversion Guide for Web Designers',
      href: '/blog/color-conversion-guide-for-web-designers/',
      description: 'Learn how HEX, RGB, and HSL color formats work in web design.',
    },
    {
      title: 'CSS Unit Conversion for Responsive Design',
      href: '/blog/css-unit-conversion-responsive-design/',
      description: 'Pair color tokens with scalable CSS unit choices when building frontend systems.',
    },
    {
      title: 'Number Base Converter Guide',
      href: '/blog/number-base-converter-guide/',
      description: 'Understand why hexadecimal appears in color channels and technical values.',
    },
  ],
  'random-number-generator': [
    {
      title: 'Random Test Data Generation',
      href: '/blog/random-test-data-generation-guide/',
      description: 'Use random ranges, batches, and edge cases for forms, tables, simulations, and QA.',
    },
    {
      title: 'Random Number Generator Guide',
      href: '/blog/random-number-generator-guide/',
      description: 'Learn how ranges, integers, decimals, and practical randomness use cases work.',
    },
    {
      title: 'UUID vs Random String',
      href: '/blog/uuid-vs-random-string-guide/',
      description: 'Compare casual random values with identifiers, public IDs, and secret-like strings.',
    },
  ],
  'lorem-ipsum': [
    {
      title: 'Lorem Ipsum Generator Guide',
      href: '/blog/lorem-ipsum-generator-guide/',
      description: 'Learn when placeholder text helps layouts and when realistic copy is a better choice.',
    },
    {
      title: 'Lorem Image Placeholder Guide',
      href: '/blog/lorem-image-placeholder-guide/',
      description: 'Pair placeholder text with image placeholders for more realistic mockups.',
    },
  ],
  'lorem-image-placeholder': [
    {
      title: 'Lorem Image Placeholder Guide',
      href: '/blog/lorem-image-placeholder-guide/',
      description: 'Learn how placeholder image URLs help test dimensions, ratios, and responsive layouts.',
    },
    {
      title: 'Lorem Ipsum Generator Guide',
      href: '/blog/lorem-ipsum-generator-guide/',
      description: 'Use placeholder text and image placeholders together when building page mockups.',
    },
  ],
  'meta-tag-generator': [
    {
      title: 'Open Graph Preview Guide',
      href: '/blog/open-graph-preview-guide/',
      description: 'Learn how Open Graph tags shape social sharing cards and what metadata fields matter most.',
    },
    {
      title: 'SERP Snippet Preview Guide',
      href: '/blog/serp-snippet-preview-guide/',
      description: 'Learn how to write clearer page titles and meta descriptions for search result snippets.',
    },
  ],
  'serp-snippet-preview': [
    {
      title: 'SERP Snippet Preview Guide',
      href: '/blog/serp-snippet-preview-guide/',
      description: 'Learn how search snippets work and how to tune titles, URLs, and meta descriptions.',
    },
    {
      title: 'Open Graph Preview Guide',
      href: '/blog/open-graph-preview-guide/',
      description: 'Understand the difference between search snippets and social sharing cards.',
    },
  ],
  'utm-builder': [
    {
      title: 'UTM Parameters vs Query Parameters',
      href: '/blog/utm-parameters-vs-query-parameters/',
      description: 'Understand how campaign tracking parameters fit inside normal URL query strings.',
    },
    {
      title: 'UTM Builder Guide',
      href: '/blog/utm-builder-guide/',
      description: 'Learn how UTM parameters work and how to name campaign URLs consistently.',
    },
    {
      title: 'URL Query Builder Guide',
      href: '/blog/url-query-builder-guide/',
      description: 'Understand general query parameter building before working with campaign-specific fields.',
    },
    {
      title: 'URL Parser Guide',
      href: '/blog/url-parser-guide/',
      description: 'Inspect campaign query parameters and understand how tagged URLs are structured.',
    },
  ],
  'url-parser': [
    {
      title: 'UTM Parameters vs Query Parameters',
      href: '/blog/utm-parameters-vs-query-parameters/',
      description: 'Inspect URLs that mix page parameters, campaign tags, and encoded query values.',
    },
    {
      title: 'URL Query Builder Guide',
      href: '/blog/url-query-builder-guide/',
      description: 'Build clean query strings, then parse the final URL to verify the structure.',
    },
    {
      title: 'URL Parser Guide',
      href: '/blog/url-parser-guide/',
      description: 'Learn how protocols, hosts, paths, query strings, and hash fragments work.',
    },
    {
      title: 'UTM Builder Guide',
      href: '/blog/utm-builder-guide/',
      description: 'See how query parameters are used for campaign tracking URLs.',
    },
  ],
  'url-query-builder': [
    {
      title: 'UTM Parameters vs Query Parameters',
      href: '/blog/utm-parameters-vs-query-parameters/',
      description: 'Learn when to use general query parameters and when to use UTM fields for analytics.',
    },
    {
      title: 'URL Query Builder Guide',
      href: '/blog/url-query-builder-guide/',
      description: 'Learn how to build encoded query strings, handle repeated keys, and avoid URL mistakes.',
    },
    {
      title: 'URL Parser Guide',
      href: '/blog/url-parser-guide/',
      description: 'Inspect the URLs you build by splitting them into protocol, path, query, and hash parts.',
    },
    {
      title: 'UTM Builder Guide',
      href: '/blog/utm-builder-guide/',
      description: 'Use a dedicated UTM workflow when query parameters are for campaign tracking.',
    },
  ],
  'robots-txt-generator': [
    {
      title: 'Robots.txt Generator Guide',
      href: '/blog/robots-txt-generator-guide/',
      description: 'Learn how robots.txt crawl rules, disallow paths, and sitemap lines work.',
    },
  ],
  'open-graph-preview': [
    {
      title: 'Open Graph Preview Guide',
      href: '/blog/open-graph-preview-guide/',
      description: 'Learn how Open Graph title, description, URL, and image fields affect social previews.',
    },
    {
      title: 'SERP Snippet Preview Guide',
      href: '/blog/serp-snippet-preview-guide/',
      description: 'Compare social previews with search result snippets.',
    },
  ],
  'html-formatter': [
    {
      title: 'HTML Formatter vs HTML Minifier',
      href: '/blog/html-formatter-vs-html-minifier/',
      description: 'Learn when to format HTML for review and when to minify it for compact output.',
    },
    {
      title: 'HTML Minifier Guide',
      href: '/blog/html-minifier-guide/',
      description: 'Understand when to compact HTML after formatting and reviewing markup.',
    },
    {
      title: 'HTML Formatter Guide',
      href: '/blog/html-formatter-guide/',
      description: 'Learn why indentation matters, when to minify HTML, and how to review markup safely.',
    },
    {
      title: 'String Escaping Guide',
      href: '/blog/string-escaping-guide-json-javascript-html-csv/',
      description: 'Understand how HTML escaping differs from JSON, JavaScript, and CSV escaping.',
    },
  ],
  'html-minifier': [
    {
      title: 'HTML Formatter vs HTML Minifier',
      href: '/blog/html-formatter-vs-html-minifier/',
      description: 'Compare readable HTML formatting with compact HTML minification workflows.',
    },
    {
      title: 'HTML Minifier Guide',
      href: '/blog/html-minifier-guide/',
      description: 'Learn what HTML minification removes and how to compact markup without breaking pages.',
    },
    {
      title: 'HTML Formatter Guide',
      href: '/blog/html-formatter-guide/',
      description: 'Format HTML for review before producing compact output.',
    },
  ],
  'css-minifier': [
    {
      title: 'CSS Minifier Guide',
      href: '/blog/css-minifier-guide/',
      description: 'Learn how CSS minification works and when to preserve comments or use a build pipeline.',
    },
    {
      title: 'CSS Units Guide',
      href: '/blog/css-units-guide-px-em-rem-vw-vh/',
      description: 'Review CSS units and values before compacting frontend styles.',
    },
  ],
  'sql-formatter': [
    {
      title: 'SQL Formatter Guide',
      href: '/blog/sql-formatter-guide/',
      description: 'Learn how formatting SQL improves query review, debugging, and documentation.',
    },
    {
      title: 'JSON Formatting Best Practices',
      href: '/blog/json-formatting-best-practices/',
      description: 'Use similar formatting principles when reviewing structured query output and API data.',
    },
  ],
};

export function getRelatedGuides(slug: string): RelatedGuide[] {
  return relatedGuidesMap[slug] || [];
}
