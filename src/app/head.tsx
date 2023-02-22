import { type ReactElement } from 'react';

const title = 'Marcelo Adamatti Portfolio';

export default function Head(): ReactElement {
  return (
    <>
      <title>{title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={title} />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
