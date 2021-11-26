import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colorPrimary: string;
    colorPrimaryDark: string;
    colorPrimaryLight: string;
    colorSub: string;
    colorSubLight: string;
    colorBg: string;
    colorWhite: string;
    colorGray1: string;
    colorGray2: string;
    colorGray3: string;
    colorIndigo: string;
    colorBrown: string;
    colorSuccess: string;
    colorError: string;

    fontBasic: string;
    fontCoding: string;
    fontCodingBold: string;

    media: {
      xxlarge: string;
      xlarge: string;
      large: string;
      medium: string;
      small: string;
      xsmall: string;
      custom: (maxWidth: number) => string;
    };
  }
}
