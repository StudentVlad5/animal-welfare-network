import React from 'react';
import { LoginButton } from './LoginBTN.styled';

export const LoginBTN = ({ toggleMenu }) => {
  return (
    <LoginButton to="/login" onClick={toggleMenu}>
      Login
    </LoginButton>
  );
};
