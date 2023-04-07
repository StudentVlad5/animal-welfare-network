import styled from 'styled-components';
import { baseColor } from 'components/baseStyles/Variables.styled';

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
  z-index: 60;

  max-width: calc(100vw - 40px);
  padding: 16px 10px;

  background-color: ${baseColor.colors.white};
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.11) 7px 4px 14px;

  transform: scale(1);

  @media screen and (min-width: 768px) {
    max-width: 600px;
    padding: 32px 20px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }

  #popup-root.is-hidden > & {
    transform: scale(0);
  }
`;

const CloseIconBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;

  border-radius: 50%;
  border-color: transparent;
  background-color: ${baseColor.colors.mainBg};
  backdrop-filter: blur(2px);
  z-index: 50;

  @media screen and (min-width: 768px) {
    top: 32px;
    right: 20px;
    width: 34px;
    height: 34px;
  }
`;

export { BackDrop, Modal, CloseIconBtn };
