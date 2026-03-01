// @vitest-environment jsdom

import { render, screen } from '@testing-library/react';
// biome-ignore lint: required by test
import React from 'react';
import '@testing-library/jest-dom';
import Markdown from './markdown';

describe('Markdown component', () => {
  it('renders normal markdown and preserves iframe tags when tagfilter is disabled', () => {
    const md = `This is a [link](https://example.com)\n\n<iframe src="https://foo.bar" width="100" height="50"></iframe>`;
    const { container } = render(<Markdown>{md}</Markdown>);

    // link override should still work
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://example.com'
    );

    // iframe should be present in the output
    const iframe = container.querySelector('iframe');
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute('src', 'https://foo.bar');
  });
});
