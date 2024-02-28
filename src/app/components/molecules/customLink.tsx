import Link from 'next/link';

interface Props {
  href: string;
  text: string;
  isBlueBtn?: boolean;
}

export default function CustomLink({ href, text, isBlueBtn }: Readonly<Props>) {
  return (
    <Link href={href}>
      <div
        className={`text-${isBlueBtn ? 'lightText' : 'baseColor'} bg-${
          isBlueBtn ? 'blueBg' : 'pageBg'
        } w-[234px] h-[53px] flex justify-center items-center rounded ${isBlueBtn&& 'bg-blueBg'} `}
      >
        {text}
      </div>
    </Link>
  );
}
