import { Navigation } from 'components/Header/Navigation/Navigation';
import { HeaderContainer } from './Header.styled';
import { Logo } from './Elements/logo/Logo';
import { SwitchTheme } from 'components/ThemeStatus/SwitcherTheme/SwitchTheme';
import { Language } from 'components/Language/Language';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <HeaderContainer>
      <Logo />
      <SwitchTheme />
      <Navigation />
      <div>
        <h1>{t('hello_world')}</h1>
        <Language />
      </div>
    </HeaderContainer>
  );
};
