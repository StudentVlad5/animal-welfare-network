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
  left: 110px;

  width: 40px;
  height: auto;

  background-color: transparent;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    left: 130px;
  }
`;

export { BtnChangeTheme, SwitcherWrapper };
