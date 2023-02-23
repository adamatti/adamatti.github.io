import { DetailedHTMLProps, ImgHTMLAttributes, type ReactElement } from 'react';
// import ReactImage, { type ImageProps } from 'next/legacy/image';

type ImageProps = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

export default function Image(props: ImageProps): ReactElement {
  const { loading, src: oldsrc, ...imageProps } = props;
  // some images are using static import
  const src = props.src as any;

  // FIXME it shouldn't be required for nextjs
  const basePath = process.env.BASE_PATH ?? '';
  let newSrc: string = src?.src ?? src;

  if (basePath && newSrc?.startsWith('/')) {
    newSrc = `${basePath}${newSrc}`;
  }

  return <img {...imageProps} loading="eager" src={newSrc} />;
}
