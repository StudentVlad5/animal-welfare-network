import { baseColor } from 'components/baseStyles/Variables.styled';
import styled from 'styled-components';

export const UserPageWrapper = styled.div`
  @media (min-width: 320px) {
    width: 100%;
    padding-bottom: 80px;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 60px;
  }

  @media screen and (min-width: 768px) {
    padding-bottom: 100px;
    padding-left: 0px;
    padding-right: 32px;
    margin-top: 90px;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    padding-bottom: 40px;
    padding-right: 16px;
    margin-top: 60px;
  }
`;

export const UserDataWrapper = styled.div`
  @media screen and (min-width: 1280px) {
    margin-right: 32px;
  }
`;

export const UserDataContainer = styled.div`
  background-color: ${baseColor.colors.white};
  border-radius: 20px;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  margin-bottom: 40px;
  margin-top: 18px;
  padding-top: 20px;
  padding-bottom: 20px;

  @media screen and (min-width: 768px) {
    position: relative;
    margin-bottom: 40px;
    margin-top: 40px;
    padding-right: 40px;
    padding-top: 24px;
    padding-bottom: 24px;
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
    border-bottom-right-radius: 40px;
    border-top-right-radius: 40px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 0px;
    margin-top: 24px;
    padding-right: 16px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

export const UserAboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding-left: 32px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 0px;
  }
`;
export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MyPetContainer = styled.div`
  display: flex;
  width: 80%;
  border-bottom: none;

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media screen and (min-width: 768px) {
    border-bottom: 2px solid ${baseColor.colors.orangeLight};
  }
`;

export const MyPetTitle = styled.h2`
  outline: none;
  font-family: Manrope, sans-serif;
  color: ${baseColor.colors.blackText};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.37;
  letter-spacing: 0.04em;
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 0px;

  @media (max-width: 400px) {
    &:not(:last-child) {
      margin-bottom: 50px;
    }
  }

  @media (min-width: 768px) {
    font-size: 28px;
    padding-bottom: 4px;
  }
`;
