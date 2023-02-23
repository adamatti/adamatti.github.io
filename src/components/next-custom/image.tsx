import { type ReactElement } from 'react';
import ReactImage, { type ImageProps } from 'next/image';

export default function Image(props: ImageProps): ReactElement {
  const { loading, ...imageProps } = props;
  return <ReactImage {...imageProps} loading="eager" />;
}
