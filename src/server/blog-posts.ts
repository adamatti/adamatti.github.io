'use server';
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import type { BlogPost } from '~/types';

const loadPosts = (folder: string = postRootFolder): BlogPost[] => {
	const files: string[] = fs.readdirSync(folder);
	const markdownFiles = files.filter((f) => f.endsWith('.md'));

	const subfolders = files.filter((f) =>
		fs.lstatSync(`${folder}/${f}`).isDirectory(),
	);
	const subPosts: BlogPost[] = subfolders.flatMap((subfolder) =>
		loadPosts(`${folder}/${subfolder}`),
	);

	const posts = markdownFiles.map((filePath) =>
		loadPostContent(`${folder}/${filePath}`),
	);

	return [...subPosts, ...posts].sort((a, b) =>
		b.dateString.localeCompare(a.dateString),
	);
};

const loadPostContent = (filePath: string): BlogPost => {
	const content = fs.readFileSync(filePath, 'utf-8');
	const matterResult = matter(content);

	const extension = path.extname(filePath);

	const slugOnly: string =
		matterResult.data.slug?.toLowerCase() ?? path.basename(filePath, extension);
	const dateString: string = matterResult.data.date;

	return {
		slug: `${dateString}-${slugOnly}`,
		title: matterResult.data.title,
		summary: matterResult.data.summary,
		dateString,
		tags: matterResult.data.tags ?? [],
		content: matterResult.content,
	};
};

const postRootFolder = 'posts';

export const getPosts = (): BlogPost[] => loadPosts();

export const getPost = (slug: string): BlogPost | undefined =>
	loadPosts().find((p) => p.slug === slug);

export const getTags = (): Record<string, number> => {
	return getPosts().reduce((total: Record<string, number>, cur) => {
		for (const t of cur.tags) {
			total[t] = (total[t] ?? 0) + 1;
		}
		return total;
	}, {});
};
