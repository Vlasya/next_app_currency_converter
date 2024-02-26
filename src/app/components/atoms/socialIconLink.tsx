import Link from 'next/link';
import Icon from '@/components/atoms/icon';

interface Props {
  href: string;
  icon: string;
  altText?: string;
}

export function SocialIconLink({ href, icon, altText }: Props) {
  return (
    <Link href={href}>
      <Icon src={icon} altText={altText} />
    </Link>
  );
}
