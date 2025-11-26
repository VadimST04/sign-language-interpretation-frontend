import axios from 'axios';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setFile, setLoading, setResultUrl } from '@/redux/slices/videoConfigSlice';

import { FileUploader } from '@/components/FileUploader';
import { LanguageSelector } from '@/components/LanguageSelector';
import { ProgressBar } from '@/components/ProgressBar';
import { SubtitlesFontSelector } from '@/components/SubtitlesFontSelector';
import { Button } from '@/components/ui/button';
import { VideoPlayer } from '@/components/VideoPlayer';
import { ColorPicker } from '@/components/ColorPicker';
import { Label } from '@/components/ui/label';
import { FontSizeSelector } from '@/components/FontSizeSelector';

function App() {
  const uploadedFile = useAppSelector((state) => state.videConfig.file);
  const language = useAppSelector((state) => state.videConfig.language);
  const subtitlesFont = useAppSelector((state) => state.videConfig.subtitlesFont);
  const subtitlesFontSize = useAppSelector((state) => state.videConfig.subtitlesFontSize);
  const subtitlesColor = useAppSelector((state) => state.videConfig.subtitlesColor);
  const dispatch = useAppDispatch();

  const startProcessing = async () => {
    if (!uploadedFile) return;

    const form = new FormData();
    form.append('video', uploadedFile);
    form.append('lang', language.value);
    form.append('font', subtitlesFont);
    form.append('fontSize', subtitlesFontSize);
    form.append('color', subtitlesColor);

    dispatch(setResultUrl(null));
    dispatch(setLoading(true));

    try {
      const { data: videoBlob } = await axios.post('http://localhost:8000/subtitles', form, {
        responseType: 'blob',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const url = URL.createObjectURL(videoBlob);

      dispatch(setResultUrl(url));
      dispatch(setLoading(false));
    } catch (err) {
      console.error('Video processing error:', err);
      dispatch(setLoading(false));
    }
  };

  return (
    <div className='flex-center h-dvh bg-blue-100'>
      <div className='flex w-full max-w-7xl flex-row gap-5 rounded-2xl bg-white p-5 shadow-md md:flex-col'>
        <div className='text-2xl font-semibold'>AI Video Sign Translator</div>
        <div className='flex gap-5'>
          <div className='flex flex-1 flex-col gap-5'>
            <FileUploader onFileChange={(file) => dispatch(setFile(file))} />
            <div className='flex flex-col gap-3'>
              <div className='flex gap-3'>
                <div className='space-y-1'>
                  <Label htmlFor='language'>Language</Label>
                  <LanguageSelector />
                </div>

                <div className='space-y-1'>
                  <Label htmlFor='subtitles-font'>Subtitles Font</Label>
                  <SubtitlesFontSelector />
                </div>

                <div className='space-y-1'>
                  <Label>Subtitles Size</Label>
                  <FontSizeSelector />
                </div>
              </div>

              <div className='space-y-1'>
                <Label>Subtitles Color</Label>
                <ColorPicker />
              </div>
            </div>
          </div>
          <div className='flex flex-1 flex-col gap-5'>
            <ProgressBar />
            <VideoPlayer />
            <Button onClick={startProcessing} disabled={!uploadedFile} className='w-48'>
              Start Processing
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
