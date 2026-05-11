import { CompanyListSection } from './company-list-section';
import { EducationSection } from './education-section';
import { LinksSection } from './links-section';
import { OtherTechnologiesSection } from './other-technologies-section';
import { SummarySection } from './summary-section';
import { TechnologyListSection } from './technology-list-section';
import type { ResumePageType } from './types';

export const ResumePage: ResumePageType = ({ jobs, techs }) => {
  return (
    <>
      <LinksSection />
      <SummarySection />
      <TechnologyListSection techs={techs} />
      <CompanyListSection jobs={jobs} />
      <OtherTechnologiesSection techs={techs} />
      <EducationSection />
    </>
  );
};
