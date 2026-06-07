export const headerData = {
  links: [
    { text: 'Home', href: '/' },
    {
      text: 'All Tools',
      href: '/tools/',
      links: [
        { text: 'Text Tools', href: '/tools/text/' },
        { text: 'Developer Tools', href: '/tools/developer/' },
        { text: 'Code Formatting Tools', href: '/tools/code-formatting/' },
        { text: 'Design & Frontend Tools', href: '/tools/frontend-design/' },
        { text: 'Web Publishing Tools', href: '/tools/web-publishing/' },
        { text: 'Security & Encoding', href: '/tools/security-encoding/' },
        { text: 'Generators', href: '/tools/generators/' },
        { text: 'Converters', href: '/tools/converters/' },
        { text: 'SEO Tools', href: '/tools/seo/' },
      ],
    },
    {
      text: 'Blog',
      href: '/blog/',
      links: [
        { text: 'All Articles', href: '/blog/' },
        { text: 'Blog Categories', href: '/blog/category/' },
        { text: 'Developer Tools', href: '/blog/category/developer-tools/' },
        { text: 'Text Tools', href: '/blog/category/text-tools/' },
        { text: 'SEO', href: '/blog/category/seo/' },
        { text: 'Generators', href: '/blog/category/generators/' },
        { text: 'Converters', href: '/blog/category/converters/' },
        { text: 'Security', href: '/blog/category/security/' },
      ],
    },
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
        { text: 'Code Formatting Tools', href: '/tools/code-formatting/' },
        { text: 'Base64 Encoder', href: '/tools/base64/' },
        { text: 'Security & Encoding', href: '/tools/security-encoding/' },
        { text: 'Regex Tester', href: '/tools/regex-tester/' },
        { text: 'Hash Generator', href: '/tools/hash-generator/' },
        { text: 'URL Encoder', href: '/tools/url-encoder/' },
        { text: 'HTML Entity Encoder', href: '/tools/html-entity-encoder/' },
        { text: 'String Escape', href: '/tools/string-escape/' },
        { text: 'HTML Formatter', href: '/tools/html-formatter/' },
        { text: 'SQL Formatter', href: '/tools/sql-formatter/' },
        { text: 'Markdown Preview', href: '/tools/markdown-preview/' },
      ],
    },
    {
      title: 'Converters & Generators',
      links: [
        { text: 'Design & Frontend Tools', href: '/tools/frontend-design/' },
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
        { text: 'SERP Snippet Preview', href: '/tools/serp-snippet-preview/' },
        { text: 'Meta Tag Generator', href: '/tools/meta-tag-generator/' },
        { text: 'Web Publishing Tools', href: '/tools/web-publishing/' },
        { text: 'Open Graph Preview', href: '/tools/open-graph-preview/' },
        { text: 'UTM Builder', href: '/tools/utm-builder/' },
        { text: 'Robots.txt Generator', href: '/tools/robots-txt-generator/' },
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
    { text: 'GitHub', href: 'https://github.com/ykyabc/quicktoolflow' },
  ],
  socialLinks: [
    {
      ariaLabel: 'QuickToolFlow on GitHub',
      icon: 'tabler:brand-github',
      href: 'https://github.com/ykyabc/quicktoolflow',
    },
  ],
  footNote: `<span class="text-sm text-gray-500 dark:text-gray-400">&copy; ${new Date().getFullYear()} QuickToolFlow. All rights reserved.</span>`,
};
