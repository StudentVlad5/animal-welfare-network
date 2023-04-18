import { Navigation } from 'components/Header/Navigation/Navigation';
import {
  HeaderContainer,
  BtnChangeTheme,
  ImgChangeTheme,
} from './Header.styled';
import { Logo } from './Elements/logo/Logo';
import changeThemeImg from 'images/public_img/toogle_change_theme.webp';

export const Header = ({ theme, setTheme }) => {
  const switchTheme = () => {
    theme === 'light'
      ? localStorage.setItem('theme', 'dark')
      : localStorage.setItem('theme', 'light');
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    <HeaderContainer>
      <Logo />
      <BtnChangeTheme type="button" onClick={switchTheme}>
        <ImgChangeTheme alt="change theme" src={changeThemeImg} />
      </BtnChangeTheme>
      <Navigation />
    </HeaderContainer>
  );
};
