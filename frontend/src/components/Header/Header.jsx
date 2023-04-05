import React from 'react';
import { Navigation } from 'components/Header/Navigation/Navigation';

import { HeaderContainer } from './Header.styled';
import { Logo } from './Elements/logo/Logo';

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Navigation />
    </HeaderContainer>
  );
};
