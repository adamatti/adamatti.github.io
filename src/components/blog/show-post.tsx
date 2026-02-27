import Link from 'next/link';
import type { ReactElement } from 'react';
import type { BlogPost } from '~/types';
import Markdown from '../markdown';
import BlogComments from './comments';
import BlogNavigation from './navigation';
import ShowTags from './show-tags';

export default function ShowPost({
  post,
  prevPost,
  nextPost,
}: {
  post: BlogPost;
  prevPost?: { slug: string; title: string };
  nextPost?: { slug: string; title: string };
}): ReactElement {
  return (
    <>
      <h1 className="font-bold text-2xl">{post.title}</h1>
      <p className="text-gray-500 text-sm">
        {post.dateString}
        <ShowTags tags={post.tags} />
      </p>
      <br />
      <article className="prose lg:prose-xl dark:prose-invert">
        <Markdown>{post?.content ?? ''}</Markdown>
      </article>
      <br />
      <BlogNavigation nextPost={nextPost} prevPost={prevPost} />
      <br />
      <BlogComments post={post} />
      <br />
      <p>
        <Link className="link" href="../">
          Return to list
        </Link>
      </p>
    </>
  );
}
