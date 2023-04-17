import styled from 'styled-components';
import { ReactComponent as Plus } from 'images/svg/addPetBtn/plus.svg';

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
  background: ${props => props.theme.orangeLight};
  border: none;
  border-radius: 40px;
  padding: 8px;
  cursor: pointer;
  transition: all 150ms linear;

  &:hover,
  :focus {
    background: ${props => props.theme.orange};
    border-color: ${props => props.theme.orange};
  }
`;

export const AddPetDesc = styled.p`
  color: ${props => props.theme.blackText};
  font-size: 20px;
  font-weight: 500;
  line-height: 1.37;
  margin-right: 12px;
  transform: translateX(0);
  opacity: 1;
  transition: all 150ms linear;

  ${AddPetWrapper}:hover & {
    opacity: 0;
    transform: translateX(-100%);
  }

  @media (max-width: 767px) {
    font-size: 12px;
    color: ${props => props.theme.white};
    margin: 0px;
  }
`;

export const PlusIcon = styled(Plus)`
  width: 24px;
  stroke: ${props => props.theme.white};
`;
