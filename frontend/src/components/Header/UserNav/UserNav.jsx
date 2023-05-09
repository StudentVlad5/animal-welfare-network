import React from 'react';
import { useSelector } from 'react-redux';
import { getPermission, selectUser, getUserAvatar } from 'redux/auth/selectors';
import {
  MobileAccountButton,
  AccountButton,
  IconUser,
  AvatarUser,
} from './UserNav.styled';
// import { useTranslation } from 'react-i18next';

export const MobileUserNav = ({ toggleMenu }) => {
  const user = useSelector(selectUser);
  const avatar = useSelector(getUserAvatar);
  const permission = useSelector(getPermission);
  // const { t } = useTranslation();

  return permission === 'admin' ? (
    <MobileAccountButton to="/admin" onClick={toggleMenu}>
      {avatar ? <AvatarUser src={avatar} alt="User" /> : <IconUser />}
      {user}
    </MobileAccountButton>
  ) : (
    <MobileAccountButton to="/user" onClick={toggleMenu}>
      {avatar ? <AvatarUser src={avatar} alt="User" /> : <IconUser />}
      {user}
    </MobileAccountButton>
  );
};

export const UserNav = () => {
  const user = useSelector(selectUser);
  const avatar = useSelector(getUserAvatar);
  const permission = useSelector(getPermission);

  return permission === 'admin' ? (
    <AccountButton to="/admin">
      {avatar ? <AvatarUser src={avatar} alt="User" /> : <IconUser />}
      {user}
    </AccountButton>
  ) : (
    <AccountButton to="/user">
      {avatar ? <AvatarUser src={avatar} alt="User" /> : <IconUser />}
      {user}
    </AccountButton>
  );
};
