import { Input } from '@/components/ui/input';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setSubtitlesFontSize } from '@/redux/slices/videoConfigSlice';

export const FontSizeSelector = () => {
  const subtitlesFontSize = useAppSelector((state) => state.videConfig.subtitlesFontSize);
  const dispatch = useAppDispatch();

  return (
    <Input
      type='text'
      value={subtitlesFontSize ?? ''}
      placeholder='Enter subtitles size'
      onChange={(e) => {
        const raw = e.target.value;

        if (raw === '') {
          dispatch(setSubtitlesFontSize(''));
          return;
        }

        const isNumber = /^\d+$/.test(raw);
        if (!isNumber) return;

        const num = Number(raw);

        if (num >= 1 && num <= 100) {
          dispatch(setSubtitlesFontSize(raw));
        }
      }}
    />
  );
};
