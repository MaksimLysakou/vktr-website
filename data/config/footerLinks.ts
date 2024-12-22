export const footerLinks: Array<{
  columnName: string;
  links: Array<{
    href: string;
    title: string;
  }>;
}> = [
  {
    columnName: 'Company',
    links: [
      { href: '/services', title: 'Services' },
      { href: '/solutions', title: 'Solutions' },
      { href: '//all-articles', title: 'Blog' },
      { href: '/about', title: 'About' },
      { href: '/all-articles', title: 'Blog' },
    ],
  },
  { columnName: 'Product', links: [] },
  { columnName: 'Docs', links: [] },
  {
    columnName: 'Support',
    links: [
      { href: '#support', title: 'Support' },
      { href: '/terms', title: 'Terms of Service' },
      { href: '/privacy', title: 'Privacy Policy' },
    ],
  },
];
