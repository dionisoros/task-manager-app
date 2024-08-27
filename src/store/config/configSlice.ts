import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ConfigState, LanguageTypes, ThemeType } from './types.ts';

const initialState: ConfigState = {
  language: LanguageTypes.enUS,
  theme: ThemeType.Light,
};

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<LanguageTypes>) => {
      return { ...state, language: action.payload };
    },
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      return { ...state, theme: action.payload };
    },
  },
});

export const { setLanguage, setTheme } = configSlice.actions;
export default configSlice.reducer;
