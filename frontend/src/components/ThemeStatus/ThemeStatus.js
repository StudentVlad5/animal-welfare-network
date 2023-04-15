import { App } from 'components/App/App';
import { GlobalStyle } from 'components/baseStyles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'components/baseStyles/Variables.styled';
import { useState } from 'react';

export const ThemeStatus = () => {
  const [theme, setTheme] = useState('light');

  const switchTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <App />
      <button type="button" onClick={switchTheme}>
        CHANGE THEMA
      </button>
    </ThemeProvider>
  );
};
