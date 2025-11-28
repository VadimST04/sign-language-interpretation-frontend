import { Label } from '@/components/ui/label';
import { useDebounce } from '@/hooks/useDebounce';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setSubtitlesColor } from '@/redux/slices/videoConfigSlice';
import { useEffect, useState } from 'react';

export const ColorPicker = () => {
  const subtitlesColor = useAppSelector((state) => state.videConfig.subtitlesColor);
  const dispatch = useAppDispatch();

  const [color, setColor] = useState(subtitlesColor);
  const deboucedColor = useDebounce(color, 300);

  useEffect(() => {
    if (deboucedColor !== subtitlesColor) {
      dispatch(setSubtitlesColor(deboucedColor));
    }
  }, [deboucedColor, subtitlesColor, dispatch]);

  return (
    <div className='flex items-center gap-2'>
      <input
        id='subtitles-color'
        type='color'
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className='size-9 cursor-pointer appearance-none rounded-full border-2'
      />
      <Label htmlFor='subtitles-color' className='cursor-pointer bg-blue-200 p-2' style={{ color }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Label>
    </div>
  );
};
