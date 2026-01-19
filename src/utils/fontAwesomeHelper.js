import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import * as brandIcons from '@fortawesome/free-brands-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';

// Normalize a user-provided icon name to Font Awesome's internal naming convention
// Examples:
//  - 'rocket'  -> 'faRocket'
//  - 'fa-arrow-right' -> 'faArrowRight'
export function normalizeIconName(input) {
  if (!input) return '';
  let name = input.trim();
  // Remove leading 'fa-' if present
  if (name.startsWith('fa-')) {
    name = name.substring(3);
  }
  // Convert kebab-case to PascalCase
  const camel = name
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
  return 'fa' + camel;
}

// Retrieve a Font Awesome icon definition by a user-provided name
// Supports both solid and brand icon packs
export function getIconByName(name) {
  if (!name) return null;
  const iconName = normalizeIconName(name);
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  // Access the named export from the imported icon packs
  // @ts-ignore
  return (solidIcons[iconName] || brandIcons[iconName] || null);
}

// Convert a Font Awesome icon definition to an SVG string
export function iconToSvg(iconDef, color = '#000') {
  if (!iconDef) return '';
  const faIcon = icon(iconDef);
  let svg = faIcon.html?.[0] || '';
  // Remove fixed width/height and add viewBox for proper scaling
  svg = svg.replace(/width="[^"]*"/, '');
  svg = svg.replace(/height="[^"]*"/, '');
  svg = svg.replace(/fill="currentColor"/g, `fill="${color}"`);
  return svg;
}

// Simple search helper over a catalog of icon definitions (categories -> icons)
// Each category item should include: name, key, icons: [{ name, iconDef, iconName, keywords[] }]
export function searchIcons(query, categories) {
  if (!categories || !Array.isArray(categories)) return categories;
  if (!query) return categories;
  const q = query.toLowerCase();
  return categories
    .map(cat => {
      const filtered = (cat.icons || []).filter(iconItem => {
        const name = (iconItem.name || '').toString().toLowerCase();
        const keywords = (iconItem.keywords || []).join(' ').toLowerCase();
        return name.includes(q) || keywords.includes(q);
      });
      return { ...cat, icons: filtered };
    })
    .filter(cat => (cat.icons || []).length > 0);
}

// Utility to extract inner SVG content from a full SVG string
export function extractSvgInner(svgString) {
  if (!svgString) return '';
  const match = svgString.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
  return match ? match[1] : '';
}
