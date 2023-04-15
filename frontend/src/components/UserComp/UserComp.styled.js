import styled from 'styled-components';
import {
  Container,
  Section,
  Title,
} from 'components/baseStyles/CommonStyle.styled';

export const UserSection = styled(Section)`
  padding-top: 60px;
  padding-bottom: 80px;

  @media screen and (min-width: 1280px) {
    padding-bottom: 40px;
  }
`;
export const UserContainer = styled(Container)`
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const UserDataWrapper = styled.div`
  @media screen and (min-width: 768px) {
    width: 100%;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 32px;
  }
`;

export const UserDataContainer = styled.div`
  position: relative;
  background-color: ${props => props.theme.white};
  border-radius: 20px;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  margin-bottom: 40px;
  margin-top: 18px;
  padding-top: 20px;
  padding-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    margin-top: 40px;
    margin-left: -32px;
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
    margin-left: -16px;
    padding-right: 16px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

export const UserAboutWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;
export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
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
    border-bottom: 2px solid ${props => props.theme.orangeLight};
  }
`;

export const UserTitle = styled(Title)`
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 0px;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.37;
  letter-spacing: 0.04em;
  color: ${props => props.theme.blackText};
  outline: none;

  @media (min-width: 768px) {
    text-align: start;
    padding-bottom: 4px;
    font-size: 28px;
    letter-spacing: 0;
  }
`;
