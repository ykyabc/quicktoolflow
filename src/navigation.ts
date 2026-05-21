import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: '/' },
    { text: 'All Tools', href: '/tools/' },
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
        { text: 'About', href: '/about/' },
        { text: 'Contact', href: '/contact/' },
      ],
    },
    {
      title: 'Popular Tools',
      links: [
        { text: 'Word Counter', href: '/tools/word-counter/' },
        { text: 'JSON Formatter', href: '/tools/json-formatter/' },
        { text: 'Password Generator', href: '/tools/password-generator/' },
        { text: 'Base64 Encoder', href: '/tools/base64/' },
        { text: 'Color Converter', href: '/tools/color-converter/' },
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
