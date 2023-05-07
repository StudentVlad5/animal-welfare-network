import styled from 'styled-components';

export const SelectConteinerLanguage = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
  border-color: ${props => props.theme.orangeLight};
  background: ${props => props.theme.white};
`;
export const SelectLanguage = styled.select`
  position: relative;
  width: 80px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
  color: ${props => props.theme.black};
  border-color: ${props => props.theme.orangeLight};
  background: ${props => props.theme.white};
  padding: 10px;
  cursor: pointer;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.04em;
  text-decoration: none;
  transition: all 0.25s ease-in;
  :focus,
  :hover {
    color: ${props => props.theme.orangeLight};
  }
  &.active {
    color: ${props => props.theme.orangeLight};
    text-decoration: underline;
  }

  @media screen and (min-width: 768px) {
    border-radius: 40px;
  }
`;
