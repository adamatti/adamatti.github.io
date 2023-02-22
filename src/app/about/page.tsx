import Link from 'next/link';
import { type ReactElement } from 'react';

/**
 * FIXME move to a blog post
 * @returns
 */
export default function AboutPage(): ReactElement {
  return (
    <>
      <div>List of technologies used on this page:</div>
      <br />
      <ul className="list-disc">
        <li>
          <Link href="https://reactjs.org/">React</Link>
        </li>
        <li>
          <Link href="https://nextjs.org/">Next.js</Link>
        </li>
        <li>
          Style:
          <ul className="list-disc list-inside">
            <li>
              <Link href="https://tailwindcss.com/">Tailwind</Link>
            </li>
            <li>
              <Link href="https://tailwind-nextjs-starter-blog.vercel.app/">Theme: tailwind-nextjs-starter-blog</Link>
            </li>
            <li>
              <Link href="https://www.tailwindawesome.com/resources/astro-boilerplate">Theme: astro-boilerplate</Link>
            </li>
            <li>
              <Link href="https://react-icons.github.io/react-icons">react-icons</Link>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}
