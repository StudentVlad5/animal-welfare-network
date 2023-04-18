import { App } from 'components/App/App';
import { GlobalStyle } from 'components/baseStyles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'components/baseStyles/Variables.styled';
import { useState } from 'react';
import ScrollToTop from 'react-scroll-to-top';

export const ThemeStatus = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <App theme={theme} setTheme={setTheme} />
      <ScrollToTop
        smooth
        top="400"
        style={{
          width: '40px',
          height: '40px',
          backgroundColor: `${lightTheme.orangeLight}`,
          color: `${lightTheme.white}`,
          fontSize: '16px',
        }}
        component={<p>UP</p>}
      />
    </ThemeProvider>
  );
};
