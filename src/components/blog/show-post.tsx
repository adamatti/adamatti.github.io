import Markdown from 'markdown-to-jsx';
import Link from 'next/link';
import { type ReactElement } from 'react';
import { type BlogPost } from '~/types';

export default function ShowPost({ post }: { post: BlogPost }): ReactElement {
  return (
    <>
      <h1 className="font-bold text-2xl">{post.title}</h1>
      <p className="text-gray-500 text-sm">{post.dateString}</p>
      <br />
      <div>
        <Markdown>{post?.content ?? ''}</Markdown>
      </div>
      <br />
      <p>
        <Link href="../" className="link">
          Return to list
        </Link>
      </p>
    </>
  );
}
