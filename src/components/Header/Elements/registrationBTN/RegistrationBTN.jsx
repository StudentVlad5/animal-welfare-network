import React from 'react';
import { RegistrationButton } from './RegistrationBTN.styled';

export const RegistrationBTN = ({ toggleMenu }) => {
  return (
    <RegistrationButton to="/register" onClick={toggleMenu}>
      Registration
    </RegistrationButton>
  );
};
