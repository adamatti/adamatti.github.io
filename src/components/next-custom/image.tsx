import { type ReactElement } from 'react';
import ReactImage, { type ImageProps } from 'next/legacy/image';

export default function Image(props: ImageProps): ReactElement {
  const { loading, src, ...imageProps } = props;
  // FIXME it shouldn't be required
  const basePath = process.env.BASE_PATH ?? '';
  let newSrc = src;

  if (basePath && typeof newSrc === 'string' && newSrc.startsWith('/')) {
    newSrc = `${basePath}${newSrc}`;
  } else if (basePath) {
    console.warn(`Invalid image src`, src);
  }

  return <ReactImage {...imageProps} loading="eager" src={newSrc} />;
}
