import styled from 'styled-components';
import { Field, Form } from 'formik';

const BackDrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 100px;
  overflow: scroll;

  @media screen and (min-width: 768px) {
    padding-top: 0;
  }
`;

const Modal = styled.div`
  position: relative;
  display: block;

  max-width: calc(100vw - 40px);
  padding: 10px;

  background-color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.colorBorder};
  border-radius: 20px;
  box-shadow: ${props => props.theme.shadowColor} 7px 4px 14px;

  @media screen and (min-width: 768px) {
    max-width: 600px;
    padding: 20px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 800px;
    padding: 40px;
  }
`;
const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 6px;

  margin: 0 auto;
  padding: 35px 0 12px;
`;

const FieldList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  align-items: stretch;
  gap: 5px;

  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    flex-direction: row;
    align-items: flex-end;
  }
`;

const FieldStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 3px;

  @media screen and (min-width: 768px) {
    width: 45%;
  }

  & .react-select-container {
    padding: 5px;
    height: 30px;
    max-width: 165px;
    margin-bottom: 0;
    font-size: 12px;
    border-radius: 4px;
  }
`;

const Label = styled.label`
  font-family: 'Manrope', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: 0.04em;
`;

const Input = styled(Field)`
  padding: 5px;
  box-sizing: border-box;
  font-family: 'Manrope', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: 0.04em;

  background-color: ${props => props.theme.mainBg};
  color: ${props => props.theme.blackText};
  border: 1px solid ${props => props.theme.orangeLight};
  border-radius: 4px;
  outline: none;
  transition: all 0.25s ease-in;

  &::placeholder {
    color: rgba(27, 27, 27, 0.6);
  }

  &:hover,
  &:focus {
    outline: 2px solid ${props => props.theme.orangeLight};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    display: none;
  }

  *:disabled {
    background-color: ${props => props.theme.black};
    color: ${props => props.theme.colorOfInput};
  }
`;

const FieldItemFile = styled(Field)`
  all: unset;
  height: 24px;
  width: 24px;

  margin-bottom: 4px;
  background-color: ${props => props.theme.mainBg};
  border-radius: 4px;
  border: 1px solid ${props => props.theme.orangeLight};
  outline: none;

  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzEiIGhlaWdodD0iNzEiIHZpZXdCb3g9IjAgMCA3MSA3MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM1LjQ5OTkgNTkuMTY2M1YzNS40OTk3TTM1LjQ5OTkgMzUuNDk5N1YxMS44MzNNMzUuNDk5OSAzNS40OTk3SDU5LjE2NjZNMzUuNDk5OSAzNS40OTk3SDExLjgzMzMiIHN0cm9rZT0iIzExMTExMSIgc3Ryb2tlLW9wYWNpdHk9IjAuNiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+);
  background-size: 24px, 24px;
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
`;

const Option = styled.option`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 1.375;
  letter-spacing: 0.04em;
  text-align: left;
  color: ${props => props.theme.inpTextModal};
  background: ${props => props.theme.mainBg};
`;

const OptionFirst = styled.option`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 1.375;
  letter-spacing: 0.04em;
  text-align: left;
  color: rgba(27, 27, 27, 0.6);

  background: ${props => props.theme.mainBg};
`;

const Li = styled.li`
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

  padding: 5px;

  margin-bottom: 2px;

  background: ${props => props.theme.mainBg};
  border: 1px solid ${props => props.theme.orangeLight};
  border-radius: 4px;
  outline: none;
  transition: all 0.25s ease-in;
  &:hover {
    outline: 2px solid ${props => props.theme.orangeLight};
  }

  &:focus {
    outline: 3px solid ${props => props.theme.orangeLight};
  }
`;

const CloseIconBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;

  color: ${props => props.theme.black};
  background-color: ${props => props.theme.white};
  border-color: ${props => props.theme.black};
  border-radius: 50%;
  backdrop-filter: blur(2px);
  z-index: 50;

  cursor: pointer;
`;

const DoneIconBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 45px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;

  color: ${props => props.theme.orangeLight};
  background-color: transparent;
  border-color: ${props => props.theme.orangeLight};
  border-radius: 50%;
  backdrop-filter: blur(2px);
  z-index: 50;

  cursor: pointer;

  &:hover,
  &:focus {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.orangeLight};
  }
`;

const Error = styled.span`
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
`;

export {
  BackDrop,
  Modal,
  Li,
  FormStyled,
  FieldList,
  FieldStyled,
  Label,
  Input,
  FieldItemFile,
  Option,
  OptionFirst,
  CloseIconBtn,
  DoneIconBtn,
  Error,
};
