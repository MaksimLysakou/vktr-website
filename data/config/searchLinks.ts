export const searchLinks: Array<{
  id: string;
  name: string;
  keywords: string;
  shortcut?: string[];
  section: string;
  href: string;
}> = [
  {
    id: 'services',
    name: 'Services',
    keywords: '',
    section: 'Navigation',
    href: '/services',
  },
  {
    id: 'solutions',
    name: 'Solutions',
    keywords: '',
    section: 'Navigation',
    href: '/solutions',
  },
  {
    id: 'case',
    name: 'Case Studies',
    keywords: '',
    section: 'Navigation',
    href: '/case',
  },
  {
    id: 'about',
    name: 'Company',
    keywords: '',
    section: 'Navigation',
    href: '/about',
  },
  {
    id: 'all-articles',
    name: 'Blog',
    keywords: '',
    section: 'Navigation',
    href: '/all-articles',
  },
];
