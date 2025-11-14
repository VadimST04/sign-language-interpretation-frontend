import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';

export const LanguageSelector = () => {
  const [language, setLanguage] = useState<string>('English');
  return (
    <Select onValueChange={(value) => setLanguage(value)}>
      <SelectTrigger className='w-full'>
        <SelectValue placeholder={language} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value='english'>English</SelectItem>
          <SelectItem value='ukrainian'>Ukrainian</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
