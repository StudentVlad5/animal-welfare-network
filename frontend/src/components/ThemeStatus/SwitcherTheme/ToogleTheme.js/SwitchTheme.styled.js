import styled from 'styled-components';
import sun from 'images/theme/sun.png';
import moon from 'images/theme/moon.png';

const BtnChangeTheme = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const SwitcherWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: 135px;

  width: 40px;
  height: 40px;
  padding: 4px;

  background-color: transparent;
  cursor: pointer;
  /* 
  &::before,
  &::after {
    content: '';
    display: block;
    height: 25px;
    width: 25px;
    position: absolute;
  }

  &::before {
    background-image: url(${sun});
    background-size: 25px 25px;
    background-repeat: no-repeat;
    left: 8px;
  }

  &::after {
    background-image: url(${moon});
    background-size: 25px 25px;
    background-repeat: no-repeat;
    right: 8px;
  } */
`;

export { BtnChangeTheme, SwitcherWrapper };
