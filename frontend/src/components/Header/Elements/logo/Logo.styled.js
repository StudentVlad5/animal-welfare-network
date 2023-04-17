import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Text = styled(NavLink)`
  font-family: 'Poppins';
  font-weight: 700;
  font-style: normal;
  font-size: 28px;
  line-height: 42px;
  letter-spacing: 0.07em;
  color: ${props => props.theme.blackText};
  text-decoration: none;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 48px;
  }
`;

const AccentLetter = styled.span`
  color: ${props => props.theme.orangeLight};
`;

export { Text, AccentLetter };
