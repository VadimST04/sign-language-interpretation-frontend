import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { LANGUAGE_OPTIONS } from '@/redux/constants';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setLanguage } from '@/redux/slices/videoConfigSlice';

export const LanguageSelector = () => {
  const language = useAppSelector((state) => state.videConfig.language);
  const dispatch = useAppDispatch();

  return (
    <Select
      defaultValue={language.value}
      onValueChange={(value) =>
        dispatch(
          setLanguage({ label: LANGUAGE_OPTIONS.find((opt) => opt.value === value)!.label, value })
        )
      }
    >
      <SelectTrigger id='language' className='w-[200px]'>
        <SelectValue placeholder={language.label} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {LANGUAGE_OPTIONS.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
