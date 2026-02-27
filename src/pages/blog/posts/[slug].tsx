import type { ReactElement } from 'react';
import ShowPost from '~/components/blog/show-post';
import { getPost, getPosts } from '~/server/blog-posts';
import type { BlogPost } from '~/types';

interface PageProps {
	slug: string;
	post: BlogPost;
	prevPost?: { slug: string; title: string };
	nextPost?: { slug: string; title: string };
}

interface StaticPathResult {
	slug: string;
}

export function getStaticPaths(): {
	paths: Array<{ params: StaticPathResult }>;
	fallback: boolean;
} {
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

export function getStaticProps({
	params: { slug },
}: { params: StaticPathResult }): { props: PageProps } {
	const posts = getPosts();
	const postIndex = posts.findIndex((p) => p.slug === slug);
	const post = posts[postIndex];

	// Posts are sorted descending by date, so index - 1 is newer (next), index + 1 is older (prev)
	const nextPost = postIndex > 0 ? posts[postIndex - 1] : undefined;
	const prevPost = postIndex < posts.length - 1 ? posts[postIndex + 1] : undefined;

	const props: PageProps = {
		slug,
		post,
	};

	if (prevPost) {
		props.prevPost = { slug: prevPost.slug, title: prevPost.title };
	}

	if (nextPost) {
		props.nextPost = { slug: nextPost.slug, title: nextPost.title };
	}

	return {
		props,
	};
}

export default function BlogPostPage({
	post,
	prevPost,
	nextPost,
}: PageProps): ReactElement {
	return <ShowPost post={post} prevPost={prevPost} nextPost={nextPost} />;
}
