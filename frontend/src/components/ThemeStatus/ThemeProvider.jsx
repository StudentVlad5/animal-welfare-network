import { createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { useState, useEffect } from 'react';
import { useTheme } from 'hooks/useTheme';
import { theme as Theme } from 'components/baseStyles/Variables.styled';

export const themes = {
  dark: 'dark',
  light: 'light',
};

export const ThemeContext = createContext({});

export const ThemeStatus = ({ children }) => {
  const { theme, setMode } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
    setMode(theme);
  }, [setMode, theme]);

  return (
    <ThemeContext.Provider value={{ theme, setMode }}>
      <ThemeProvider
        // theme={selectedTheme === 'light' ? Theme.light : Theme.dark}
        theme={Theme[selectedTheme]}
      >
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
