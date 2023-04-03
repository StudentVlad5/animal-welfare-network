import { baseColor } from 'components/baseStyles/Variables.styled';
import styled from 'styled-components';
import { ReactComponent as Plus } from '../../../../images/svg/addPetBtn/plus.svg';

export const AddPetWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 1280px) {
    right: 10px;
  }
`;

export const AddPetBtn = styled.button`
  display: flex;
  align-items: center;
  background: ${baseColor.colors.orangeLight};
  border: none;
  border-radius: 40px;
  padding: 8px;
  cursor: pointer;
  transition: all 150ms linear;

  &:hover,
  :focus {
    background: ${baseColor.colors.orange};
    border-color: ${baseColor.colors.orange};
  }
`;

export const AddPetDesc = styled.p`
  color: ${baseColor.colors.blackText};
  font-size: 20px;
  color: ${baseColor.colors.blackText};
  font-weight: 500;
  line-height: 1.37;
  margin-right: 12px;
  transform: translateX(-100%);
  opacity: 0;
  transition: all 150ms linear;

  ${AddPetWrapper}:hover & {
    opacity: 1;
    transform: translateX(0);
  }

  @media (max-width: 767px) {
    font-size: 12px;
    color: ${baseColor.colors.white};
    margin: 0px;
  }
`;

export const PlusIcon = styled(Plus)`
  width: 24px;
  stroke: ${baseColor.colors.white};
`;
