import type { SUBTITLE_FONTS } from '@/redux/constants';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type Language = {
  label: string;
  value: string;
};

export type SubtitleFont = (typeof SUBTITLE_FONTS)[number];

export interface VideoConfigState {
  file: File | null;
  language: Language;
  subtitlesFont: SubtitleFont;
  subtitlesFontSize: string;
  subtitlesColor: string;
  resultUrl: string | null;
  isLoading: boolean;
}

const initialState: VideoConfigState = {
  file: null,
  language: { label: 'Ukrainian', value: 'uk' },
  subtitlesFont: 'Arial',
  subtitlesFontSize: '20',
  subtitlesColor: '#000000',
  resultUrl: null,
  isLoading: false,
};

export const videoConfigSlice = createSlice({
  name: 'videoConfig',
  initialState,
  reducers: {
    setFile: (state, action: PayloadAction<File>) => {
      state.file = action.payload;
    },
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },
    setSubtitlesFont: (state, action: PayloadAction<SubtitleFont>) => {
      state.subtitlesFont = action.payload;
    },
    setSubtitlesFontSize: (state, action: PayloadAction<string>) => {
      state.subtitlesFontSize = action.payload;
    },
    setSubtitlesColor: (state, action: PayloadAction<string>) => {
      state.subtitlesColor = action.payload;
    },
    setResultUrl: (state, action: PayloadAction<string | null>) => {
      state.resultUrl = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  setFile,
  setLanguage,
  setSubtitlesFont,
  setSubtitlesFontSize,
  setSubtitlesColor,
  setResultUrl,
  setLoading,
} = videoConfigSlice.actions;

export default videoConfigSlice.reducer;
