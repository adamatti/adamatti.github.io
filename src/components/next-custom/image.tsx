import { type DetailedHTMLProps, type ImgHTMLAttributes, type ReactElement } from 'react';
// import ReactImage, { type ImageProps } from 'next/legacy/image';

type ImageProps = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

export default function Image(props: ImageProps): ReactElement {
  const { loading, src, ...imageProps } = props;
  // FIXME it shouldn't be required
  const basePath = process.env.BASE_PATH ?? '';
  let newSrc = src;

  if (basePath && newSrc?.startsWith('/')) {
    newSrc = `${basePath}${newSrc}`;
  }

  return <img {...imageProps} loading="eager" src={newSrc} />;
}
