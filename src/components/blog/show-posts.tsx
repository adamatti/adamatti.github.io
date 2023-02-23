import Link from 'next/link';
import { type ReactElement } from 'react';
import { type BlogPost } from '~/types';

/**
 * FIXME add tags
 */
function PostCard({ post: p }: { post: BlogPost }): ReactElement {
  return (
    <div className="border border-slate-200 p-4 rounded-md shadow-md bg-white">
      <Link href={`/blog/posts/${p.slug}`} className="link">
        <h2 className="font-bold">{p.title}</h2>
      </Link>
      <p className="text-sm text-slate-400">{p.dateString}</p>
      <p className="text-slate-700">{p.summary}</p>
    </div>
  );
}

/**
 * FIXME sort posts by date here
 */
export default function ShowPosts({ posts }: { posts: BlogPost[] }): ReactElement {
  return (
    <div>
      {posts.map((p) => (
        <PostCard key={p.slug} post={p} />
      ))}
    </div>
  );
}
