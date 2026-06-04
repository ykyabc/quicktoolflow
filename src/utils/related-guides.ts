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
