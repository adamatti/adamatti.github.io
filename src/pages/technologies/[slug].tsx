import { type ReactNode, type ReactElement } from 'react';
import ShowPosts from '~/components/blog/show-posts';
import EventCard from '~/components/event-card';
import { ShowJobs } from '~/components/jobs/show-jobs';
import ShowTechs from '~/components/show-techs';
import VideoCard from '~/components/video-card';
import { getPosts } from '~/server/blog-posts';
import { query } from '~/server/graphql';
import { type Job, type BlogPost, type EventRecord, type Technology, type Video } from '~/types';

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
}

export function getStaticPaths(): { paths: Array<{ params: StaticPathResult }>; fallback: boolean } {
  const pages = ['golang', 'javascript', 'java', 'jvm', 'js'];
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
  }`;
  const { jobs, events, technologies, videos } = await query(q);
  const posts = getPosts().filter((p) => p.tags.includes(slug));

  return {
    props: { slug, jobs, posts, events, technologies, videos },
  };
}

function Section({ title, children }: { title: string; children?: ReactNode }): ReactElement {
  return (
    <div className="py-2">
      <div className="text-2xl py-1">{title}</div>
      <div>{children}</div>
    </div>
  );
}

/**
 * TODO add links to all records
 */
export default function TechPage({ slug, posts, jobs, events, videos, technologies }: PageProps): ReactElement {
  return (
    <div>
      {jobs && jobs.length > 0 && (
        <Section title={`Companies that I worked with ${slug}`}>
          <ShowJobs jobs={jobs} />
        </Section>
      )}

      {technologies && technologies.length > 0 && (
        <Section title={`Technologies related to ${slug}`}>
          <ShowTechs items={technologies} filters={false} />
        </Section>
      )}

      {events && (
        <Section title={`Events where I spoke about ${slug}`}>
          <div className="w-auto grid grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {events.map((e) => (
              <EventCard key={e.id} event={e} />
            ))}
          </div>
        </Section>
      )}

      {posts && posts.length > 0 && (
        <Section title={`My posts related to ${slug}`}>
          <ShowPosts posts={posts} />
        </Section>
      )}

      {videos && videos.length > 0 && (
        <Section title={`My videos related to ${slug}`}>
          <div className="w-auto grid grid-cols-2 gap-8 text-center py-8 px-12 sm:px-0">
            {videos.map((v) => (
              <VideoCard key={v.id} video={v} />
            ))}
          </div>
        </Section>
      )}
    </div>
  );
}
