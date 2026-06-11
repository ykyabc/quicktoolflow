export const headerData = {
  links: [
    { text: 'Home', href: '/' },
    {
      text: 'All Tools',
      href: '/tools/',
      links: [
        { text: 'Text Tools', href: '/tools/text/' },
        { text: 'Developer Tools', href: '/tools/developer/' },
        { text: 'Structured Data Tools', href: '/tools/structured-data/' },
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
      title: 'Explore',
      links: [
        { text: 'All Tools', href: '/tools/' },
        { text: 'Blog', href: '/blog/' },
        { text: 'Categories', href: '/blog/category/' },
      ],
    },
    {
      title: 'Toolkits',
      links: [
        { text: 'Structured Data', href: '/tools/structured-data/' },
        { text: 'Code Formatting', href: '/tools/code-formatting/' },
        { text: 'Security & Encoding', href: '/tools/security-encoding/' },
      ],
    },
    {
      title: 'More Tools',
      links: [
        { text: 'Text Tools', href: '/tools/text/' },
        { text: 'Generators', href: '/tools/generators/' },
        { text: 'Converters', href: '/tools/converters/' },
      ],
    },
    {
      title: 'Publishing',
      links: [
        { text: 'Web Publishing Tools', href: '/tools/web-publishing/' },
        { text: 'SEO Tools', href: '/tools/seo/' },
        { text: 'Design & Frontend', href: '/tools/frontend-design/' },
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
