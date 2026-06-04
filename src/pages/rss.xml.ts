import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE, METADATA } from 'astrowind:config';

export async function GET() {
  const posts = await getCollection('post', ({ data }) => !data.draft);

  posts.sort((a, b) => {
    const dateA = a.data.publishDate ? new Date(a.data.publishDate).valueOf() : 0;
    const dateB = b.data.publishDate ? new Date(b.data.publishDate).valueOf() : 0;
    return dateB - dateA;
  });

  return rss({
    title: SITE.name,
    description: METADATA.description,
    site: SITE.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.excerpt || post.data.title,
      pubDate: post.data.publishDate,
      link: `/blog/${post.id}/`,
      categories: post.data.tags,
      author: post.data.author,
    })),
  });
}
