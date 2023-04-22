import React from 'react';
import { useSelector } from 'react-redux';
import { getPermission } from 'redux/auth/selectors';
import { MobileAccountButton, AccountButton, IconUser } from './UserNav.styled';

export const MobileUserNav = ({ toggleMenu }) => {
  const permission = useSelector(getPermission);

  return permission === 'admin' ? (
    <MobileAccountButton to="/admin" onClick={toggleMenu}>
      <IconUser />
      Account
    </MobileAccountButton>
  ) : (
    <MobileAccountButton to="/user" onClick={toggleMenu}>
      <IconUser />
      Account
    </MobileAccountButton>
  );
};

export const UserNav = () => {
  const permission = useSelector(getPermission);

  return permission === 'admin' ? (
    <AccountButton to="/admin">
      <IconUser />
      Account
    </AccountButton>
  ) : (
    <AccountButton to="/user">
      <IconUser />
      Account
    </AccountButton>
  );
};
