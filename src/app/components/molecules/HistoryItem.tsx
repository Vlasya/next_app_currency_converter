import { HistoryItem } from '@/app/types';
import Icon from '@/components/atoms/icon';

interface Props {
  item: HistoryItem;
}

export default function HistoryItem({ item }: Props) {
  return (
    <div className=' bg-white flex items-center justify-around rounded w-[390px] p-[5px]' >
      <div className='text-lightGreen'>{item.date}</div>
      <div className='text-baseColor'>{item.initialValue}</div>
      <div >
          <Icon src='/right_arrow.png' width={15} height={10} />
        </div>
      <div className='text-baseColor'>{item.targetValue}</div>
    </div>
  );
}
