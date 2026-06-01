import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: '/' },
    {
      text: 'All Tools',
      href: '/tools/',
      links: [
        { text: 'Text Tools', href: '/tools/text/' },
        { text: 'Developer Tools', href: '/tools/developer/' },
        { text: 'Generators', href: '/tools/generators/' },
        { text: 'Converters', href: '/tools/converters/' },
        { text: 'SEO Tools', href: '/tools/seo/' },
      ],
    },
    { text: 'Blog', href: '/blog/' },
    { text: 'About', href: '/about/' },
    { text: 'Contact', href: '/contact/' },
  ],
  actions: [{ text: 'Explore Tools', href: '/tools/', variant: 'primary' as const }],
};

export const footerData = {
  links: [
    {
      title: 'Quick Links',
      links: [
        { text: 'Home', href: '/' },
        { text: 'All Tools', href: '/tools/' },
        { text: 'Blog', href: '/blog/' },
        { text: 'About', href: '/about/' },
        { text: 'Contact', href: '/contact/' },
      ],
    },
    {
      title: 'Text Tools',
      links: [
        { text: 'Word Counter', href: '/tools/word-counter/' },
        { text: 'Text Diff Checker', href: '/tools/text-diff/' },
        { text: 'Case Converter', href: '/tools/case-converter/' },
        { text: 'Slug Generator', href: '/tools/text-to-slug/' },
        { text: 'Text Reverser', href: '/tools/text-reverser/' },
        { text: 'Whitespace Remover', href: '/tools/whitespace-remover/' },
        { text: 'Word Frequency Counter', href: '/tools/word-frequency-counter/' },
      ],
    },
    {
      title: 'Developer Tools',
      links: [
        { text: 'JSON Formatter', href: '/tools/json-formatter/' },
        { text: 'Base64 Encoder', href: '/tools/base64/' },
        { text: 'Regex Tester', href: '/tools/regex-tester/' },
        { text: 'Hash Generator', href: '/tools/hash-generator/' },
        { text: 'URL Encoder', href: '/tools/url-encoder/' },
        { text: 'HTML Entity Encoder', href: '/tools/html-entity-encoder/' },
        { text: 'String Escape', href: '/tools/string-escape/' },
        { text: 'Markdown Preview', href: '/tools/markdown-preview/' },
      ],
    },
    {
      title: 'Converters & Generators',
      links: [
        { text: 'Color Converter', href: '/tools/color-converter/' },
        { text: 'Timestamp Converter', href: '/tools/timestamp-converter/' },
        { text: 'Number Base Converter', href: '/tools/number-base-converter/' },
        { text: 'CSS Unit Converter', href: '/tools/css-unit-converter/' },
        { text: 'Password Generator', href: '/tools/password-generator/' },
        { text: 'UUID Generator', href: '/tools/uuid-generator/' },
        { text: 'Lorem Ipsum Generator', href: '/tools/lorem-ipsum/' },
        { text: 'Random Number Generator', href: '/tools/random-number-generator/' },
      ],
    },
    {
      title: 'SEO Tools',
      links: [
        { text: 'Meta Tag Generator', href: '/tools/meta-tag-generator/' },
        { text: 'Lorem Image Placeholder', href: '/tools/lorem-image-placeholder/' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Privacy Policy', href: '/privacy/' },
        { text: 'Terms of Service', href: '/terms/' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Privacy Policy', href: '/privacy/' },
    { text: 'Terms of Service', href: '/terms/' },
  ],
  socialLinks: [],
  footNote: `<span class="text-sm text-gray-500 dark:text-gray-400">&copy; ${new Date().getFullYear()} QuickToolFlow. All rights reserved.</span>`,
};
