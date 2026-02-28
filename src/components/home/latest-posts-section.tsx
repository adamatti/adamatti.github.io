import Link from 'next/link';
import type { ReactElement } from 'react';
import type { BlogPost } from '~/types';
import ShowTags from '../blog/show-tags';

function PostCard({ post: p }: { post: BlogPost }): ReactElement {
    return (
        <div className="group relative flex flex-col rounded-xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:border-slate-700 dark:bg-gray-800">
            <Link
                className="flex flex-grow flex-col p-6 pb-20 hover:no-underline"
                href={`/blog/posts/${p.slug}`}
                aria-label={`Read ${p.title}`}
            >
                <div className="mb-2">
                    <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-cyan-500">
                        {p.title}
                    </h3>
                </div>

                <div className="mb-4 flex-grow">
                    <p className="line-clamp-3 text-slate-700 decoration-transparent dark:text-slate-300">
                        {p.summary}
                    </p>
                </div>
            </Link>

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between pointer-events-none">
                <div className="relative z-20 pointer-events-auto">
                    <ShowTags tags={p.tags} />
                </div>
                <span className="ml-4 whitespace-nowrap text-xs text-slate-400 dark:text-slate-500">
                    {p.dateString}
                </span>
            </div>
        </div>
    );
}

export default function LatestPostsSection({
    posts,
}: {
    posts: BlogPost[];
}): ReactElement {
    return (
        <section className="mx-auto max-w-screen-lg py-6">
            <div className="mb-8 flex flex-col items-center justify-center px-4 sm:px-0">
                <h2 className="section-title !m-0 text-center">Latest Blog Posts</h2>
                <p className="mt-2 text-center text-slate-600 dark:text-slate-400">
                    Insights, tutorials, and thoughts on software engineering.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-0 lg:grid-cols-3">
                {posts.map((post) => (
                    <PostCard key={post.slug} post={post} />
                ))}
            </div>

            <div className="mt-6 flex justify-center">
                <Link
                    className="inline-flex items-center font-medium text-cyan-600 transition-colors hover:text-cyan-500 dark:text-cyan-400"
                    href="/blog"
                >
                    View all posts
                </Link>
            </div>
        </section>
    );
}
