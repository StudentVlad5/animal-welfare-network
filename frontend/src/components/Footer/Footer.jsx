import React from 'react';
import { SiDatadog } from 'react-icons/si';
import {
  FooterSection,
  FooterContainer,
  Copyright,
  Developers,
  Description,
  TeamModalBtn,
} from './Footer.styled';

export const Footer = () => {
  return (
    <FooterSection id="footer">
      <FooterContainer>
        <Copyright>&#169; 2023 | All Rights Reserved |</Copyright>
        <Developers>
          <Description>Developed by</Description>
          <TeamModalBtn>
            <SiDatadog size={16} />
          </TeamModalBtn>
        </Developers>
      </FooterContainer>
    </FooterSection>
  );
};
