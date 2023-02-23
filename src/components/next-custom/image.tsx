import { type ReactElement } from 'react';
import ReactImage, { type ImageProps } from 'next/image';

export default function Image(props: ImageProps): ReactElement {
  const { loading, src, ...imageProps } = props;
  // FIXME it shouldn't be required
  const basePath = process.env.BASE_PATH ?? '';
  let newSrc = src;
  if (basePath && typeof src === 'string' && src.startsWith('/')) {
    newSrc = `${basePath}/${src}`;
  }
  return <ReactImage {...imageProps} loading="eager" src={newSrc} />;
}