import { baseColor } from 'components/baseStyles/Variables.styled';
import styled from 'styled-components';
import { ReactComponent as Close } from '../../../../images/svg/logout/close.svg';

export const ModalWrapper = styled.div`
  position: absolute;
  /* width: 90%; */
  background-color: ${baseColor.colors.white};
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 40px;
  padding-bottom: 40px;
  border-radius: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: 768px) {
    /* max-width: 60%; */
  }

  @media (min-width: 1280px) {
    /* max-width: 40%; */
  }
`;

export const CloseBtnWrapper = styled.div`
  position: relative;
`;

export const ModalCloseBtn = styled.button`
  position: absolute;
  right: 100px;
  top: -30px;
  right: -30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: ${baseColor.colors.mainBg};
  border-color: transparent;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  cursor: pointer;
  transform: all 150ms linear;
  transition: all 0.25s ease-in;
  :hover svg {
    fill: ${baseColor.colors.orange};
  }

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
    right: -30px;
  }
`;

export const CloseIcon = styled(Close)`
  width: 16px;
  height: 16px;
  fill: ${baseColor.colors.black};
  transform: all 150ms linear;
  transition: all 0.25s ease-in;
  &:hover,
  :focus {
    fill: ${baseColor.colors.orange};
  }

  @media screen and (min-width: 768px) {
  }
`;

export const ModalDescription = styled.p`
  color: ${baseColor.colors.blackText};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.37;
  text-align: center;
  margin-bottom: 28px;
  padding-left: 24px;
  padding-right: 24px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: -0.01em;
  }
`;
export const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ModalButton = styled.button`
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  letter-spacing: 0.04em;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.37;
  color: ${baseColor.colors.blackText};
  background: ${baseColor.colors.white};
  border: 2px solid;
  border-color: ${baseColor.colors.orangeLight};
  cursor: pointer;
  transform: all 150ms linear;
  transition: all 0.25s ease-in;
  &:hover,
  :focus {
    background: ${baseColor.colors.orangeLight};
    color: ${baseColor.colors.white};
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
