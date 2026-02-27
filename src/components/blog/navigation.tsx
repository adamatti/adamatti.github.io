import Link from 'next/link';
import type { ReactElement } from 'react';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';

interface PostInfo {
    slug: string;
    title: string;
}

interface BlogNavigationProps {
    prevPost?: PostInfo;
    nextPost?: PostInfo;
}

export default function BlogNavigation({
    prevPost,
    nextPost,
}: BlogNavigationProps): ReactElement {
    return (
        <div className="flex justify-between items-center py-4 border-t border-b border-gray-200 dark:border-gray-700">
            <div className="w-1/3 text-left">
                {prevPost && (
                    <Link
                        href={`/blog/posts/${prevPost.slug}`}
                        className="link flex items-center gap-2"
                        title={prevPost.title}
                    >
                        <HiArrowLeft /> Previous
                    </Link>
                )}
            </div>
            <div className="w-1/3 text-center flex justify-center gap-4">
                <Link href="/blog" className="link">
                    Home
                </Link>
                <Link href="/blog/tags" className="link">
                    All Tags
                </Link>
            </div>
            <div className="w-1/3 text-right flex justify-end">
                {nextPost && (
                    <Link
                        href={`/blog/posts/${nextPost.slug}`}
                        className="link flex items-center gap-2"
                        title={nextPost.title}
                    >
                        Next <HiArrowRight />
                    </Link>
                )}
            </div>
        </div>
    );
}
