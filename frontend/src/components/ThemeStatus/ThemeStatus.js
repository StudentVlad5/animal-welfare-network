import { App } from 'components/App/App';
import { GlobalStyle } from 'components/baseStyles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'components/baseStyles/Variables.styled';
import { useState } from 'react';
import ScrollToTop from 'react-scroll-to-top';
import { ImgChangeTheme, BtnChangeTheme } from './ThemeStatus.styled';
import changeThemeImg from 'images/public_img/toogle_change_theme.webp';

export const ThemeStatus = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const switchTheme = () => {
    theme === 'light'
      ? localStorage.setItem('theme', 'dark')
      : localStorage.setItem('theme', 'light');
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <App />
      <BtnChangeTheme type="button" onClick={switchTheme}>
        <ImgChangeTheme alt="change theme" src={changeThemeImg} />
      </BtnChangeTheme>
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
