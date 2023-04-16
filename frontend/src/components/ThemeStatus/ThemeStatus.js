import { App } from 'components/App/App';
import { GlobalStyle } from 'components/baseStyles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'components/baseStyles/Variables.styled';
import { useState } from 'react';
import { ImgChangeTheme, BtnChangeTheme } from './ThemeStatus.styled';
import changeThemeImg from 'images/public_img/toogle_change_theme.webp';

export const ThemeStatus = () => {
  const [theme, setTheme] = useState('light');

  const switchTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <App />
      <BtnChangeTheme type="button" onClick={switchTheme}>
        <ImgChangeTheme alt="change theme" src={changeThemeImg} />
      </BtnChangeTheme>
    </ThemeProvider>
  );
};
