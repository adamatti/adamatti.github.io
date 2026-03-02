import Link from 'next/link';
import type { ReactElement } from 'react';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import { emitAnalyticsEvent } from '~/analytics/analytics';

type PostInfo = {
  slug: string;
  title: string;
};

type BlogNavigationProps = {
  nextPost?: PostInfo;
  prevPost?: PostInfo;
};

export default function BlogNavigation({
  prevPost,
  nextPost,
}: BlogNavigationProps): ReactElement {
  return (
    <div className="flex items-center justify-between border-gray-200 border-t border-b py-4 dark:border-gray-700">
      <div className="w-1/3 text-left">
        {prevPost && (
          <Link
            className="link flex items-center gap-2"
            href={`/blog/posts/${prevPost.slug}`}
            onClick={() =>
              emitAnalyticsEvent('blog_post_navigation', {
                direction: 'previous',
                slug: prevPost.slug,
              })
            }
            title={prevPost.title}
          >
            <HiArrowLeft /> Previous
          </Link>
        )}
      </div>
      <div className="flex w-1/3 justify-center gap-4 text-center">
        <Link
          className="link"
          href="/blog"
          onClick={() => emitAnalyticsEvent('blog_navigation_home')}
        >
          Home
        </Link>
        <Link
          className="link"
          href="/blog/tags"
          onClick={() => emitAnalyticsEvent('blog_navigation_tags')}
        >
          All Tags
        </Link>
      </div>
      <div className="flex w-1/3 justify-end text-right">
        {nextPost && (
          <Link
            className="link flex items-center gap-2"
            href={`/blog/posts/${nextPost.slug}`}
            onClick={() =>
              emitAnalyticsEvent('blog_post_navigation', {
                direction: 'next',
                slug: nextPost.slug,
              })
            }
            title={nextPost.title}
          >
            Next <HiArrowRight />
          </Link>
        )}
      </div>
    </div>
  );
}
