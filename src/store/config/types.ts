export enum LanguageTypes {
  enUS = 'en-US',
  enGB = 'es',
  frFR = 'fr-FR',
  frCA = 'fr-CA',
}

export enum ThemeType {
  Light = 'light',
  Dark = 'dark',
}

export interface ConfigState {
  language: LanguageTypes;
  theme: ThemeType;
}
