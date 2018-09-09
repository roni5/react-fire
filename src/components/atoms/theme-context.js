import React from 'react';
export const themes = {
  light: {
    foreground: '#000000',
    background: '#66cabf',
  },
  dark: {
    foreground: '#C71585',
    background: '#EE82EE',
  },
};

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});