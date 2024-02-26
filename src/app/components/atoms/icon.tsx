import Image from 'next/image';

interface Props {
  altText?: string;
  src: string;
}

export default function Icon({ altText, src }: Props) {
  return <Image alt={altText ?? 'icon'} src={src} width={16} height={16} />;
}
