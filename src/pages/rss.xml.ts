import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const stamps = await getCollection('stamps', s => !s.data.draft);
  stamps.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: 'Známka dňa',
    description: 'Každý deň jedna gravírovaná poštová známka s historickým kontextom.',
    site: context.site,
    items: stamps.map(stamp => ({
      title: stamp.data.title,
      pubDate: stamp.data.date,
      description: `${stamp.data.country} · ${stamp.data.denomination} · ${stamp.data.printer} · ${stamp.data.year_issued}`,
      link: `/znamky/${stamp.slug}/`,
    })),
  });
}
