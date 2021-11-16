import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colorPrimary: string;
    colorPrimaryDark: string;
    colorSub: string;
    colorBg: string;
    colorWhite: string;
    colorGray1: string;
    colorGray2: string;
    colorGray3: string;
    colorGray4: string;
    colorBrown: string;
    colorSuccess: string;
    colorError: string;

    fontBasic: string;
    fontCoding: string;
    fontCodingBold: string;
  }
}
