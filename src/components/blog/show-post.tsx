import React from 'react';
import Markdown from '../markdown';
import Link from 'next/link';
import { type ReactElement } from 'react';
import { type BlogPost } from '~/types';
import BlogComments from './comments';
import ShowTags from './show-tags';


export default function ShowPost({ post }: { post: BlogPost }): ReactElement {
  return (
    <>
      
      <h1 className="font-bold text-2xl">{post.title}</h1>
      <p className="text-gray-500 text-sm">
        {post.dateString}
        <ShowTags tags={post.tags} />
      </p>
      <br />
      <article className="prose lg:prose-xl">
        <Markdown>
          {post?.content ?? ''}
        </Markdown>
      </article>
      <br />
      <BlogComments post={post} />
      <br />
      <p>
        <Link href="../" className="link">
          Return to list
        </Link>
      </p>
    </>
  );
}
