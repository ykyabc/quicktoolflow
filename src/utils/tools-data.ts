export interface Tool {
  slug: string;
  name: string;
  description: string;
  category: string;
  categorySlug: string;
  icon: string;
  gradient: string;
  featured: boolean;
}

export const tools: Tool[] = [
  {
    slug: 'word-counter',
    name: 'Word Counter',
    description: 'Count words, characters, sentences, paragraphs, and estimate reading time in real time.',
    category: 'Text Tools',
    categorySlug: 'text',
    icon: 'tabler:letter-case',
    gradient: 'from-emerald-500 to-teal-600',
    featured: true,
  },
  {
    slug: 'json-formatter',
    name: 'JSON Formatter & Validator',
    description: 'Format, validate, minify, and beautify JSON data with syntax error detection.',
    category: 'Developer Tools',
    categorySlug: 'developer',
    icon: 'tabler:code',
    gradient: 'from-amber-500 to-orange-600',
    featured: true,
  },
  {
    slug: 'password-generator',
    name: 'Password Generator',
    description: 'Generate strong, random passwords with customizable length, uppercase, numbers, and symbols.',
    category: 'Generators',
    categorySlug: 'generator',
    icon: 'tabler:lock',
    gradient: 'from-rose-500 to-pink-600',
    featured: true,
  },
  {
    slug: 'base64',
    name: 'Base64 Encoder & Decoder',
    description: 'Encode text to Base64 or decode Base64 strings back to readable text instantly.',
    category: 'Developer Tools',
    categorySlug: 'developer',
    icon: 'tabler:arrows-exchange',
    gradient: 'from-violet-500 to-purple-600',
    featured: true,
  },
  {
    slug: 'color-converter',
    name: 'Color Converter',
    description: 'Convert colors between HEX, RGB, and HSL formats with live visual preview.',
    category: 'Converters',
    categorySlug: 'converter',
    icon: 'tabler:palette',
    gradient: 'from-sky-500 to-blue-600',
    featured: true,
  },
  {
    slug: 'url-encoder',
    name: 'URL Encoder & Decoder',
    description: 'Encode or decode URL strings for safe web transmission using standard percent-encoding.',
    category: 'Developer Tools',
    categorySlug: 'developer',
    icon: 'tabler:link',
    gradient: 'from-indigo-500 to-blue-600',
    featured: false,
  },
  {
    slug: 'lorem-ipsum',
    name: 'Lorem Ipsum Generator',
    description: 'Generate placeholder text with adjustable paragraphs, sentences, or word count.',
    category: 'Generators',
    categorySlug: 'generator',
    icon: 'tabler:file-text',
    gradient: 'from-lime-500 to-green-600',
    featured: false,
  },
  {
    slug: 'hash-generator',
    name: 'Hash Generator',
    description: 'Generate SHA-256, SHA-512, and SHA-1 hashes from any text using the Web Crypto API.',
    category: 'Developer Tools',
    categorySlug: 'developer',
    icon: 'tabler:hash',
    gradient: 'from-fuchsia-500 to-pink-600',
    featured: false,
  },
  {
    slug: 'text-diff',
    name: 'Text Diff Checker',
    description: 'Compare two blocks of text and highlight line-by-line differences instantly.',
    category: 'Text Tools',
    categorySlug: 'text',
    icon: 'tabler:git-compare',
    gradient: 'from-cyan-500 to-teal-600',
    featured: false,
  },
  {
    slug: 'regex-tester',
    name: 'Regex Tester',
    description: 'Test and debug regular expressions with real-time matching, highlighting, and match details.',
    category: 'Developer Tools',
    categorySlug: 'developer',
    icon: 'tabler:regex',
    gradient: 'from-orange-500 to-red-600',
    featured: false,
  },
  {
    slug: 'markdown-preview',
    name: 'Markdown Preview',
    description: 'Write Markdown on the left and see the rendered HTML preview on the right in real time.',
    category: 'Developer Tools',
    categorySlug: 'developer',
    icon: 'tabler:markdown',
    gradient: 'from-slate-500 to-gray-700',
    featured: false,
  },
  {
    slug: 'uuid-generator',
    name: 'UUID Generator',
    description: 'Generate RFC 4122 compliant UUID v4 identifiers. Bulk generate up to 100 UUIDs at once.',
    category: 'Generators',
    categorySlug: 'generator',
    icon: 'tabler:fingerprint',
    gradient: 'from-teal-500 to-emerald-600',
    featured: false,
  },
  {
    slug: 'timestamp-converter',
    name: 'Timestamp Converter',
    description: 'Convert between Unix timestamps and human-readable dates. Current timestamp shown live.',
    category: 'Converters',
    categorySlug: 'converter',
    icon: 'tabler:clock',
    gradient: 'from-blue-500 to-indigo-600',
    featured: false,
  },
  {
    slug: 'case-converter',
    name: 'Case Converter',
    description: 'Convert text between uppercase, lowercase, title case, sentence case, camelCase, and more.',
    category: 'Text Tools',
    categorySlug: 'text',
    icon: 'tabler:text-caption',
    gradient: 'from-pink-500 to-rose-600',
    featured: false,
  },
  {
    slug: 'number-base-converter',
    name: 'Number Base Converter',
    description: 'Convert numbers between binary, octal, decimal, and hexadecimal bases instantly.',
    category: 'Converters',
    categorySlug: 'converter',
    icon: 'tabler:calculator',
    gradient: 'from-yellow-500 to-amber-600',
    featured: false,
  },
  {
    slug: 'html-entity-encoder',
    name: 'HTML Entity Encoder / Decoder',
    description: 'Encode special characters to HTML entities or decode HTML entities back to readable text.',
    category: 'Developer Tools',
    categorySlug: 'developer',
    icon: 'tabler:brackets',
    gradient: 'from-red-500 to-rose-600',
    featured: false,
  },
    {
    slug: 'text-to-slug',
    name: 'Slug Generator',
    description: 'Convert any text into a clean, SEO-friendly URL slug. Supports custom separators and character limits.',
    category: 'Text Tools',
    categorySlug: 'text',
    icon: 'tabler:link-minus',
    gradient: 'from-stone-500 to-zinc-600',
    featured: false,
  },

];

export const categories = [
  { name: 'Text Tools', slug: 'text', description: 'Analyze, compare, and transform text content.' },
  { name: 'Developer Tools', slug: 'developer', description: 'Essential utilities for coding and debugging.' },
  { name: 'Generators', slug: 'generator', description: 'Generate random data, passwords, and placeholder text.' },
  { name: 'Converters', slug: 'converter', description: 'Convert between different data formats and number bases.' },
];

export function getToolsByCategory(categorySlug: string): Tool[] {
  return tools.filter((t) => t.categorySlug === categorySlug);
}

export function getFeaturedTools(): Tool[] {
  return tools.filter((t) => t.featured);
}
