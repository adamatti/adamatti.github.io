import Link from 'next/link';
import type { ReactElement, ReactNode } from 'react';
import ShowPosts from '~/components/blog/show-posts';
import EventCard from '~/components/event-card';
import { ShowJobs } from '~/components/jobs/show-jobs';
import ShowPetProjects from '~/components/show-pet-projects';
import ShowTechs from '~/components/show-techs';
import VideoCard from '~/components/video-card';
import { technologiesToList } from '~/config';
import { ffShowResume } from '~/feature-flags';
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

type StaticPathResult = {
  slug: string;
};

type PageProps = {
  events: EventRecord[];
  jobs: Job[];
  petProjects: PetProject[];
  posts: BlogPost[];
  slug: string;
  technologies: Technology[];
  videos: Video[];
};

export function getStaticPaths(): {
  paths: Array<{ params: StaticPathResult }>;
  fallback: boolean;
} {
  return {
    paths: technologiesToList.map((t) => ({
      params: {
        slug: t.key,
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
}: {
  title: string;
  children?: ReactNode;
}): ReactElement {
  return (
    <div className="py-4">
      <div className="mb-5 border-gray-100 border-b py-1 font-bold text-2xl text-gray-900 uppercase tracking-tight dark:border-gray-800 dark:text-white">
        {title}
      </div>
      <div className="text-gray-700 dark:text-gray-300">{children}</div>
    </div>
  );
}

function JobsSection({
  slug,
  jobs,
}: {
  slug: string;
  jobs: Job[];
}): ReactElement {
  return (
    <>
      {jobs && jobs.length > 0 && (
        <Section title={`Companies that I worked with ${slug}`}>
          <ShowJobs jobs={jobs} />
          {ffShowResume && (
            <p className="mt-5 text-gray-500 dark:text-gray-400">
              Check all my resume at{' '}
              <Link className="link" href="/resume">
                /resume
              </Link>
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
}: {
  slug: string;
  events: EventRecord[];
}): ReactElement {
  return (
    <>
      {events && events.length > 0 && (
        <Section title={`Events where I spoke about ${slug}`}>
          <div className="grid w-auto grid-cols-1 gap-8 px-4 py-8 text-center sm:px-0 md:grid-cols-2 lg:grid-cols-3">
            {events.map((e) => (
              <EventCard event={e} key={e.id} />
            ))}
          </div>
          <p className="mt-5 text-gray-500 dark:text-gray-400">
            Check all my talks on{' '}
            <Link className="link" href="/events">
              /events
            </Link>
          </p>
        </Section>
      )}
    </>
  );
}

function TechSection({
  slug,
  technologies,
}: {
  slug: string;
  technologies: Technology[];
}): ReactElement {
  return (
    <>
      {technologies && technologies.length > 0 && (
        <Section title={`Technologies related to ${slug}`}>
          <ShowTechs filters={false} items={technologies} />
          <p className="mt-5 text-gray-500 dark:text-gray-400">
            Check all technologies I worked with on{' '}
            <Link className="link" href="/technologies">
              /technologies
            </Link>
          </p>
        </Section>
      )}
    </>
  );
}

function PostsSection({
  slug,
  posts,
}: {
  slug: string;
  posts: BlogPost[];
}): ReactElement {
  return (
    <>
      {posts && posts.length > 0 && (
        <Section title={`My posts related to ${slug}`}>
          <ShowPosts posts={posts} />
          <p className="mt-5 text-gray-500 dark:text-gray-400">
            Check all posts on{' '}
            <Link className="link" href="/blogs">
              /blogs
            </Link>
          </p>
        </Section>
      )}
    </>
  );
}

function VideoSection({
  slug,
  videos,
}: {
  slug: string;
  videos: Video[];
}): ReactElement {
  return (
    <>
      {videos && videos.length > 0 && (
        <Section title={`My videos related to ${slug}`}>
          <div className="grid w-auto grid-cols-1 gap-8 px-4 py-8 text-center sm:px-0 md:grid-cols-2">
            {videos.map((v) => (
              <VideoCard key={v.id} video={v} />
            ))}
          </div>
          <p className="mt-5 text-gray-500 dark:text-gray-400">
            Check all my videos on{' '}
            <Link className="link" href="/videos">
              /videos
            </Link>
          </p>
        </Section>
      )}
    </>
  );
}
function PetProjectsSection({
  slug,
  projects,
}: {
  slug: string;
  projects: PetProject[];
}): ReactElement {
  return (
    <>
      {projects && projects.length > 0 && (
        <Section title={`My pet projects related to ${slug}`}>
          <ShowPetProjects projects={projects} />
          <p className="mt-5 text-gray-500 dark:text-gray-400">
            Check all the other projects on{' '}
            <Link className="link" href="/pet-projects">
              /pet-projects
            </Link>
          </p>
        </Section>
      )}
    </>
  );
}

export default function TechPage({ slug, ...args }: PageProps): ReactElement {
  return (
    <div>
      <JobsSection jobs={args.jobs} slug={slug} />
      <TechSection slug={slug} technologies={args.technologies} />
      <EventsSection events={args.events} slug={slug} />
      <PostsSection posts={args.posts} slug={slug} />
      <VideoSection slug={slug} videos={args.videos} />
      <PetProjectsSection projects={args.petProjects} slug={slug} />
      <p className="mt-10 border-gray-100 border-t pt-6 text-gray-500 dark:border-gray-800 dark:text-gray-400">
        Check all my resume at{' '}
        <Link className="link" href="/resume">
          /resume
        </Link>
      </p>
    </div>
  );
}
