import styled from 'styled-components';
import { baseColor } from 'components/baseStyles/Variables.styled';

const BackDrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Manrope';
  font-style: normal;
  width: 100%;
  height: 100%;
`;

const NoticesContainerItem = styled.div`
  position: relative;
  display: block;
  width: 280px;
  padding: 17px 20px 43px 20px;
  background-color: ${baseColor.colors.white};
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 32px 20px 32px 20px;
  }
`;
const ContainerPositionForCloseModal = styled.div`
  display: flex;
  justify-content: end;
`;
const ContainerCloseModal = styled.div`
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
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
`;

const ContainerInfo = styled.div`
  position: relative;
  display: block;
  width: 100%;
  background-color: ${baseColor.colors.white};
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    width: 670px;
    display: flex;
  }
`;
const ImgItem = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 0px 0px 40px 40px;
  outline: unset;
  object-fit: contain;
  @media screen and (min-width: 768px) {
    width: 288px;
    height: 328px;
    margin-right: 20px;
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
  color: ${baseColor.colors.black};
  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 38px;
  }
`;

const NoticeContainerButtom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    justify-content: end;
    flex-direction: row-reverse;
    margin-top: 32px;
  }
`;
const BtnContact = styled.button`
  cursor: pointer;
  width: 240px;
  height: 40px;
  border-radius: 40px;
  border: 2px solid ${baseColor.colors.orangeLight};
  background-color: ${baseColor.colors.white};
  color: ${baseColor.colors.blackText};
  margin: 40px 0 12px;
  transition: all 0.25s ease-in;
  &:hover {
    color: ${baseColor.colors.white};
    background-color: ${baseColor.colors.orangeLight};
  }
  &:focus {
    color: ${baseColor.colors.white};
    background-color: ${baseColor.colors.orangeLight};
    outline: none;
  }
  @media screen and (min-width: 768px) {
    width: 160px;
    margin: 0 0 0 0;
  }
`;
const BtnAddFavorits = styled.button`
  cursor: pointer;
  width: 240px;
  height: 40px;
  border-radius: 40px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  border: 2px solid ${baseColor.colors.orangeLight};
  background-color: ${baseColor.colors.white};
  color: ${baseColor.colors.blackText};

  & > svg {
    transition: all 0.3s ease-in;
    color: ${baseColor.colors.orangeLight};
  }

  transition: all 0.25s ease-in;
  &:hover {
    color: ${baseColor.colors.white};
    background-color: ${baseColor.colors.orangeLight};
    & > svg {
      transition: all 0.3s ease-in;
      color: ${baseColor.colors.white};
    }
  }
  &:focus {
    color: ${baseColor.colors.white};
    background-color: ${baseColor.colors.orangeLight};
    outline: none;
    & > svg {
      color: ${baseColor.colors.white};
    }
  }

  @media screen and (min-width: 768px) {
    width: 160px;
    margin: 0 12px 0 0;
  }
`;
const TdTable = styled.td`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  overflow: hidden;
  min-width: 115px;

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

  @media screen and (min-width: 768px) {
    min-width: 115px;
    font-size: 16px;
    line-height: 22px;
  }
`;
const LinkStyle = styled.div`
  color: ${baseColor.colors.orangeLight};
  text-decoration: none;
  transition: all 0.25s ease-in;

  &:hover,
  &:focus {
    color: ${baseColor.colors.success};
    transform: scale(1.03);
  }
`;
const Table = styled.table`
  min-width: 240px;
  display: flex;
  overflow: hidden;
  margin-top: 26px;
  @media screen and (min-width: 768px) {
    margin-top: 20px;
  }
`;
const Comments = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
`;
const MainComments = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
`;
const ContainerComments = styled.div`
  margin-top: 28px;
`;
export {
  NoticesContainerItem,
  ContainerCloseModal,
  ContainerPositionForCloseModal,
  ContainerInfo,
  ImgItem,
  ContainerStatus,
  NoticeItemTitle,
  BtnContact,
  BtnAddFavorits,
  BackDrop,
  Table,
  TdTable,
  TdTable2,
  Comments,
  MainComments,
  ContainerComments,
  NoticeContainerButtom,
  LinkStyle,
};
