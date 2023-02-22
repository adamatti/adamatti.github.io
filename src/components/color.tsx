import { type ReactElement } from 'react';

export default function Color(args: { children: React.ReactNode }): ReactElement {
  return <span className="color">{args.children}</span>;
}
