import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryColor: string;
      secondaryColor: string;
      white: string;
      mediumGray: string;
      blackTransparent: string;
    };
    font: {
      family: {
        default: string;
        secondary: string;
      };
      sizes: {
        xsmal: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
        huge: string;
        xhuge: string;
      };
    };
    media: {
      lteMedium: string;
    };
    spacings: {
      xsmal: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
      huge: string;
      xhuge: string;
    };
  }
}
