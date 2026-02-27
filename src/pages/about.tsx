import Link from 'next/link';
import type { ReactElement } from 'react';
import { FaCode, FaIcons, FaLightbulb, FaPalette } from 'react-icons/fa';
import Color from '~/components/color';
import Image from '~/components/next-custom/image';

type TechItem = {
  description: string;
  href: string;
  icon?: ReactElement;
  image?: string;
  name: string;
};

const techStack: { category: string; icon: ReactElement; items: TechItem[] }[] =
  [
    {
      category: 'Core Architecture',
      icon: <FaCode className="text-2xl text-cyan-600 dark:text-cyan-400" />,
      items: [
        {
          name: 'React',
          href: 'https://reactjs.org/',
          image: '/assets/icons/react.png',
          description: 'A JavaScript library for building user interfaces.',
        },
        {
          name: 'Next.js',
          href: 'https://nextjs.org/',
          image: '/assets/icons/nextjs.png',
          description: 'The React framework for the web.',
        },
      ],
    },
    {
      category: 'Design & Styling',
      icon: <FaPalette className="text-2xl text-cyan-600 dark:text-cyan-400" />,
      items: [
        {
          name: 'Tailwind CSS',
          href: 'https://tailwindcss.com/',
          image: '/assets/icons/tailwind.png',
          description: 'A utility-first CSS framework.',
        },
        {
          name: 'DaisyUI',
          href: 'https://daisyui.com/',
          description: 'The most popular component library for Tailwind CSS.',
        },
      ],
    },
    {
      category: 'Inspiration & Templates',
      icon: (
        <FaLightbulb className="text-2xl text-cyan-600 dark:text-cyan-400" />
      ),
      items: [
        {
          name: 'Tailwind Nextjs Starter Blog',
          href: 'https://tailwind-nextjs-starter-blog.vercel.app/',
          description:
            'A feature-rich Next.js and Tailwind CSS blogging template.',
        },
        {
          name: 'Astro Boilerplate',
          href: 'https://www.tailwindawesome.com/resources/astro-boilerplate',
          description: 'A starter template for Astro with Tailwind CSS.',
        },
      ],
    },
    {
      category: 'Utilities',
      icon: <FaIcons className="text-2xl text-cyan-600 dark:text-cyan-400" />,
      items: [
        {
          name: 'react-icons',
          href: 'https://react-icons.github.io/react-icons',
          description: 'Include popular icons in your React projects easily.',
        },
      ],
    },
  ];

export default function AboutPage(): ReactElement {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-screen-lg">
        <h1 className="section-title">
          About This <Color>Site</Color>
        </h1>
        <p className="section-text mb-12 text-center">
          This personal portfolio and blog is built using a modern tech stack
          focused on performance, maintainability, and clean design. Here's a
          breakdown of the tools and templates that make it possible.
        </p>

        <div className="space-y-12">
          {techStack.map((group) => (
            <section key={group.category}>
              <div className="mb-6 flex items-center gap-3 border-gray-200 border-b pb-2 dark:border-gray-700">
                {group.icon}
                <h2 className="font-bold text-xl">{group.category}</h2>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {group.items.map((tech) => (
                  <Link
                    className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
                    href={tech.href}
                    key={tech.name}
                    target="_blank"
                  >
                    <div className="mb-3 flex items-center gap-4">
                      {tech.image ? (
                        <div className="flex h-10 w-10 items-center justify-center">
                          <Image
                            alt={tech.name}
                            className="h-full w-full object-contain"
                            src={tech.image}
                          />
                        </div>
                      ) : (
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600 dark:bg-cyan-900 dark:text-cyan-400">
                          <FaCode className="text-xl" />
                        </div>
                      )}
                      <h3 className="font-bold text-lg transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                        {tech.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed dark:text-gray-400">
                      {tech.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
