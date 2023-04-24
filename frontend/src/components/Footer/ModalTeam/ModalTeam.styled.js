import styled from 'styled-components';

const BackDrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Modal = styled.div`
  position: relative;
  display: block;

  max-width: calc(100vw - 40px);
  padding: 10px;

  background-color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.colorBorder};
  border-radius: 20px;
  box-shadow: ${props => props.theme.shadowColor} 7px 4px 14px;

  @media screen and (min-width: 768px) {
    max-width: 600px;
    padding: 20px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding: 40px;
  }
`;

const CloseIconBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;

  color: ${props => props.theme.black};
  background-color: ${props => props.theme.white};
  border-color: ${props => props.theme.black};
  border-radius: 50%;
  backdrop-filter: blur(2px);
  z-index: 50;

  cursor: pointer;

  @media screen and (min-width: 768px) {
    top: 20px;
    right: 20px;
    width: 34px;
    height: 34px;
  }
`;

export { BackDrop, Modal, CloseIconBtn };
