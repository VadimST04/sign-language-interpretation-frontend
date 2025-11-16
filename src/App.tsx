import { FileUploader } from '@/components/FileUploader';
import { LanguageSelector } from '@/components/LanguageSelector';
import { ProgressBar } from '@/components/ProgressBar';
import { Button } from '@/components/ui/button';
import { VideoPlayer } from '@/components/VideoPlayer';

function App() {
  return (
    <div className='flex-center h-dvh bg-blue-100'>
      <div className='flex w-full max-w-7xl flex-row gap-5 rounded-2xl bg-white p-5 shadow-md md:flex-col'>
        <div className='text-2xl font-semibold'>AI Video Sign Translator</div>
        <div className='flex gap-5'>
          <div className='flex flex-1 flex-col gap-5'>
            <FileUploader onFileChange={(file) => console.log(file.name)} />
            <div className='flex flex-col gap-1'>
              <label>Language</label>
              <LanguageSelector />
            </div>
          </div>
          <div className='flex flex-1 flex-col gap-5'>
            <ProgressBar />
            <VideoPlayer />
            <Button className='w-48'>Start Processing</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
