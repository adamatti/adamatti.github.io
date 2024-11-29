import type { ReactElement } from 'react';
import ShowPosts from '~/components/blog/show-posts';
import { getPosts } from '~/server/blog-posts';
import type { BlogPost } from '~/types';

export function getStaticProps(): { props: { posts: BlogPost[] } } {
	const posts = getPosts();

	return {
		props: {
			posts,
		},
	};
}

export default function BlogPage({
	posts,
}: { posts: BlogPost[] }): ReactElement {
	return <ShowPosts posts={posts} />;
}
