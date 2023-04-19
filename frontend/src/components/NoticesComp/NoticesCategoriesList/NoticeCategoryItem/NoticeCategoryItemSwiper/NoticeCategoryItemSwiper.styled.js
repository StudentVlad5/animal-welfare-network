import styled from 'styled-components';

export const BackDrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Manrope';
  font-style: normal;
  width: 100%;
  height: 100%;
`;

export const NoticesContainerItem = styled.div`
  position: relative;
  display: block;
  width: 280px;
  padding: 17px 20px 43px 20px;
  background-color: ${props => props.theme.white};
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 32px 20px 32px 20px;
  }
`;
export const ContainerPositionForCloseModal = styled.div`
  display: flex;
  justify-content: end;
`;
export const ContainerCloseModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  background: #fdf7f2;
  backdrop-filter: blur(2px);
  margin-bottom: 6px;
  z-index: 99;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 12px;
    right: 20px;
  }
`;
