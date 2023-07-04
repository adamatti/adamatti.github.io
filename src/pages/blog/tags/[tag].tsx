import Link from 'next/link';
import { type ReactElement } from 'react';
import ShowPosts from '~/components/blog/show-posts';
import { getPosts, getTags } from '~/server/blog-posts';
import { type BlogPost } from '~/types';

interface StaticPathResult {
  paths: Array<{
    params: {
      tag: string;
    };
  }>;
  fallback: boolean;
}

interface GetStaticPropsResult {
  props: {
    tag: string;
    posts: BlogPost[];
  };
}

export function getStaticPaths(): StaticPathResult {
  const tags: string[] = Object.keys(getTags());
  const paths = tags.map((tag) => ({
    params: {
      tag,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps({ params: { tag } }: { params: { tag: string } }): GetStaticPropsResult {
  const posts = getPosts().filter((p) => p.tags.includes(tag));

  return {
    props: {
      tag,
      posts,
    },
  };
}

export default function BlogPage({ posts, tag }: { tag: string; posts: BlogPost[] }): ReactElement {
  return (
    <>
      <div className="my-3">
        Posts with tag <b>{tag}</b>
      </div>
      <div className="my-3">Note: consider this page as a MVP, I still want to improve the style</div>
      <ShowPosts posts={posts} />
      <br />
      <Link href="/blog/tags" className="link">
        Return to all tags
      </Link>
    </>
  );
}
