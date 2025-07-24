export const categoryMap: Record<string, { label: string; href: string }> = {
  'uutiset': { label: 'Uutiset', href: '/uutiset' },
  'analyysit': { label: 'Analyysit', href: '/analyysit' },
  'pelaaminen': { label: 'Pelaaminen', href: '/pelaaminen' },
  'teknologia': { label: 'Teknologia', href: '/teknologia' },
  'tutkimus': { label: 'Tutkimus', href: '/tutkimus' },
  'blogi': { label: 'Blogi', href: '/blogi' },
};

export function getCategoryInfo(category: string) {
  return categoryMap[category.toLowerCase()] || { label: category, href: `/uutiset` };
}