import Link from 'next/link';
import type { ReactElement, ReactNode } from 'react';
import ShowPosts from '~/components/blog/show-posts';
import EventCard from '~/components/event-card';
import { ShowJobs } from '~/components/jobs/show-jobs';
import ShowPetProjects from '~/components/show-pet-projects';
import ShowTechs from '~/components/show-techs';
import VideoCard from '~/components/video-card';
import { SHOW_RESUME } from '~/config';
import { getPosts } from '~/server/blog-posts';
import { query } from '~/server/graphql';
import type {
	BlogPost,
	EventRecord,
	Job,
	PetProject,
	Technology,
	Video,
} from '~/types';

interface StaticPathResult {
	slug: string;
}

interface PageProps {
	slug: string;
	jobs: Job[];
	posts: BlogPost[];
	events: EventRecord[];
	technologies: Technology[];
	videos: Video[];
	petProjects: PetProject[];
}

export function getStaticPaths(): {
	paths: Array<{ params: StaticPathResult }>;
	fallback: boolean;
} {
	// removed 'java' as it conflicts with javascript. Use jvm instead
	const pages = [
		'golang',
		'javascript',
		'jvm',
		'js',
		'groovy',
		'gradle',
		'nodejs',
		'kotlin',
		'scala',
		'typescript',
	];
	return {
		paths: pages.map((slug) => ({
			params: {
				slug,
			},
		})),
		fallback: false,
	};
}

export async function getStaticProps({
	params: { slug },
}: {
	params: StaticPathResult;
}): Promise<{ props: PageProps }> {
	const q = `
  jobs: allJobs(filter: {show: true, q: "${slug}"}) {
    id
    title
    description
    startDate
    endDate
    agency: Agency {
      id
      name
      logo
      url
    }
    company: Company {
      id
      name
      logo
      url
    }
    projects: Projects {
      id
      title
      description
      results
      keywords
      result
    }
  }
  events: allEvents(filter: {q: "${slug}"}) {
    id
    name
    talk
    description
    date
    tags
    links
  }
  technologies: allTeches(filter: {q: "${slug}"}) {
    id
    name
    color
    image
    tags
    since
  }
  videos: allVideos(filter: {q: "${slug}"}) {
    id
    title
    description
    url
    embedId
    tags
  }
  petProjects:allPetProjects(sortField: "created_at", sortOrder: "desc", filter: {q: "${slug}"}) {
    id
    name
    url
    description
    createdAt:created_at
    language
    topics
  }`;
	const { jobs, events, technologies, videos, petProjects } = await query(q);
	const posts = getPosts().filter((p) => p.tags.includes(slug));

	return {
		props: { slug, jobs, posts, events, technologies, videos, petProjects },
	};
}

function Section({
	title,
	children,
}: { title: string; children?: ReactNode }): ReactElement {
	return (
		<div className="py-2">
			<div className="text-2xl py-1 mb-5">{title}</div>
			<div>{children}</div>
		</div>
	);
}

function JobsSection({
	slug,
	jobs,
}: { slug: string; jobs: Job[] }): ReactElement {
	return (
		<>
			{jobs && jobs.length > 0 && (
				<Section title={`Companies that I worked with ${slug}`}>
					<ShowJobs jobs={jobs} />
					{SHOW_RESUME && (
						<p className="mt-5">
							Check all my resume at <Link href="/resume">/resume</Link>
						</p>
					)}
				</Section>
			)}
		</>
	);
}

function EventsSection({
	slug,
	events,
}: { slug: string; events: EventRecord[] }): ReactElement {
	return (
		<>
			{events && events.length > 0 && (
				<Section title={`Events where I spoke about ${slug}`}>
					<div className="w-auto grid grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
						{events.map((e) => (
							<EventCard key={e.id} event={e} />
						))}
					</div>
					<p className="mt-5">
						Check all my talks on <Link href="/events">/events</Link>
					</p>
				</Section>
			)}
		</>
	);
}

function TechSection({
	slug,
	technologies,
}: { slug: string; technologies: Technology[] }): ReactElement {
	return (
		<>
			{technologies && technologies.length > 0 && (
				<Section title={`Technologies related to ${slug}`}>
					<ShowTechs items={technologies} filters={false} />
					<p className="mt-5">
						Check all technologies I worked with on{' '}
						<Link href="/technologies">/technologies</Link>
					</p>
				</Section>
			)}
		</>
	);
}

function PostsSection({
	slug,
	posts,
}: { slug: string; posts: BlogPost[] }): ReactElement {
	return (
		<>
			{posts && posts.length > 0 && (
				<Section title={`My posts related to ${slug}`}>
					<ShowPosts posts={posts} />
					<p className="mt-5">
						Check all posts on <Link href="/blogs">/blogs</Link>
					</p>
				</Section>
			)}
		</>
	);
}

function VideoSection({
	slug,
	videos,
}: { slug: string; videos: Video[] }): ReactElement {
	return (
		<>
			{videos && videos.length > 0 && (
				<Section title={`My videos related to ${slug}`}>
					<div className="w-auto grid grid-cols-2 gap-8 text-center py-8 px-12 sm:px-0">
						{videos.map((v) => (
							<VideoCard key={v.id} video={v} />
						))}
					</div>
					<p className="mt-5">
						Check all my videos on <Link href="/videos">/videos</Link>
					</p>
				</Section>
			)}
		</>
	);
}
function PetProjectsSection({
	slug,
	projects,
}: { slug: string; projects: PetProject[] }): ReactElement {
	return (
		<>
			{projects && projects.length > 0 && (
				<Section title={`My pet projects related to ${slug}`}>
					<ShowPetProjects projects={projects} />
					<p className="mt-5">
						Check all the other projects on{' '}
						<Link href="/pet-projects">/pet-projects</Link>
					</p>
				</Section>
			)}
		</>
	);
}

export default function TechPage({ slug, ...args }: PageProps): ReactElement {
	return (
		<div>
			<JobsSection slug={slug} jobs={args.jobs} />
			<TechSection slug={slug} technologies={args.technologies} />
			<EventsSection slug={slug} events={args.events} />
			<PostsSection slug={slug} posts={args.posts} />
			<VideoSection slug={slug} videos={args.videos} />
			<PetProjectsSection slug={slug} projects={args.petProjects} />
			<p>
				Check all my resume at <Link href="/resume">/resume</Link>
			</p>
		</div>
	);
}
