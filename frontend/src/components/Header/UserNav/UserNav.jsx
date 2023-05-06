import React from 'react';
import { useSelector } from 'react-redux';
import { getPermission } from 'redux/auth/selectors';
import { MobileAccountButton, AccountButton, IconUser } from './UserNav.styled';
import { useTranslation } from 'react-i18next';

export const MobileUserNav = ({ toggleMenu }) => {
  const permission = useSelector(getPermission);
  const { t } = useTranslation();

  return permission === 'admin' ? (
    <MobileAccountButton to="/admin" onClick={toggleMenu}>
      <IconUser />
      {t('Account')}
    </MobileAccountButton>
  ) : (
    <MobileAccountButton to="/user" onClick={toggleMenu}>
      <IconUser />
      {t('Account')}
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
