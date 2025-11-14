import { cn } from '@/lib/utils';

export const ProgressBar = () => {
  const steps = [
    { label: 'Uploading', completed: true, number: 1 },
    { label: 'Speech recognition', completed: true, number: 2 },
    { label: 'Semantic analysis', completed: false, number: 3 },
    { label: 'Done', completed: false, number: 4 },
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
