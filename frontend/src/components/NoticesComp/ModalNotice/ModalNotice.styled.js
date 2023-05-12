import styled from 'styled-components';
import { ReactComponent as icon } from 'images/svg/icon_close.svg';

const BackDrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Manrope';
  font-style: normal;
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

const NoticesContainerItem = styled.div`
  position: relative;
  display: block;
  width: 280px;
  margin-top: 250px;
  padding: 10px 20px 40px 20px;
  background-color: ${props => props.theme.white};
  border-radius: 20px;
  -webkit-box-shadow: 7px 4px 14px 7px ${props => props.theme.shadowColor};
  -moz-box-shadow: 7px 4px 14px 7px ${props => props.theme.shadowColor};
  box-shadow: 7px 4px 14px 7px ${props => props.theme.shadowColor};

  @media screen and (min-width: 768px) {
    margin-top: 0;
    width: 704px;
    padding: 45px 20px 32px 20px;
  }
`;

const ButtonClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 45;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0;
  padding: 0;
  width: 34px;
  height: 34px;

  background-color: ${props => props.theme.mainBg};
  border-radius: 50%;
  border: medium none;
  border-spacing: 0;

  transition: all 0.25s ease-in;
  cursor: pointer;

  &:hover,
  &:focus {
    outline: 2px solid ${props => props.theme.orangeLight};
    border: none;
  }

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }

  @media screen and (min-width: 1280px) {
    top: 24px;
    right: 24px;
  }
`;

const IconClose = styled(icon)`
  width: 28px;
  height: 28px;
  display: block;

  & > path {
    stroke: ${props => props.theme.black};
    fill: ${props => props.theme.black};
  }

  @media screen and (min-width: 768px) {
    width: 36px;
    height: 36px;
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
  background: ${props => props.theme.orangeLight};
  color: ${props => props.theme.inpTextModal};
  border-radius: 0 20px 20px 0;
  backdrop-filter: blur(50px);
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 10px;
  border: 3px solid ${props => props.theme.orangeLight};
  z-index: 99;
`;

const ContainerInfo = styled.div`
  position: relative;
  display: block;
  width: 100%;
  background-color: ${props => props.theme.white};
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    /* width: 670px; */
    display: flex;
  }
`;
const ImgItem = styled.img`
  width: 240px;
  height: 240px;
  padding: 50px;
  outline: unset;
  object-fit: contain;
  background-color: ${props => props.theme.white};

  @media screen and (min-width: 768px) {
    width: 288px;
    height: 328px;
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
  color: ${props => props.theme.inpTextModal};
  min-width: 230px;
  max-width: 330px;
  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 38px;
  }
`;

const NoticeItemTitleError = styled(NoticeItemTitle)`
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

const NoticeContainerButton = styled.div`
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
  border: 2px solid ${props => props.theme.orangeLight};
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.inpTextModal};
  margin: 40px 0 12px;
  transition: all 0.25s ease-in;
  &:hover {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.orangeLight};
  }
  &:focus {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.orangeLight};
    outline: none;
  }
  @media screen and (min-width: 768px) {
    width: 160px;
    margin: 0 0 0 0;
  }
`;
const BtnAddFavorites = styled.button`
  cursor: pointer;
  width: 240px;
  height: 40px;
  border-radius: 40px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  border: 2px solid ${props => props.theme.orangeLight};
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.inpTextModal};

  & > svg {
    transition: all 0.3s ease-in;
    color: ${props => props.theme.orangeLight};
  }

  transition: all 0.25s ease-in;
  &:hover {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.orangeLight};
    & > svg {
      transition: all 0.3s ease-in;
      color: ${props => props.theme.white};
    }
  }
  &:focus {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.orangeLight};
    outline: none;
    & > svg {
      color: ${props => props.theme.white};
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
  color: ${props => props.theme.inpTextModal};

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
  color: ${props => props.theme.inpTextModal};

  @media screen and (min-width: 768px) {
    min-width: 115px;
    font-size: 16px;
    line-height: 22px;
  }
`;
const LinkStyle = styled.div`
  color: ${props => props.theme.orangeLight};
  text-decoration: none;
  transition: all 0.25s ease-in;

  &:hover,
  &:focus {
    color: ${props => props.theme.success};
    transform: scale(1.03);
  }
`;
const Table = styled.table`
  min-width: 240px;
  display: flex;
  overflow: hidden;
  margin-top: 26px;
  color: ${props => props.theme.inpTextModal};
  @media screen and (min-width: 768px) {
    margin-top: 20px;
  }
`;
const Comments = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: ${props => props.theme.inpTextModal};
`;
const MainComments = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: ${props => props.theme.inpTextModal};
`;
const ContainerComments = styled.div`
  margin-top: 20px;
`;

const ModalBtn = styled.button`
  position: absolute;
  border-color: transparent;
  color: transparent;
  background-color: transparent;
  top: 170px;
  right: 633px;
  @media screen and (max-width: 768px) {
    right: 200px;
  }
`;

const ModalBtn1 = styled.button`
  position: absolute;
  border-color: transparent;
  color: transparent;
  background-color: transparent;
  top: 170px;
  left: 250px;
  @media screen and (max-width: 768px) {
    left: 200px;
  }
`;

export {
  ModalBtn,
  ModalBtn1,
  NoticesContainerItem,
  ButtonClose,
  IconClose,
  ContainerInfo,
  ImgItem,
  ContainerStatus,
  NoticeItemTitle,
  NoticeItemTitleError,
  BtnContact,
  BtnAddFavorites,
  BackDrop,
  Table,
  TdTable,
  TdTable2,
  Comments,
  MainComments,
  ContainerComments,
  NoticeContainerButton,
  LinkStyle,
};
