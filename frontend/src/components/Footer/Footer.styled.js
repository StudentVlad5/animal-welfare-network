import styled from 'styled-components';
import { baseColor } from 'components/baseStyles/Variables.styled';

const FooterSection = styled.footer`
  width: 100vw;
  backdrop-filter: blur(10px);
`;

const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
  margin: 0 auto;
  padding: 16px 20px;

  @media screen and (min-width: 768px) {
    padding: 24px 32px;
  }

  @media screen and (min-width: 1280px) {
    padding: 16px 20px;
    max-width: 1280px;
  }
`;

const Copyright = styled.p`
  margin-bottom: 6px;
  font-family: 'Manrope';
  font-weight: 700;
  font-size: 12px;
  line-height: 1.375;
  color: ${baseColor.colors.blackText};

  @media screen and (min-width: 320px) {
    margin-bottom: 0;
    margin-right: 4px;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

const Team = styled.div`
  display: flex;
  align-items: center;
`;

const Description = styled.p`
  margin-right: 5px;
  font-family: 'Manrope';
  font-weight: 700;
  font-size: 12px;
  line-height: 1.375;
  color: ${baseColor.colors.blackText};

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

const TeamModalBtn = styled.button`
  padding: 0;
  text-decoration: underline;
  border: none;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover,
  &:focus > svg {
    transform: scale(1.2);
    color: ${baseColor.colors.orange};
  }
`;

export {
  FooterSection,
  FooterContainer,
  Copyright,
  Team,
  Description,
  TeamModalBtn,
};
