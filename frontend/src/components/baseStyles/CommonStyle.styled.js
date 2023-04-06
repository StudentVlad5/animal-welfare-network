import styled from 'styled-components';
import { baseColor } from 'components/baseStyles/Variables.styled';

const Section = styled.section`
  margin: ${props => props.margin || '0 auto'};
  padding-top: ${props => props.paddingTop || '42px'};
  padding-bottom: ${props => props.paddingBottom || '100px'};
  width: 100%;

  @media screen and (min-width: 768px) {
    margin: ${props => props.marginTablet || '0 auto'};
    padding-top: ${props => props.paddingTopTablet || '88px'};
    padding-bottom: ${props => props.paddingBottomTablet || '100px'};
  }

  @media screen and (min-width: 1280px) {
    margin: ${props => props.marginDesktop || '0 auto'};
    padding-top: ${props => props.paddingTopDesktop || '60px'};
    padding-bottom: ${props => props.paddingBottomDesktop || '100px'};
  }
`;

const Container = styled.div`
  display: ${props => props.display || 'flex'};
  flex-direction: ${props => props.flexDirection || 'column'};
  align-items: ${props => props.alignItems || 'center'};
  justify-content: ${props => props.justifyContent || 'center'};
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    flex-direction: ${props => props.flexDirectionTablet || 'column'};
    align-items: ${props => props.alignItemsTablet || 'center'};
    justify-content: ${props => props.justifyContentTablet || 'center'};
    padding: 0 32px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: ${props => props.flexDirectionDesktop || 'column'};
    align-items: ${props => props.alignItemsDesktop || 'center'};
    justify-content: ${props => props.justifyContentDesktop || 'center'};
    max-width: 1280px;
    padding: 0 16px;
  }
`;

const Title = styled.h1`
  margin: ${props => props.margin || '0 0 28px 0'};
  text-align: ${props => props.position || 'center'};
  font-family: 'Manrope', sans-serif;
  font-size: ${props => props.size || '24px'};
  font-weight: 700;
  line-height: 1.375;
  color: ${baseColor.colors.black};

  @media screen and (min-width: 768px) {
    margin: ${props => props.margin || '0 0 40px 0'};
    text-align: ${props => props.position || 'center'};
    font-size: ${props => props.size || '48px'};
  }
`;

export { Container, Section, Title };
