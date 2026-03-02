import Link from 'next/link';
import type { ReactElement } from 'react';
import { emitAnalyticsEvent } from '~/analytics/analytics';
import type { BlogPost } from '~/types';
import ShowTags from './show-tags';

function PostCard({ post: p }: { post: BlogPost }): ReactElement {
  return (
    <div className="rounded-md border border-slate-200 bg-white p-4 shadow-md transition-colors duration-300 dark:border-slate-700 dark:bg-gray-800">
      <Link
        className="link"
        href={`/blog/posts/${p.slug}`}
        onClick={() =>
          emitAnalyticsEvent('blog_post_clicked', {
            slug: p.slug,
            title: p.title,
          })
        }
      >
        <h2 className="font-bold">{p.title}</h2>
      </Link>
      <p className="text-slate-400 text-sm dark:text-slate-500">
        {p.dateString}
        <ShowTags tags={p.tags} />
      </p>
      <p className="text-slate-700 dark:text-slate-300">{p.summary}</p>
    </div>
  );
}

export default function ShowPosts({
  posts,
}: {
  posts: BlogPost[];
}): ReactElement {
  return (
    <div>
      {posts.map((p) => (
        <PostCard key={p.slug} post={p} />
      ))}
    </div>
  );
}
