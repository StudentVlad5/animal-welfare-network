import React from 'react';
import { MobileAccountButton, AccountButton, IconUser } from './UserNav.styled';

export const MobileUserNav = ({ toggleMenu }) => {
  return (
    <MobileAccountButton to="/user" onClick={toggleMenu}>
      <IconUser />
      Account
    </MobileAccountButton>
  );
};
export const UserNav = () => {
  return (
    <AccountButton to="/user">
      <IconUser />
      Account
    </AccountButton>
  );
};
