import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setSubtitlesFont, type SubtitleFont } from '@/redux/slices/videoConfigSlice';
import { SUBTITLE_FONTS } from '@/redux/constants';

export function SubtitlesFontSelector() {
  const [open, setOpen] = React.useState(false);

  const subtitlesFont = useAppSelector((state) => state.videConfig.subtitlesFont);
  const dispatch = useAppDispatch();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger id='subtitles-font' asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='w-[200px] justify-between font-normal'
        >
          {subtitlesFont ? SUBTITLE_FONTS.find((font) => font === subtitlesFont) : 'Select font'}
          <ChevronsUpDown className='opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[200px] p-0'>
        <Command onValueChange={(e) => console.log(e)}>
          <CommandInput placeholder='Search font' className='h-9' />
          <CommandList>
            <CommandEmpty>No font found.</CommandEmpty>
            <CommandGroup>
              {SUBTITLE_FONTS.map((font) => (
                <CommandItem
                  key={font}
                  value={font}
                  onSelect={(currentValue) => {
                    dispatch(setSubtitlesFont(currentValue as SubtitleFont));
                    setOpen(false);
                  }}
                >
                  {font}
                  <Check
                    className={cn('ml-auto', subtitlesFont === font ? 'opacity-100' : 'opacity-0')}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
