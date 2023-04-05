import React from 'react';

import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { MobileHeader, IconClose } from './MobileMenu.styled';
import { MobileAuthNav } from 'components/Header/AuthNav/AuthNav';
import { MobileUserNav } from 'components/Header/UserNav/UserNav';
import { MobileNav } from 'components/Header/Nav/Nav';
import { Logo } from 'components/Header/Elements/logo/Logo';

export const MobileMenu = ({ toggleMenu }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <MobileHeader>
        <Logo to="/" onClick={toggleMenu} />
        <IconClose onClick={toggleMenu} />
      </MobileHeader>

      {isLoggedIn ? (
        <MobileUserNav toggleMenu={toggleMenu} />
      ) : (
        <MobileAuthNav toggleMenu={toggleMenu} />
      )}
      <MobileNav toggleMenu={toggleMenu} />
    </>
  );
};
