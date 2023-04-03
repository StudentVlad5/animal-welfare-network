import styled from 'styled-components';
import { baseColor } from 'components/baseStyles/Variables.styled';

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
  height: auto;
  min-height: 192px;
  padding: 12px 4px;

  background-color: ${baseColor.colors.white};
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 20px;

  @media screen and (min-width: 320px) {
    max-width: 280px;
  }

  @media screen and (min-width: 768px) {
    max-width: 336px;
    min-height: 246px;
    border-radius: 40px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 390px;
    min-height: 287px;
  }
  transition: all 0.25s ease-in;

  &:hover,
  &:focus {
    position: relative;
    z-index: 10;
    scale: 1.05;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
`;

const InfoWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }

  @media screen and (min-width: 1280px) {
    gap: 12px;
  }
`;

const TextWrapper = styled.li`
  position: relative; //for modal
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const Title = styled.a`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 12px;
  text-align: center;
  font-family: 'Manrope';
  font-weight: 700;
  font-size: 12px;
  line-height: 1.333;
  color: ${baseColor.colors.orangeLight};
  cursor: pointer;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 1.375;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    line-height: 1.35;
  }
`;

const Text = styled.span`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 12px;
  line-height: 1.333;
  color: ${baseColor.colors.blackText};

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.357;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.375;
  }
`;

const Link = styled.a`
  text-align: left;
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 12px;
  line-height: 1.333;
  color: ${baseColor.colors.blackText};
  text-decoration: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.357;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.375;
  }
  transition: all 0.2s ease-in;

  &:hover,
  &:focus {
    color: ${baseColor.colors.orangeLight};
    text-decoration: underline;
  }
`;

const Image = styled.img`
  object-fit: cover;

  @media screen and (min-width: 320px) {
    width: 110px;
    height: 78px;
  }

  @media screen and (min-width: 768px) {
    width: 120px;
    height: 85px;
  }

  @media screen and (min-width: 1280px) {
    width: 158px;
    height: 112px;
  }
`;

export { Item, Title, Info, TextWrapper, InfoWrapper, Text, Link, Image };
