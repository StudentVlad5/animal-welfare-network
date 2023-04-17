import styled from 'styled-components';

import { ReactComponent as iconMenu } from 'images/svg/icon_menu.svg';

const Burger = styled(iconMenu)`
  margin-left: 20px;
  cursor: pointer;
  fill: ${props => props.theme.black};

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

const MobileMenuSection = styled.div`
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  transform: translateX(100%);
  transition: transform 250ms ease-in-out;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.mainBg};

  &.is-expanded {
    transform: translateX(0);
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export { Burger, MobileMenuSection };
