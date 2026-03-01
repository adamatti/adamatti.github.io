import { DiscussionEmbed } from 'disqus-react';
import type { ReactElement } from 'react';
import { ffUseDisqus } from '~/feature-flags';
import type { BlogPost } from '~/types';

// FIXME remove hardcoded values
function BlogComments({ post }: { post: BlogPost }): ReactElement | null {
  if (!ffUseDisqus) {
    return null;
  }

  return (
    <DiscussionEmbed
      config={{
        url: `https://adamatti.github.io/blog/posts/${post.slug}`,
        identifier: post.slug,
        title: post.title,
        language: 'en_US',
      }}
      shortname="http-adamatti-github-io-blog"
    />
  );
}

export default BlogComments;
