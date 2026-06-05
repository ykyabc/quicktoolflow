export interface RelatedGuide {
  title: string;
  href: string;
  description: string;
}

export const relatedGuidesMap: Record<string, RelatedGuide[]> = {
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
      title: 'How to Create Strong Passwords',
      href: '/blog/how-to-create-strong-passwords-guide/',
      description: 'Learn what makes a password secure and how to avoid common password mistakes.',
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
  'uuid-generator': [
    {
      title: 'UUID Generator Guide for Developers',
      href: '/blog/uuid-generator-guide-for-developers/',
      description: 'Learn what UUIDs are and when to use them in applications and databases.',
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
  ],
};

export function getRelatedGuides(slug: string): RelatedGuide[] {
  return relatedGuidesMap[slug] || [];
}
