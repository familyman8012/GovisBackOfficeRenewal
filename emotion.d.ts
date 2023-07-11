import '@emotion/react';

interface Colors {
  [key: string]: string;
}

interface FontSize {
  [key: string]: [string, string];
}

interface FontWeight {
  [key: string]: number;
}

interface Screens {
  [key: string]: string;
}

interface Spacing {
  [key: number]: string;
}

declare module '@emotion/react' {
  export interface Theme {
    colors: Colors;
    fontSize: FontSize;
    fontWeight: FontWeight;
    screens: Screens;
    spacing: Spacing;
  }
}
