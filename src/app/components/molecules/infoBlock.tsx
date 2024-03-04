import Icon from '@/components/atoms/Icon';

interface Props {
  icon: string;
  title: string;
  subtitle: string;
  altText?: string;
}

export default function InfoBlock({ icon, title, subtitle, altText }: Props) {
  return (
    <div className='flex max-w-[170px] text-start '>
      <div className=' mr-[15px]'>
        <Icon src={icon} altText={altText} />
      </div>

      <div className='flex flex-col mt-[-6px]'>
        <div className='text-blackText text-base font-medium  '>{title}</div>
        <div className=' text-baseColor font-normal text-xs  '>{subtitle}</div>
      </div>
    </div>
  );
}
