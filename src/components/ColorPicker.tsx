import { Label } from '@/components/ui/laber';
import { useState } from 'react';

export const ColorPicker = () => {
  const [color, setColor] = useState('#000000');

  return (
    <div className='flex items-center gap-2'>
      <input
        id='subtitles-color'
        type='color'
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className='size-9 cursor-pointer appearance-none rounded-full'
      />
      <Label htmlFor='subtitles-color' className='cursor-pointer' style={{ color }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Label>
    </div>
  );
};
