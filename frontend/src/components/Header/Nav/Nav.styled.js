import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MobileNavList = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-top: 88px;
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

const NavList = styled(MobileNavList)`
  display: none;

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0px;
    width: 100%;
  }
`;

const NavItem = styled(NavLink)`
  cursor: pointer;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  letter-spacing: 0.04em;
  text-decoration: none;

  &:not(:first-child) {
    margin-top: 40px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-weight: 500;
    font-size: 48px;
    line-height: 66px;

    &:not(:first-child) {
      margin-top: 60px;
    }
  }

  @media screen and (min-width: 1280px) {
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;

    &:not(:first-child) {
      margin-top: 0px;
      margin-left: 80px;
    }
  }

  color: ${props => props.theme.textUserNav};
  transition: all 0.25s ease-in;
  :focus,
  :hover {
    color: ${props => props.theme.orangeLight};
  }
  &.active {
    color: ${props => props.theme.orangeLight};
    text-decoration: underline;
  }
`;

export { MobileNavList, NavList, NavItem };
