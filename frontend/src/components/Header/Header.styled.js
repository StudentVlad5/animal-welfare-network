import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px 0px 20px;
  margin: 0 auto;
  width: 100%;
  position: relative;

  @media screen and (min-width: 768px) {
    padding: 24px 32px 0px 32px;
  }

  @media screen and (min-width: 1280px) {
    padding: 16px 20px 0px 20px;
    max-width: 1280px;
  }
`;
const BtnChangeTheme = styled.button`
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
    left: 32px;
    top: 90px;
  }
  &:hover {
    transform: scale(1.1);
  }
`;
const ImgChangeTheme = styled.img`
  width: 30px;
  height: 30px;
`;
export { HeaderContainer, BtnChangeTheme, ImgChangeTheme };
