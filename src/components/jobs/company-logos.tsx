import Link from 'next/link';
import type { ReactElement } from 'react';
import type { Company, Job } from '~/types';
import Image from '../next-custom/image';

export default function CompanyLogos({ job }: { job: Job }): ReactElement {
  const companies: Company[] = [job.agency, job.company].filter(
    (i) => i?.logo
  ) as Company[];

  if (!companies || companies.length === 0) {
    return (
      <Image
        alt="no logo"
        height={48}
        src="/assets/logos/empty.png"
        width={48}
      />
    );
  }

  return (
    <>
      {companies.map((c: Company) => {
        return (
          <Link href={c.url} key={c.id} target="_blank">
            <Image
              alt={c.name}
              height={48}
              key={c.id}
              src={`/assets/logos/${c.logo ?? ''}`}
              width={48}
            />
          </Link>
        );
      })}
    </>
  );
}
