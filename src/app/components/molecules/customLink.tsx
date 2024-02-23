import Link from 'next/link';

interface Props {
  href: string;
  textColor?: string;
  bgColor?: string;
  text: string;
}

export default function CustomLink({ href, textColor, bgColor, text }: Props) {
  return (
    <Link href={href} className={` w-64 h14 `}>
      <div className={`text-${textColor} bg-${bgColor} w-[234px] h-[53px] flex justify-center items-center rounded`}>
      {text}
      </div>
      
    </Link>
  );
}
