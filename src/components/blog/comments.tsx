import { DiscussionEmbed } from 'disqus-react';
import type { ReactElement } from 'react';
import type { BlogPost } from '~/types';

// FIXME remove hardcoded values
function BlogComments({ post }: { post: BlogPost }): ReactElement {
	return (
		<>
			<DiscussionEmbed
				shortname="http-adamatti-github-io-blog"
				config={{
					url: `https://adamatti.github.io/blog/posts/${post.slug}`,
					identifier: post.slug,
					title: post.title,
					language: 'en_US',
				}}
			/>
		</>
	);
}

export default BlogComments;
