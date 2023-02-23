import { type ReactElement } from 'react';
import ShowPost from '~/components/blog/show-post';
import { getPost, getPosts } from '~/server/blog-posts';
import { type BlogPost } from '~/types';

interface PageProps {
  slug: string;
  post: BlogPost;
}

interface StaticPathResult {
  slug: string;
}

export function getStaticPaths(): { paths: Array<{ params: StaticPathResult }>; fallback: boolean } {
  const posts: BlogPost[] = getPosts();
  const paths = posts.map((p) => ({
    params: {
      slug: p.slug ?? '',
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps({ params: { slug } }: { params: StaticPathResult }): { props: PageProps } {
  const post = getPost(slug) as BlogPost;
  return {
    props: {
      slug,
      post,
    },
  };
}

export default function BlogPostPage({ post }: PageProps): ReactElement {
  return <ShowPost post={post} />;
}
