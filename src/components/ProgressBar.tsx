import { cn } from '@/lib/utils';
import { useAppSelector } from '@/redux/hooks';

export const ProgressBar = () => {
  const isLoading = useAppSelector((state) => state.videConfig.isLoading);
  const resultUrl = useAppSelector((state) => state.videConfig.resultUrl);

  const steps = [
    { label: 'Uploading', completed: true, number: 1 },
    { label: 'Generating a video', completed: isLoading || resultUrl, number: 2 },
    { label: 'Done', completed: !isLoading && resultUrl, number: 3 },
  ];

  return (
    <div className='relative h-14 px-2'>
      <div className='absolute top-3 h-1 w-full rounded-full bg-blue-200' />
      <div className='absolute z-1 flex w-full items-center justify-between'>
        {steps.map((step) => (
          <div key={step.number} className='flex flex-col items-center'>
            <div
              className={cn(
                'flex-center size-8 rounded-full',
                step.completed ? 'bg-blue-500' : 'bg-blue-200',
                step.completed ? 'text-white' : 'text-black'
              )}
            >
              {step.number}
            </div>
            <p className='absolute top-10 text-sm text-nowrap'>{step.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
