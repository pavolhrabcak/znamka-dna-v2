export const CONTINENTS = ['Africa', 'Asia', 'Americas', 'Oceania', 'Europe'] as const;
export type Continent = typeof CONTINENTS[number];

export const continentSlugMap: Record<Continent, string> = {
  Africa:   'africa',
  Asia:     'asia',
  Americas: 'americas',
  Oceania:  'oceania',
  Europe:   'europe',
};

export const continentLabelMap: Record<Continent, string> = {
  Africa:   'Afrika',
  Asia:     'Ázia',
  Americas: 'Amerika',
  Oceania:  'Austrália a Tichomorie',
  Europe:   'Európa',
};

export const continentColorMap: Record<Continent, { fill: string; stroke: string; text: string }> = {
  Africa:   { fill: '#9FE1CB', stroke: '#0F6E56', text: '#085041' },
  Asia:     { fill: '#CECBF6', stroke: '#534AB7', text: '#3C3489' },
  Americas: { fill: '#F5C4B3', stroke: '#993C1D', text: '#712B13' },
  Oceania:  { fill: '#FAC775', stroke: '#854F0B', text: '#633806' },
  Europe:   { fill: '#B5D4F4', stroke: '#185FA5', text: '#0C447C' },
};

export function continentToSlug(c: Continent): string {
  return continentSlugMap[c];
}

export function slugToContinent(slug: string): Continent | undefined {
  return CONTINENTS.find(c => continentSlugMap[c] === slug);
}
