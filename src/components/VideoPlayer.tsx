import { useAppSelector } from '@/redux/hooks';
import { AiOutlineLoading } from 'react-icons/ai';

export const VideoPlayer = () => {
  const resultUrl = useAppSelector((state) => state.videConfig.resultUrl);
  const isLoading = useAppSelector((state) => state.videConfig.isLoading);

  return (
    <div className='aspect-video w-full overflow-hidden rounded-md bg-blue-100'>
      {!resultUrl && !isLoading && (
        <div className='flex-center h-full w-full text-gray-500'>Please upload a file</div>
      )}

      {isLoading && (
        <div className='flex-center h-full w-full animate-spin text-3xl text-gray-500'>
          <AiOutlineLoading className='spin-in' />
        </div>
      )}

      {!isLoading && resultUrl && <video src={resultUrl} controls className='h-full w-full' />}
    </div>
  );
};
