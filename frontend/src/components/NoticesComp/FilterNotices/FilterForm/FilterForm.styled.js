import styled from 'styled-components';

const Form = styled.form`
  display: block;
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.black};
  border-radius: 40px;
  padding: 20px;
  -webkit-box-shadow: 7px 4px 14px 0px ${props => props.theme.shadowcolor};
  -moz-box-shadow: 7px 4px 14px 0px ${props => props.theme.shadowcolor};
  box-shadow: 7px 4px 14px 0px ${props => props.theme.shadowcolor};

  /* @media screen and (min-width: 768px) {

  } */
`;
const FieldSet = styled.fieldset`
  display: flex;
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.black};
  border-color: ${props => props.theme.orangeLight};
  border-radius: 40px;
  margin-bottom: 20px;
  /* @media screen and (min-width: 768px) {

  } */
`;
const LegendFieldSet = styled.legend`
  position: relative;
  display: block;
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.orangeLight};
  border-radius: 40px;
  font-family: 'Manrope';
  font-style: normal;
  font-size: 24px;
  font-weight: bold;

  /* @media screen and (min-width: 768px) {

  } */
`;

const InputForm = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:checked ~ .check {
    background-color: ${props => props.theme.orange};
  }

  &:checked ~ .check::before {
    content: '';
    background-color: white;
  }
`;
const LabelForInput = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-left: 40px;
  margin-bottom: 20px;
  margin-left: 30px;
  cursor: pointer;
  font-size: 20px;
  &:hover input ~ .check::before {
    content: '';
    background-color: gray;
  }
`;

const Check = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 28px;
  width: 28px;
  background-color: lightgray;
  border-radius: 50%;
  &:before {
    position: absolute;
    top: 7px;
    left: 7px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: white;
    content: '';
  }
`;
export { LegendFieldSet, FieldSet, Form, InputForm, Check, LabelForInput };
