import { useRef, useState, type ChangeEvent, type DragEvent } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { BsCloudUpload } from 'react-icons/bs';

interface FileUploaderProps {
  onFileChange: (file: File) => void;
}

export const FileUploader = ({ onFileChange }: FileUploaderProps) => {
  const [drag, setDrag] = useState(false);

  const fileInput = useRef<HTMLInputElement>(null);

  const onDragOverHandler = (e: DragEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDrag(true);
  };

  const onDragLeaveHandler = (e: DragEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDrag(false);
  };

  const onDropHandler = (e: DragEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDrag(false);

    if (!e.dataTransfer.files || e.dataTransfer.files.length === 0) return;
    onFileChange(e.dataTransfer.files[0]);
  };

  const onFilesLoadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    onFileChange(e.target.files[0]);
  };

  return (
    <form
      onDragOver={onDragOverHandler}
      onDragStart={onDragOverHandler}
      onDragLeave={onDragLeaveHandler}
      onDrop={onDropHandler}
      className={cn('flex-center w-full grow flex-col gap-2 rounded-xl border border-gray-200', {
        'border-2 border-dashed': drag,
      })}
    >
      <input
        data-testid='file-input'
        // accept={accept}
        ref={fileInput}
        type='file'
        hidden
        onChange={onFilesLoadHandler}
      />
      <BsCloudUpload className='text-5xl text-gray-400' />
      <div className='text-center'>
        <p>Drag & drop to upload</p>
        <p>or</p>
      </div>
      <Button
        onClick={(e) => {
          e.preventDefault();
          fileInput.current?.click();
        }}
      >
        Choose file
      </Button>
    </form>
  );
};
