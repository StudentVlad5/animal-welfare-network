import styled from 'styled-components';

const FilterNoticesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Manrope';
  font-style: normal;
  flex-direction: column;
`;

const BtnFilter = styled.button`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 38px;
  cursor: pointer;
  border-radius: 40px;
  border: 2px solid ${props => props.theme.orangeLight};
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.blackText};
  padding: 0 28px;
  margin: 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;
  transition: all 0.25s ease-in;
  &:hover:not([disabled]),
  &:focus:not([disabled]) {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.orangeLight};
    cursor: pointer;
    transform: scale(1.15);
  }
  &:focus {
    outline: none;
  }
  &[disabled] {
    color: gray;
  }
  @media screen and (min-width: 768px) and (max-width: 1279.9px) {
    margin-bottom: 0px;
    margin-right: 10px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 0px;
  }
`;

export { BtnFilter, FilterNoticesWrapper };
