import styled from 'styled-components';
import { lightTheme } from 'components/baseStyles/Variables.styled';
import { ReactComponent as Delete } from '../../../../../images/svg/petsitem/delete.svg';

export const PetsItemWrapper = styled.li`
  position: relative;
  background-color: ${props => props.theme.white};
  border-radius: 20px;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  padding-top: 16px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 40px;
  width: 100%;

  @media screen and (min-width: 768px) {
    display: flex;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  @media screen and (min-width: 1280px) {
    padding-right: 28px;
  }
`;
export const PetsItemImg = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 161px;
    height: 161px;
    margin-bottom: 0px;
    margin-left: 0px;
    margin-right: 32px;
  }
`;

export const PetsItemInfoBlock = styled.div`
  width: 100%;

  @media screen and (min-width: 1280px) {
    width: 580px;
  }
`;

export const PetsItemDeleteBtn = styled.button`
  position: absolute;
  top: 270px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  background: ${props => props.theme.white};
  border-color: transparent;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: all 150ms linear;

  :hover svg {
    fill: ${props => props.theme.orange};
  }

  @media screen and (min-width: 768px) {
    top: 16px;
    right: 20px;
    width: 44px;
    height: 44px;
    background: ${props => props.theme.mainBg};
  }
`;

export const DeleteIcon = styled(Delete)`
  width: 20px;
  height: 20px;
  fill: ${props => props.theme.logout};
  transition: all 150ms linear;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
  transition: all 0.25s ease-in;
  &:hover,
  :focus {
    fill: ${props => props.theme.orange};
  }
`;

export const PetsItemDesc = styled.p`
  color: ${props => props.theme.black};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.04em;

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.37;
  }

  @media screen and (min-width: 1280px) {
    font-size: 18px;

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

export const PetsItemSpan = styled.span`
  color: ${props => props.theme.black};
  font-weight: 500;
`;
