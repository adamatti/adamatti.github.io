import type { ReactElement, ReactNode } from 'react';

export function Section({
  title,
  children,
}: {
  title: string | ReactElement;
  children?: ReactNode;
}): ReactElement {
  return (
    <div className="py-2">
      <div className="py-1 text-2xl">{title}</div>
      <div>{children}</div>
    </div>
  );
}
