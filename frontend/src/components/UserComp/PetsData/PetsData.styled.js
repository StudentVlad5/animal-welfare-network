import styled from 'styled-components';

export const AddPetWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const AddPetDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const PetDataTitle = styled.h2`
  color: ${props => props.theme.black};
  font-family: ${p => p.theme.fonts.body};
  font-size: 28px;
  font-weight: 500;
  line-height: 1.37;
  letter-spacing: 0.04em;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    letter-spacing: 0;
  }
`;

export const PetDataWrapper = styled.div`
  background-color: ${props => props.theme.white};
  border-radius: 20px;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 32px;
  padding-bottom: 32px;
`;

export const PetDataInfo = styled.h2`
  color: ${props => props.theme.black};
  font-family: 'Manrope, sans-serif';
  font-size: 18px;
  font-weight: 500;
  line-height: 1.37;
  letter-spacing: 0.04em;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    letter-spacing: 0;
  }
`;
