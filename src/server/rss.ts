import fs from 'node:fs';
import { getPosts } from './blog-posts';

const author = 'adamatti@gmail.com (Marcelo Adamatti)';

export const generateRssFeed = (): void => {
  const posts = getPosts();
  const siteUrl = 'https://adamatti.github.io';

  const feedItems = posts
    .map((post) => {
      const url = `${siteUrl}/blog/posts/${post.slug}`;
      const pubDate = new Date(post.dateString).toUTCString();
      return `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <author>${author}</author>
      <description><![CDATA[${post.summary || ''}]]></description>
    </item>`;
    })
    .join('\n');

  const rss = `<?xml version="1.0" ?>
<rss version="2.0">
  <channel>
    <title>Adamatti Blog</title>
    <link>${siteUrl}</link>
    <description>Latest blog posts</description>
    <managingEditor>${author}</managingEditor>
    <webMaster>${author}</webMaster>
${feedItems}
  </channel>
</rss>`;

  fs.writeFileSync('./public/rss.xml', rss);
};
