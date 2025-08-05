import type { ReactElement } from "react";
import { technologiesToList } from "~/config";
import Link from "next/link";

function ShowList({ category }: { category: string }): ReactElement {
  const list: string[] = technologiesToList
    .filter(t => t.category === category && t.show !== false)
    .map(t => t.key)
    .sort();

  return (
    <ul className="list-disc ml-4">
      {list.map(i => (
        <li key={i}>
          <Link href={i}>{i}</Link>
        </li>
      ))}
    </ul>
  )
}

export default function AllPage(): ReactElement {
  const categories: string[] = technologiesToList.reduce((list: string[], t) => {
    const key = t.category ?? 'Others';
    if (!list.includes(key)) {
      return [...list, key];
    }
    return list;
  }, [] as string[]).sort();

  return (
    <div>
      <ul className="list-disc">
        {categories.sort().map(c => (
          <li key={c}>
            {c}
            <ShowList category={c} />
          </li>
        ))}
      </ul>
    </div >
  )
}