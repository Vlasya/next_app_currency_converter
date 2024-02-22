import Link from 'next/link'

interface Props {
  text: string;
  url: string;
  isActive?: boolean;
}

export default function NavLink({ text, url, isActive }: Props) {
  return (
    <Link
      className={`font-medium text-base  ${
        isActive ? 'text-activeEl' : 'text-baseColor'
      } hover:activeEl  sm:py-6   `}
      href={url}
    >
      {text}
    </Link>
  );
}
