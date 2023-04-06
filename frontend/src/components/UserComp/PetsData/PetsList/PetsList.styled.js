import styled from 'styled-components';

export const PetsListWrapper = styled.ul`
  display: grid;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1000px;
    gap: 22px;
  }
`;
