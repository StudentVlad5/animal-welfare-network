import { Navigation } from 'components/Header/Navigation/Navigation';
import { HeaderContainer } from './Header.styled';
import { Logo } from './Elements/logo/Logo';
import { SwitchTheme } from 'components/ThemeStatus/SwitcherTheme/ToogleTheme.js/SwitchTheme';

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <SwitchTheme />
      <Navigation />
    </HeaderContainer>
  );
};
