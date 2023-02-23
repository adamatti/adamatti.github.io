import { type StaticImageData } from 'next/image';
import { type DetailedHTMLProps, type ImgHTMLAttributes, type ReactElement } from 'react';
// import ReactImage, { type ImageProps } from 'next/legacy/image';

type OriginalImageProps = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

type ImageProps = Omit<OriginalImageProps, 'src'> & {
  src: string | StaticImageData;
  layout?: string; // for compatibility
};

export default function Image(props: ImageProps): ReactElement {
  const { loading, src, ...imageProps } = props;

  // FIXME it shouldn't be required for nextjs
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  let newSrc: string = typeof src === 'string' ? src : src?.src;

  if (basePath && newSrc?.startsWith('/') && !newSrc.startsWith(basePath)) {
    newSrc = `${basePath}${newSrc}`;
  }

  return <img {...imageProps} loading="eager" src={newSrc} />;
}
