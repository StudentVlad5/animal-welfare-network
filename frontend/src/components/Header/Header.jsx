import { Navigation } from 'components/Header/Navigation/Navigation';
import { HeaderContainer } from './Header.styled';
import { Logo } from './Elements/logo/Logo';
import { SwitchTheme } from 'components/ThemeStatus/SwitcherTheme/SwitchTheme';
import Language from 'components/Language/Language';

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <div
        style={{
          position: 'relative',
          display: 'flex',
          width: '100px',
          justifyContent: 'start',
          alignItems: 'center',
        }}
      >
        <SwitchTheme />
        <Language />
      </div>
      <Navigation />
    </HeaderContainer>
  );
};
