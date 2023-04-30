import { Field, Form } from 'formik';
import { ReactComponent as icon } from 'images/svg/icon_close.svg';
import { ReactComponent as iconMale } from 'images/svg/icon_male.svg';
import { ReactComponent as iconFemale } from 'images/svg/icon_female.svg';
import { ReactComponent as iconCat } from 'images/svg/icon_cat.svg';
import { ReactComponent as iconDog } from 'images/svg/icon_dog.svg';

import styled from 'styled-components';

export const ModalAddNoticeStyled = styled.div`
  position: relative;

  width: 100%;
  height: auto;
  width: 280px;

  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  border-radius: 20px;
  padding: 40px 20px 40px 20px;

  background: ${props => props.theme.white};

  @media screen and (min-width: 768px) {
    width: 600px;

    border-radius: 40px;
    padding: 40px 80px 40px 80px;

    & .btns {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row-reverse;
      gap: 20px;
    }
  }
`;

export const Overlay = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding-top: 100px;

  background: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
  z-index: 1200;

  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const Title = styled.h1`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.375;
  text-align: center;
  color: ${props => props.theme.blackText};

  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-weight: 600;
    font-size: 36px;
  }
`;

export const Paragraph = styled.p`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.375;
  text-align: center;
  letter-spacing: -0.01em;
  color: ${props => props.theme.blackText};

  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 20px;

    margin-bottom: 28px;
  }
`;
export const ButtonClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  border: medium none;
  border-spacing: 0;
  margin: 0;
  padding: 0;
  border-radius: 50%;
  width: 34px;
  height: 34px;

  background-color: ${props => props.theme.mainBg};
  transition: all 0.25s ease-in;

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

export const IconClose = styled(icon)`
  width: 28px;
  height: 28px;
  display: block;
  @media screen and (min-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;

export const ButtonFirst = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  border: medium none;
  border-spacing: 0;
  margin-bottom: 12px;
  padding: 0;

  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.375;
  letter-spacing: 0.04em;
  color: ${props => props.theme.white};

  padding: 10px auto 10px auto;
  height: 40px;
  width: 100%;

  background: ${props => props.theme.orangeLight};
  border-radius: 40px;
  transition: all 0.25s ease-in;
  &:hover,
  &:focus {
    outline: 2px solid ${props => props.theme.orangeLight};
  }

  &:disabled {
    opacity: 0.7;
    pointer-events: none;
  }

  @media screen and (min-width: 768px) {
    height: 44px;
    width: 180px;
    margin-bottom: 0;

    font-weight: 500;
    font-size: 20px;
  }
`;

export const ButtonSecond = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  border: medium none;
  border-spacing: 0;
  padding: 0;

  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.375;
  letter-spacing: 0.04em;
  color: ${props => props.theme.blackText};

  padding: 10px auto 10px auto;
  height: 40px;
  width: 100%;

  background: ${props => props.theme.white};
  border: 2px solid ${props => props.theme.orangeLight};
  border-radius: 40px;
  transition: all 0.25s ease-in;
  &:hover,
  &:focus {
    outline: 2px solid ${props => props.theme.orangeLight};
  }
  @media screen and (min-width: 768px) {
    height: 44px;
    width: 180px;

    font-weight: 500;
    font-size: 20px;
  }
`;

export const FormStyled = styled(Form)`
  @media screen and (min-width: 768px) {
  }
`;

export const FieldsRadio = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  width: 100%;

  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.375;
  letter-spacing: 0.04em;
  color: ${props => props.theme.inpTextModal};

  & p {
    position: relative;
    display: block;
    width: 100%;
    margin-bottom: 8px;

    font-family: 'Manrope', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.375;
    letter-spacing: 0.04em;
    text-align: left;

    color: ${props => props.theme.inpTextModal};
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;

    & p {
      margin-bottom: 12px;
      font-size: 24px;
    }
  }
`;

export const LabelRadio = styled.label`
  position: relative;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 40px;
  border: 2px solid ${props => props.theme.orangeLight};
  margin-bottom: 12px;
  height: 35px;
  padding: 8px 28px 8px 28px;

  background: ${props => props.theme.white};
  transition: all 0.25s ease-in;
  &:not(:last-child) {
    margin-right: 8px;
  }

  &:hover,
  &:focus {
    outline: 2px solid ${props => props.theme.orangeLight};
  }

  @media screen and (min-width: 768px) {
    height: 47px;
    &:not(:last-child) {
      margin-right: 12px;
      margin-bottom: 16px;
    }
  }
`;

