import Link from 'next/link';
import Icon from '@/app/components/atoms/Icon';

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
