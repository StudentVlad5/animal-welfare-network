import styled from 'styled-components';

export const ImgChangeTheme = styled.img`
  width: 30px;
  height: 30px;
`;
export const BtnChangeTheme = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  border-radius: 50%;
  border: none;
  position: absolute;
  background-color: ${props => props.theme.mainBg};
  cursor: pointer;
  transition: 0.3s ease;

  @media screen and (max-width: 767.9px) {
    top: 60px;
    left: 22px;
    /* min-height: calc(100vh - 120px); */
  }

  @media screen and (min-width: 768px) and (max-width: 1279.9px) {
    left: 32px;
    top: 90px;
  }

  @media screen and (min-width: 1280px) {
    left: 50%;
    top: 90px;
  }
  &:hover {
    transform: scale(1.1);
  }
`;
