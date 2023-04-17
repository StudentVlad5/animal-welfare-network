import styled from 'styled-components';
import { ReactComponent as delBack } from 'images/svg/icon_delete.svg';

const ItemContainer = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Manrope';
  font-style: normal;
  width: 100%;
  height: 100%;
  align-items: stretch;
`;
const NoticesContainerItem = styled.div`
  position: relative;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  object-fit: cover;
  width: 280px;
  padding: 0 0 12px 0;
  background-color: ${props => props.theme.white};
  border-radius: 0px 0px 20px 20px;
  transition: box-shadow 250ms linear;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: all 0.25s ease-in;
  &:hover {
    cursor: pointer;
    box-shadow: 0 1px 4px ${props => props.theme.orange},
      -23px 0 20px -23px ${props => props.theme.orange},
      23px 0 20px -23px ${props => props.theme.orange};
  }

  @media screen and (min-width: 768px) and (max-width: 1279.9px) {
    width: 336px;
    padding: 0 0 32px 0;
  }
  @media screen and (min-width: 1280px) {
    width: 288px;
    padding: 0 0 32px 0;
  }
`;

const ContainerStatus = styled.div`
  position: absolute;
  top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 158px;
  height: 28px;
  background: #fdf7f2;
  border-radius: 0 20px 20px 0;
  backdrop-filter: blur(50px);
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${props => props.theme.black};
  background-color: ${props => props.theme.orangeLight};
`;
const BtnForFavorite = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  border-radius: 50%;
  outline: none;
  border: none;
  top: 12px;
  right: 12px;
  transition: all 0.25s ease-in;

  &:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.4);

    & > svg {
      transition: all 0.25s ease-in;
      color: ${props => props.theme.orangeLight};
    }
  }
`;
const ContainerInfo = styled.div`
  position: relative;
  display: block;
  width: 100%;
  background-color: ${props => props.theme.white};
  border-radius: 20px;
`;
const ImgItem = styled.img`
  width: 280px;
  height: 288px;
  object-fit: contain;
  outline: unset;
  @media screen and (min-width: 768px) {
    width: 100%;
    object-fit: contain;
  }
`;
const NoticeItemTitle = styled.h2`
  display: flex;
  justify-content: start;
  align-items: center;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.01em;
  color: ${props => props.theme.black};
  margin: 20px;
  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 38px;
  }
`;
const NoticeContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const BtnLearnMore = styled.button`
  cursor: pointer;
  width: 248px;
  height: 38px;
  border-radius: 40px;
  border: 2px solid ${props => props.theme.orangeLight};
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.blackText};
  margin: 40px 0 12px;
  transition: all 0.25s ease-in;
  &:hover {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.orangeLight};
    cursor: pointer;
  }
  &:focus {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.orangeLight};
    outline: none;
  }
`;
const BtnDelete = styled.button`
  cursor: pointer;
  width: 248px;
  height: 38px;
  border-radius: 40px;
  border: 2px solid ${props => props.theme.orange};
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.blackText};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.25s ease-in;
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.orangeLight};

    & > svg {
      transition: all 0.3s ease-in;
      fill: ${props => props.theme.white};
    }
  }
  &:focus {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.orangeLight};
    outline: none;

    & > svg {
      transition: all 0.3s ease-in;
      fill: ${props => props.theme.white};
    }
  }
`;
const DeleteIcon = styled(delBack)`
  margin-left: 12px;
  width: 18px;
  height: 18px;
  fill: ${props => props.theme.orangeLight};
`;

const TBody = styled.tbody`
  width: 100%;
`;

const TdTable = styled.td`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  overflow: hidden;
  min-width: 115px;
  color: ${props => props.theme.blackText};

  @media screen and (min-width: 768px) {
    min-width: 115px;
    font-size: 16px;
    line-height: 22px;
  }
`;
const TdTable2 = styled.td`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  overflow: hidden;
  min-width: 115px;
  color: ${props => props.theme.blackText};

  @media screen and (min-width: 768px) {
    min-width: 115px;
    font-size: 16px;
    line-height: 22px;
  }
`;
const Table = styled.table`
  width: 240px;
  display: flex;
  overflow: hidden;
  padding: 0 20px;
`;

export {
  NoticesContainerItem,
  ContainerInfo,
  ImgItem,
  ContainerStatus,
  NoticeItemTitle,
  BtnLearnMore,
  BtnDelete,
  DeleteIcon,
  ItemContainer,
  Table,
  TdTable,
  TdTable2,
  NoticeContainerButton,
  BtnForFavorite,
  TBody,
};
