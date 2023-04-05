import styled from 'styled-components';

import { baseColor } from 'components/baseStyles/Variables.styled';
import { ReactComponent as icon } from 'images/svg/icon_plus.svg';

export const ButtonStyled = styled.button`
  position: absolute;
  top: 100px;
  right: 0px;
  z-index: 44;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 80px;
  height: 80px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);

  background: ${baseColor.colors.orangeLight};
  border-radius: 50%;

  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.375;
  text-align: center;
  text-decoration: none;
  text-indent: 0;

  border: medium none;
  border-spacing: 0;
  margin: 0;
  padding: 16px 0px 16px 0px;

  cursor: pointer;

  color: ${baseColor.colors.white};
  transition: all 500ms ease;

  stroke: ${baseColor.colors.white};
  fill: ${baseColor.colors.white};
  transition: all 0.25s ease-in;
  &:hover {
    transition: all 500ms ease;

    color: ${baseColor.colors.orangeLight};
    background: ${baseColor.colors.mainBg};
    border: 2px solid ${baseColor.colors.orangeLight};
    fill: ${baseColor.colors.orangeLight};
    stroke: ${baseColor.colors.orangeLight};
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    position: static;

    width: 130px;
    height: 44px;

    flex-direction: row-reverse;

    background: transparent;
    border-radius: 0;
    box-shadow: none;

    color: ${baseColor.colors.inpText};
    transition: all 0.25s ease-in;
    &:hover {
      color: ${baseColor.colors.inpText};
      background: transparent;
      border: none;
      fill: ${baseColor.colors.orangeLight};
      stroke: ${baseColor.colors.orangeLight};
      & div {
        background: ${baseColor.colors.white};
        outline: 2px solid ${baseColor.colors.orangeLight};
      }
    }

    & div {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 44px;
      height: 44px;
      margin-left: 12px;
      border-radius: 50%;

      background-color: ${baseColor.colors.orangeLight};
      transition: all 0.25s ease-in;
      &:hover {
        fill: ${baseColor.colors.orangeLight};
        stroke: ${baseColor.colors.orangeLight};
        background: ${baseColor.colors.white};
        outline: 2px solid ${baseColor.colors.orangeLight};
      }
    }
  }
`;

export const PlusIcon = styled(icon)`
  width: 32px;
  height: 32px;
  display: block;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
