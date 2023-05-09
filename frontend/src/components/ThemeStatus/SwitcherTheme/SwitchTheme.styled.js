import styled from 'styled-components';

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
  height: auto;

  background-color: transparent;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    left: 135px;
  }
`;

export { BtnChangeTheme, SwitcherWrapper };
