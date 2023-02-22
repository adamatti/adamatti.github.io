import { type ReactElement } from 'react';
import AboutMeSection from '~/components/about-me-section';
import HightlightsSection from '~/components/hightlights-section';
import TechStackSection from '~/components/tech-stack-section';

export default function Home(): ReactElement {
  return (
    <>
      <AboutMeSection />
      <HightlightsSection />
      <TechStackSection />
    </>
  );
}
