import { Button } from '@/components/ui/button';
import { BsCloudUpload } from 'react-icons/bs';
export const FileUploader = () => {
  return (
    <div className='flex-center grow w-full flex-col gap-2 rounded-xl border border-gray-200'>
      <BsCloudUpload className='text-5xl text-gray-400' />
      <div className='text-center'>
        <p>Drag & drop to upload</p>
        <p>or</p>
      </div>
      <Button>Choose file</Button>
    </div>
  );
};
