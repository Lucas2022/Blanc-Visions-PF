import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './globals';

interface Props {
  children: React.ReactNode;
}

export const theme = {
  fonts: {
    poppins: "'Poppins', sans-serif",
  },
  colors: {
    primary: '#ffa801',
    secondary: '#FFF4E6',
    black: '#000000',
    white: '#FFFFFF',
    hoverPrimary: '#d88c00'
  },
};

export interface PropsTheme {
  theme: {
    fonts: {
      poppins: string;
    };
    colors: {
      background: string;
      black: string;
      white: string;
      primary: string;
      hoverPrimary: string;
    };
  };
}

const Theme = ({ children }: Props) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;
