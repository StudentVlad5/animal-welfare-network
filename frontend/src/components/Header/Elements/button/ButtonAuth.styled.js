import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const AuthLink = styled(NavLink)`
  padding: 8px 28px;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 35px;
  border-radius: 40px;
  text-decoration: none;
  color: ${props =>
    props.$active
      ? `${props => props.theme.white}`
      : `${props => props.theme.blackText}`};
  background-color: ${props =>
    props.$active
      ? `${props => props.theme.orangeLight}`
      : `${props => props.theme.white}`};
  border: 2px solid ${props => props.theme.orangeLight};

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;
  transition: all 0.25s ease-in;

  :hover,
  :focus {
    background-color: ${props => props.theme.orangeLight};
    color: ${props => props.theme.white};
  }

  &.active {
    background-color: ${props => props.theme.orangeLight};
    color: ${props => props.theme.white};
  }

  @media screen and (min-width: 768px) and (max-width: 1280px) {
    padding: 8.5px 28px;
    height: 44px;
    font-size: 20px;
    line-height: 27px;
  }
  @media screen and (min-width: 1280px) {
    padding: 10px 28px;
    height: 48px;
    font-size: 20px;
    line-height: 27px;
  }
`;

export { AuthLink };
