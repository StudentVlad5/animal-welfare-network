import styled from 'styled-components';
import { ReactComponent as LogoutIcon } from '../../../images/svg/logout/logout.svg';

export const LogoutBtn = styled.button`
  display: flex;
  align-items: center;
  background: ${props => props.theme.white};
  border: none;
  cursor: pointer;
  margin-left: auto;
  padding-right: 12px;
  transform: all 150ms linear;
  transition: all 0.25s ease-in;
  :hover svg {
    stroke: ${props => props.theme.orange};
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: 24px;
    left: 32px;
  }

  @media screen and (min-width: 1280px) {
    position: static;
    margin-left: 16px;
    padding-right: 0px;
  }
`;

export const LogoutIconStyled = styled(LogoutIcon)`
  stroke: ${props => props.theme.orangeLight};
  transition: all 150ms linear;

  &:hover,
  :focus {
    fill: ${props => props.theme.orange};
  }
`;

export const LogoutBtnText = styled.span`
  font-family: Manrope, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.37;
  letter-spacing: 0.04em;
  color: ${props => props.theme.logout};
  margin-left: 8px;
  transition: all 150ms linear;

  &:hover,
  :focus {
    color: ${props => props.theme.orange};
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: rgba(17, 17, 17, 0.6);
  z-index: 100;
  width: 100vw;
  height: 100vh;
`;
