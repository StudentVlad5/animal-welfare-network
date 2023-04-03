import { baseColor } from 'components/baseStyles/Variables.styled';
import styled from 'styled-components';

export const UserDataTitleStyle = styled.h2`
  color: ${baseColor.colors.black};
  font-size: 20px;
  font-weight: 500;
  line-height: 1.37;
  letter-spacing: 0.04em;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    letter-spacing: 0;
    margin-left: 32px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 16px;
  }
`;