export const FieldRadio = styled(Field)`
  opacity: 0;
  width: 0px;
  height: 0px;

  &:checked + ${LabelRadio} {
    color: ${props => props.theme.white};
    background: ${props => props.theme.orangeLight};
  }
`;

export const FieldItem = styled(Field)`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.375;
  letter-spacing: 0.04em;
  text-align: left;
  color: ${props => props.theme.blackText};

  &::placeholder {
    color: rgba(27, 27, 27, 0.6);
  }
  padding: 10px 15px 10px 15px;
  height: 40px;
  width: 100%;

  margin-bottom: 16px;

  background: ${props => props.theme.mainBg};
  border: 1px solid ${props => props.theme.orangeLight};
  border-radius: 40px;
  outline: none;
  transition: all 0.25s ease-in;
  &:hover {
    outline: 2px solid ${props => props.theme.orangeLight};
  }

  &:focus {
    outline: 3px solid ${props => props.theme.orangeLight};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    display: none;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    height: 48px;
    margin-bottom: 28px;
  }
`;

export const LabelItem = styled.label`
  position: relative;

  display: block;
  width: 100%;

  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.375;
  letter-spacing: 0.04em;
  text-align: left;

  color: ${props => props.theme.inpTextModal};

  & span {
    display: block;
    margin-bottom: 8px;
  }

  & img {
    position: absolute;
    bottom: -126px;
    left: 0;

    display: block;
    height: 116px;
    width: 116px;
    border-radius: 20px;
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;

    &:first-child {
      margin-top: 12px;
    }

    & span {
      display: block;
      margin-bottom: 12px;
    }
  }
`;

export const FieldList = styled.div`
  width: 100%;
`;

export const FieldItemFile = styled(Field)`
  all: unset;
  height: 78px;
  width: 78px;

  margin-bottom: 28px;
  background-color: ${props => props.theme.mainBg};
  border-radius: 20px;
  border: 1px solid ${props => props.theme.orangeLight};
  outline: none;

  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzEiIGhlaWdodD0iNzEiIHZpZXdCb3g9IjAgMCA3MSA3MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM1LjQ5OTkgNTkuMTY2M1YzNS40OTk3TTM1LjQ5OTkgMzUuNDk5N1YxMS44MzNNMzUuNDk5OSAzNS40OTk3SDU5LjE2NjZNMzUuNDk5OSAzNS40OTk3SDExLjgzMzMiIHN0cm9rZT0iIzExMTExMSIgc3Ryb2tlLW9wYWNpdHk9IjAuNiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+);
  background-size: 71px, 71px;
  background-position: center;
  background-repeat: no-repeat;

  transition: all 500ms ease;

  color: transparent;
  &:hover {
    outline: 3px solid ${props => props.theme.orangeLight};
  }
  &:focus {
    outline: none;
  }

  &::file-selector-button {
    display: none;
  }

  &::file-selector-text {
    display: none;
  }

  @media screen and (min-width: 768px) {
    height: 140px;
    width: 140px;
  }
`;

export const IconMale = styled(iconMale)`
  height: 40px;
  width: 40px;
  margin-top: 16px;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    height: 60px;
    width: 60px;
    margin-top: 28px;
    margin-bottom: 20px;
  }
`;
export const IconFemale = styled(iconFemale)`
  height: 40px;
  width: 40px;
  margin-top: 16px;
  margin-bottom: 12px;
  @media screen and (min-width: 768px) {
    height: 60px;
    width: 60px;
    margin-top: 28px;
    margin-bottom: 20px;
  }
`;

export const LabelRadioSex = styled.label`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &:not(:last-child) {
    margin-right: 40px;
  }
  transition: all 0.25s ease-in;
  &:hover,
  &:focus {
    color: ${props => props.theme.orangeLight};
  }

  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-right: 80px;
    }
  }
`;

export const FieldRadioSex = styled(Field)`
  opacity: 0;
  width: 0px;
  height: 0px;

  &:checked + ${LabelRadioSex} {
    & span {
      color: ${props => props.theme.orangeLight};
    }
  }
`;

export const FieldsRadioSex = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  width: 100%;
  margin-bottom: 32px;

  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.375;
  letter-spacing: 0.04em;
  color: ${props => props.theme.inpTextModal};

  & p {
    position: relative;
    display: block;
    width: 100%;

    font-family: 'Manrope', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.375;
    letter-spacing: 0.04em;
    text-align: left;

    color: ${props => props.theme.inpTextModal};
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;

    font-size: 24px;

    & p {
      font-size: 24px;
    }
  }
