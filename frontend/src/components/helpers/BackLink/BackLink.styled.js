import { Link } from 'react-router-dom';
import styled from 'styled-components';

const GoBack = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;

  font-family: inherit;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.33;
  color: ${props => props.theme.blackText};
  text-decoration: none;
  text-transform: uppercase;

  background-color: transparent;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.375;
  }

  &:hover,
  &:focus {
    color: ${props => props.theme.orangeLight};
  }
`;

export { GoBack };
