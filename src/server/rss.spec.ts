import fs from 'node:fs';
import { vi } from 'vitest';
import { generateRssFeed } from './rss';

vi.mock('node:fs');
vi.mock('./blog-posts', () => ({
  getPosts: () => [
    {
      slug: 'hello-world',
      title: 'Hello World',
      dateString: '2024-01-15',
      summary: 'A first post',
    },
    {
      slug: 'second-post',
      title: 'Second Post',
      dateString: '2024-02-20',
      summary: '',
    },
  ],
}));

describe('generateRssFeed', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should write an RSS XML file', () => {
    generateRssFeed();

    expect(fs.writeFileSync).toHaveBeenCalledTimes(1);
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      './public/rss.xml',
      expect.any(String)
    );
  });

  it('should produce valid RSS 2.0 XML with channel metadata', () => {
    generateRssFeed();

    const written = vi.mocked(fs.writeFileSync).mock.calls[0][1] as string;

    expect(written).toContain('<?xml version="1.0" ?>');
    expect(written).toContain('<rss version="2.0">');
    expect(written).toContain('<title>Adamatti Blog</title>');
    expect(written).toContain('<link>https://adamatti.github.io</link>');
    expect(written).toContain('<description>Latest blog posts</description>');
  });

  it('should include an item for each post', () => {
    generateRssFeed();

    const written = vi.mocked(fs.writeFileSync).mock.calls[0][1] as string;

    expect(written).toContain('<![CDATA[Hello World]]>');
    expect(written).toContain(
      'https://adamatti.github.io/blog/posts/hello-world'
    );
    expect(written).toContain('<![CDATA[A first post]]>');

    expect(written).toContain('<![CDATA[Second Post]]>');
    expect(written).toContain(
      'https://adamatti.github.io/blog/posts/second-post'
    );
  });

  it('should handle posts with no summary gracefully', () => {
    generateRssFeed();

    const written = vi.mocked(fs.writeFileSync).mock.calls[0][1] as string;

    // second-post has an empty summary — description should be empty CDATA
    expect(written).toContain('<![CDATA[]]>');
  });

  it('should include correct pubDate format for posts', () => {
    generateRssFeed();

    const written = vi.mocked(fs.writeFileSync).mock.calls[0][1] as string;

    // Dates should be converted to UTC strings
    expect(written).toContain(new Date('2024-01-15').toUTCString());
    expect(written).toContain(new Date('2024-02-20').toUTCString());
  });
});