`;

export const LabelItemTextArea = styled.label`
  position: relative;

  display: block;
  width: 100%;

  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.375;
  letter-spacing: 0.04em;
  text-align: left;

  color: ${props => props.theme.inpTextModal};

  & span {
    display: block;
    margin-bottom: 8px;
  }

  & img {
    position: absolute;
    bottom: -126px;
    left: 0;

    display: block;
    height: 116px;
    width: 116px;
    border-radius: 20px;
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;

    & span {
      display: block;
      margin-bottom: 12px;
    }
  }
`;

export const FieldItemTextArea = styled(Field)`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.375;
  letter-spacing: 0.04em;
  text-align: left;
  color: ${props => props.theme.inpTextModal};

  &::placeholder {
    color: rgba(27, 27, 27, 0.6);
  }

  padding: 10px 15px 10px 15px;
  height: 40px;
  width: 100%;

  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 40px;
  }

  background: ${props => props.theme.mainBg};
  border: 1px solid ${props => props.theme.orangeLight};
  border-radius: 40px;
  outline: none;
  transition: all 0.25s ease-in;
  &:hover {
    outline: 2px solid ${props => props.theme.orangeLight};
  }

  &:focus {
    outline: 3px solid ${props => props.theme.orangeLight};
    height: 137px;
    border-radius: 20px;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    height: 113px;
    margin-bottom: 40px;
    border-radius: 20px;

    &:focus {
      height: 113px;
    }
  }
`;

export const Error = styled.span`
  position: absolute;
  top: 18px;
  right: 0px;

  z-index: 99;

  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.375;
  letter-spacing: 0.04em;
  text-align: left;
  color: ${props => props.theme.orangeLight};

  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`;

export const Li = styled.li`
  cursor: pointer;

  width: 100%;

  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 1.375;
  letter-spacing: 0.04em;
  text-align: left;
  color: ${props => props.theme.inpTextModal};

  padding: 10px 15px 10px 15px;

  margin-bottom: 2px;

  background: ${props => props.theme.mainBg};
  border: 1px solid ${props => props.theme.orangeLight};
  border-radius: 40px;
  outline: none;
  transition: all 0.25s ease-in;
  &:hover {
    outline: 2px solid ${props => props.theme.orangeLight};
  }

  &:focus {
    outline: 3px solid ${props => props.theme.orangeLight};
  }

  @media screen and (min-width: 768px) {
    font-size: 12px;
    margin-bottom: 2px;
  }
`;

export const Option = styled.option`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 1.375;
  letter-spacing: 0.04em;
  text-align: left;
  color: ${props => props.theme.inpTextModal};

  background: ${props => props.theme.mainBg};

  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`;

export const OptionFirst = styled.option`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 1.375;
  letter-spacing: 0.04em;
  text-align: left;
  color: rgba(27, 27, 27, 0.6);

  background: ${props => props.theme.mainBg};

  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`;

export const IconCat = styled(iconCat)`
  height: 40px;
  width: 40px;
  margin-top: 16px;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    height: 60px;
    width: 60px;
    margin-top: 28px;
    margin-bottom: 20px;
  }
`;
export const IconDog = styled(iconDog)`
  height: 40px;
  width: 40px;
  margin-top: 16px;
  margin-bottom: 12px;
  @media screen and (min-width: 768px) {
    height: 60px;
    width: 60px;
    margin-top: 28px;
    margin-bottom: 20px;
  }
`;

export const LabelRadioType = styled.label`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  fill: ${props => props.theme.blackText};

  &:not(:last-child) {
    margin-right: 40px;
  }
  transition: all 0.25s ease-in;
  &:hover,
  &:focus {
    color: ${props => props.theme.orangeLight};
    fill: ${props => props.theme.orangeLight};
  }

  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-right: 80px;
    }
  }
`;

export const FieldRadioType = styled(Field)`
  opacity: 0;
  width: 0px;
  height: 0px;

  &:checked + ${LabelRadioType} {
    fill: ${props => props.theme.orangeLight};
    & span {
      color: ${props => props.theme.orangeLight};
    }
  }
`;

export const FieldsRadioType = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  width: 100%;
  margin-bottom: 32px;

  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.375;
  letter-spacing: 0.04em;
  color: ${props => props.theme.inpTextModal};

  & p {
    position: relative;
    display: block;
    width: 100%;

    font-family: 'Manrope', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.375;
    letter-spacing: 0.04em;
    text-align: left;

    color: ${props => props.theme.inpTextModal};
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;

    font-size: 24px;

    & p {
      font-size: 24px;
    }
  }
`;
