import type { FC } from 'react';
import type { Job, Technology } from '~/types';

export type ResumePageProps = {
  jobs: Job[];
  techs: Technology[];
};

export type ResumePageType = FC<ResumePageProps> & {
  disableLayout?: boolean;
};
