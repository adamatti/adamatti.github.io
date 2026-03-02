'use client';
import { DiscussionEmbed } from 'disqus-react';
import { useTheme } from 'next-themes';
import { type ReactElement, useEffect } from 'react';
import { ReactCusdis } from 'react-cusdis';
import { ffUseCudis, ffUseDisqus } from '~/feature-flags';
import type { BlogPost } from '~/types';

type Theme = 'light' | 'dark';

function BlogComments({ post }: { post: BlogPost }): ReactElement | null {
  const { resolvedTheme } = useTheme();
  const url = `https://adamatti.github.io/blog/posts/${post.slug}`;
  const title = post.title;

  useEffect(() => {
    if (!ffUseDisqus && ffUseCudis && window?.CUSDIS?.setTheme) {
      window.CUSDIS.setTheme(resolvedTheme ?? 'light');
    }
  }, [resolvedTheme]);

  if (ffUseDisqus) {
    return (
      <DiscussionEmbed
        config={{
          url,
          identifier: post.slug,
          title,
          language: 'en_US',
        }}
        shortname="http-adamatti-github-io-blog"
      />
    );
  }
  if (!ffUseDisqus && ffUseCudis) {
    return (
      <ReactCusdis
        attrs={{
          host: 'https://cusdis.com',
          appId: '3732b33f-e661-4f42-90e8-394f88a2988b',
          pageId: post.slug,
          pageTitle: title,
          pageUrl: url,
          theme: (resolvedTheme ?? 'light') as Theme,
        }}
      />
    );
  }
  return null;
}

export default BlogComments;
