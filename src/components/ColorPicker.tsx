import { Label } from '@/components/ui/label';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setSubtitlesColor } from '@/redux/slices/videoConfigSlice';

export const ColorPicker = () => {
  const subtitlesColor = useAppSelector((state) => state.videConfig.subtitlesColor);
  const dispatch = useAppDispatch();

  return (
    <div className='flex items-center gap-2'>
      <input
        id='subtitles-color'
        type='color'
        value={subtitlesColor}
        onChange={(e) => dispatch(setSubtitlesColor(e.target.value))}
        className='size-9 cursor-pointer appearance-none rounded-full border-2'
      />
      <Label
        htmlFor='subtitles-color'
        className='cursor-pointer bg-blue-200 p-2'
        style={{ color: subtitlesColor }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Label>
    </div>
  );
};
