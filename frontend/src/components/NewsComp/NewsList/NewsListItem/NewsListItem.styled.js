import styled from 'styled-components';
import { baseColor } from 'components/baseStyles/Variables.styled';

const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  padding: 0;

  border-radius: 20px;

  @media screen and (min-width: 320px) {
    max-width: 280px;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    max-width: 336px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 395px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const Title = styled.h2`
  margin-bottom: 12px;
  font-family: 'Manrope';
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  color: ${baseColor.colors.blackText};
`;

const Text = styled.span`
  font-family: 'Manrope';
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: ${baseColor.colors.blackText};
`;

const DateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
`;

const Dates = styled.span`
  font-family: 'Manrope';
  font-weight: 400;
  font-size: 16px;
  line-height: 1.375;
  color: ${baseColor.colors.blackText};
`;

const Link = styled.a`
  text-decoration: none;
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 16px;
  line-height: 1.375;
  color: ${baseColor.colors.orangeLight};
  cursor: pointer;
  transition: all 0.25s ease-in;
  &:hover,
  &:focus {
    color: ${baseColor.colors.orangeLight};
    text-decoration: underline;
  }
`;
const Ractangle = styled.span`
    border-radius: 40px;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);

    @media screen and (min-width: 768px) {
      width: 100%;
      height: 8px;
    }

    @media screen and (min-width: 1280px) {
      width: 100%;
      height: 8px;
    }
`;

export { Item, Title, TextWrapper, DateWrapper, Text, Link, Ractangle, Dates };
