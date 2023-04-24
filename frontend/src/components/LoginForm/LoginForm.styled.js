import styled from 'styled-components';
import { Form } from 'formik';
import { Link } from 'react-router-dom';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { Title } from 'components/baseStyles/CommonStyle.styled';

import BackgroundImage from 'images/register/bgForm.webp';
import waveMobile from 'images/hero/waveMobileFull.webp';
import waveTab from 'images/register/BGFornTab.webp';

const FormSection = styled.section`
  @media screen and (max-width: 767.9px) {
    background-image: url(${waveMobile});
    background-repeat: no-repeat;
    background-size: 620px auto;
    background-position: bottom -250px left 30%;
  }

  @media screen and (min-width: 768px) and (max-width: 1279.9px) {
    background: url(${waveTab});
    background-repeat: no-repeat;
    background-size: 1396px auto;
    background-position: bottom -130px left 50%;
  }
`;

const FormContainer = styled.div`
  height: 100%;
  min-height: calc(100vh - 140px);

  @media screen and (min-width: 768px) {
    padding-top: 170px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 80px;
    min-height: calc(100vh - 120px);

    background: url(${BackgroundImage});
    background-repeat: no-repeat;
    background-size: 1280px auto;
    background-position: bottom 0 left 50%;
  }
`;

const TitleLogin = styled(Title)`
  margin-bottom: 40px;
  margin-top: 0;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    font-weight: 500;
  }
`;
export const IconValid = styled(FaCheck)`
  display: inline-block;
  position: absolute;
  width: 20px;
  height: 20px;
  right: 6%;
  top: 62%;
  transform: translateY(-80%);
  color: grey;
  cursor: pointer;
  svg {
    width: inherit;
    height: inherit;
  }
`;

export const IconInValid = styled(FaTimes)`
  display: inline-block;
  position: absolute;
  width: 20px;
  height: 20px;
  right: 6%;
  top: 62%;
  transform: translateY(-80%);
  color: grey;
  cursor: pointer;
  svg {
    width: inherit;
    height: inherit;
  }
`;

const FormLogin = styled(Form)`
  position: relative;
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 44px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 608px;
    height: 492px;
    margin: 0 auto;
    padding: 60px 0 40px 0;

    background-color: ${props => props.theme.colorOfForm};
    border-radius: 40px;
    -webkit-box-shadow: 7px 4px 14px 0px ${props => props.theme.shadowcolor};
    -moz-box-shadow: 7px 4px 14px 0px ${props => props.theme.shadowcolor};
    box-shadow: 7px 4px 14px 0px ${props => props.theme.shadowcolor};
  }
  @media screen and (min-width: 1280px) {
    width: 618px;
    padding: 60px 0 60px 0;
  }
  > div {
    position: relative;
  }
`;
const ShowPassword = styled.span`
  display: inline-block;
  position: absolute;
  width: 20px;
  height: 20px;
  right: 6%;
  top: 62%;
  transform: translateY(-80%);
  color: grey;
  cursor: pointer;
  svg {
    width: inherit;
    height: inherit;
  }
`;
const Input = styled.input`
  width: 280px;
  font-size: 14px;
  line-height: 1.3;
  padding: 11px 0 12px 14px;
  background: ${props => props.theme.colorOfInput};
  color: ${props => props.theme.inpText};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  // margin-bottom: 16px;
  transition: all 0.25s ease-in;
  &:focus,
  &:hover {
    border-color: ${props => props.theme.orange};
    outline: none;
  }
  @media screen and (min-width: 768px) {
    width: 448px;
    font-size: 18px;
    padding: 14px 0 13px 32px;
  }
  @media screen and (min-width: 1280px) {
    width: 458px;
  }
`;
const Button = styled.button`
  width: 100%;
  padding: 11px 0 12px 14px;
  text-align: center;
  color: ${props => props.theme.white};
  background: ${props => props.theme.orangeLight};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  margin: 8px 0 40px 0;
  transform: scale(1);
  transition: transform 0.5s;
  cursor: pointer;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.25s ease-in;
  :hover,
  :focus {
    transform: scale(1.05);
    transition: transform 0.5s;
  }
  :hover:before {
    left: 100%;
  }
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.orangeLight};
    transition: all 450ms;
  }
  :disabled {
    opacity: 0.5;
    cursor: auto;
    transform: none;
    transition: none;
  }
  :disabled:before {
    transform: none;
    transition: none;
  }
  @media screen and (min-width: 768px) {
    width: 458px;
    font-size: 20px;
  }
`;
const ErrorBox = styled.div`
  position: absolute;
  white-space: nowrap;
  bottom: 0px;
  left: 15px;
  color: #e53e3e;
  font-family: 'Manrope';
  font-size: 12px;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: 0.03em;
  margin-bottom: -16px;
  @media screen and (min-width: 768px) {
    left: 32px;
  }
`;

const Div = styled.div`
  margin-bottom: 32px;
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.blue};
  margin-left: 4px;
  transition: all 0.25s ease-in;
  :hover,
  :focus {
    color: ${props => props.theme.orangeLight};
  }
`;
const BoxText = styled.div`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;
  color: ${props => props.theme.logout};
`;

export {
  FormSection,
  FormContainer,
  TitleLogin,
  FormLogin,
  ShowPassword,
  Input,
  Button,
  StyledLink,
  BoxText,
  // Background,
  ErrorBox,
  Div,
};
