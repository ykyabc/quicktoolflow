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
      title: 'JSON Formatting Best Practices',
      href: '/blog/json-formatting-best-practices/',
      description: 'Understand when to keep JSON readable and when to produce compact output.',
    },
  ],
  'json-path-tester': [
    {
      title: 'JSON Path Tester Guide',
      href: '/blog/json-path-tester-guide/',
      description: 'Learn how to query nested JSON objects, arrays, indexes, and wildcard matches.',
    },
  ],
  'json-to-csv': [
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
  'timestamp-converter': [
    {
      title: 'Unix Timestamp Explained',
      href: '/blog/unix-timestamp-explained-guide/',
      description: 'Understand Unix timestamps and how to convert them into human-readable dates.',
    },
  ],
  'number-base-converter': [
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
      title: 'Number Base Converter Guide',
      href: '/blog/number-base-converter-guide/',
      description: 'Understand why hexadecimal appears in color channels and technical values.',
    },
  ],
  'random-number-generator': [
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
      title: 'UTM Builder Guide',
      href: '/blog/utm-builder-guide/',
      description: 'Learn how UTM parameters work and how to name campaign URLs consistently.',
    },
    {
      title: 'URL Parser Guide',
      href: '/blog/url-parser-guide/',
      description: 'Inspect campaign query parameters and understand how tagged URLs are structured.',
    },
  ],
  'url-parser': [
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
