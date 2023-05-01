import styled from 'styled-components';

const BackDrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
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
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 6px;

  margin: 0 auto;
  padding: 30px 12px;
  min-width: 280px;
`;
const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Label = styled.label`
  font-family: 'Manrope', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: 0.04em;
`;

const Input = styled.input`
  box-sizing: border-box;
  font-family: 'Manrope', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: 0.04em;

  background-color: ${props => props.theme.white};
  color: ${props => props.theme.black};
  border: 1px solid;
  border-color: ${p =>
    p.disabled
      ? `${props => props.theme.inputColor}`
      : `${props => props.theme.colorOfInput}`};

  :focus {
    outline-color: ${props => props.theme.inputColor};
  }
  *:disabled {
    background-color: ${props => props.theme.black};
    color: ${props => props.theme.colorOfInput};
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

export {
  BackDrop,
  Modal,
  Form,
  Field,
  Label,
  Input,
  CloseIconBtn,
  DoneIconBtn,
};
