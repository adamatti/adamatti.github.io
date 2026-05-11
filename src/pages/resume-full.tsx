import { ResumePage } from '~/components/resume/resume.page';
import type { Job, Technology } from '~/types';
import { query } from '../server/graphql';

export async function getStaticProps(): Promise<{
  props: { jobs: Job[]; techs: Technology[] };
}> {
  const q = `
    techs:allTeches {
      id
      name
      since
      color
      image
      tags
    }
    jobs:allJobs {
      id
      title
      description
      startDate
      endDate
      agency:Agency {
        id
        name
        logo
        url
      }
      company:Company {
        id
        name
        logo
        url
      }    
      projects:Projects {
        id
        title
        results
        description
        keywords
      }
    }`;

  const { jobs, techs } = await query(q);

  return {
    props: {
      jobs,
      techs,
    },
  };
}

ResumePage.disableLayout = true;

export default ResumePage;
