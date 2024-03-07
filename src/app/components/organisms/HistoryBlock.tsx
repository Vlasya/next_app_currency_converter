'use client';
import Button from '@/components/atoms/Button';
import { useStore } from '../../../../store/application.store';
import HistoryItem from '@/components/molecules/HistoryItem';

export default function HistoryBlock() {
  const { historyItems, removeAllHistoryItem } = useStore((state) => state);

  const handleCleanHistory = () => {
    removeAllHistoryItem();
  };

  return (
    <div className=' bg-pageBg min-w-[960px] max-w-[1000px] min-h-fit p-[50px] flex-col items-center justify-center'>
      <div className='flex items-center justify-between '>
        <div className='text-blackText font-bold text-[28px] leading-[56px]'>
          Історія конвертації
        </div>
        <Button
          isBlueBtn
          text='Очистити історію'
          onClick={handleCleanHistory}
        />
      </div>

      {historyItems && (
        <div className='grid grid-cols-2 gap-4 mt-[20px]'>
          {historyItems.map((item, index) => (
            <HistoryItem key={index} item={item} />
          ))}
        </div>
      )}
      {!historyItems.length && (
        <div className='flex items-center justify-center text-baseColor font-medium p-[20px]'>
          Empty ...
        </div>
      )}
    </div>
  );
}
