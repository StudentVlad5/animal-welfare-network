import styled from 'styled-components';
import { Field, Form } from 'formik';
import { ReactComponent as iconSearch } from 'images/svg/icon_search.svg';

export const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: none repeat scroll 0 0 transparent;
  border: medium none;
  border-spacing: 0;
  margin: 0;
  padding: 0;
  text-align: left;
  text-decoration: none;
  text-indent: 0;
`;

export const FormStyled = styled(Form)`
  margin-bottom: 28px;
  margin-left: auto;
  margin-right: auto;
  max-width: 280px;
  width: 100%;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    max-width: 608px;
  }
`;

export const FieldStyled = styled(Field)`
  all: unset;

  width: 100%;

  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.375;
  align-items: center;
  letter-spacing: 0.04em;
  color: ${props => props.theme.inpText};
  background-color: ${props => props.theme.colorOfInput};

  padding-right: 5px;
margin-right: 10px;

&:focus {

border-right: 2px solid ${props => props.theme.inpText};
}

&:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px ${props => props.theme.white} inset;
}

&:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 50px ${props => props.theme.white} inset;
    -webkit-text-fill-color: ${props => props.theme.inpText};
}

&:-webkit-box-shadow: 0 0 0px 1000px ${props => props.theme.white} inset;

  &::-webkit-search-cancel-button,
  &::-webkit-search-decoration,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    -webkit-appearance: none;
    cursor: pointer;
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDIxQzE2Ljk3MDYgMjEgMjEgMTYuOTcwNiAyMSAxMkMyMSA3LjAyOTQ0IDE2Ljk3MDYgMyAxMiAzQzcuMDI5NDQgMyAzIDcuMDI5NDQgMyAxMkMzIDE2Ljk3MDYgNy4wMjk0NCAyMSAxMiAyMVoiIHN0cm9rZT0iIzExMTExMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE1IDlMOSAxNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTkgOUwxNSAxNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cgo=);
    background-size: cover;
    height: 20px;
    width: 20px;
  }


  @media screen and (min-width: 768px) {

  &::-webkit-search-cancel-button,
  &::-webkit-search-decoration,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    height: 24px;
    width: 24px;
  }
    font-size: 20px;
  }
`;

export const LabelStyled = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 40px;

  padding: 10px;

  color: ${props => props.theme.inpText};
  background-color: ${props => props.theme.colorOfInput};

  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    height: 44px;
    padding: 8px 20px 8px 20px;
    border-radius: 40px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const IconSearch = styled(iconSearch)`
  cursor: pointer;
  width: 20px;
  height: 20px;
  display: ${props => (props.hidden ? 'none' : 'block')};

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
