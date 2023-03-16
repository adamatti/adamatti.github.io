'use server';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { type BlogPost } from '~/types';

const loadPosts = (folder: string = postRootFolder): BlogPost[] => {
  const files: string[] = fs.readdirSync(folder);
  const markdownFiles = files.filter((f) => f.endsWith('.md'));

  const subfolders = files.filter((f) => fs.lstatSync(`${folder}/${f}`).isDirectory());
  const subPosts: BlogPost[] = subfolders.flatMap((subfolder) => loadPosts(`${folder}/${subfolder}`));

  const posts = markdownFiles
    .map((filePath) => loadPostContent(`${folder}/${filePath}`))
    .sort((a, b) => b.dateString.localeCompare(a.dateString));
  return [...subPosts, ...posts];
};

const loadPostContent = (filePath: string): BlogPost => {
  const content = fs.readFileSync(filePath, 'utf-8');
  const matterResult = matter(content);

  const extension = path.extname(filePath);

  const slugOnly: string = matterResult.data.slug?.toLowerCase() ?? path.basename(filePath, extension);
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
const posts: BlogPost[] = loadPosts();

export const getPosts = (): BlogPost[] => posts;

export const getPost = (slug: string): BlogPost | undefined => posts.find((p) => p.slug === slug);
