import Image from 'next/image';

interface Props {
  altText?: string;
  src: string;
  width?: number;
  height?: number;
}

export default function Icon({ altText, src, width, height }: Props) {
  return (
    <Image
      alt={altText ?? 'icon'}
      src={src}
      width={width ? width : 16}
      height={height ? height : 16}
    />
  );
}
