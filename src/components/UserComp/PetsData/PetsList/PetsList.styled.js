import styled from 'styled-components';

export const PetsListWrapper = styled.ul`
  @media screen and (min-width: 1600px) {
    display: grid;
    // grid-template-columns: repeat(2, 1fr);
    gap: 60px 33px;
    max-width: 1000px;
  }

  /* @media screen and (min-width: 768px) {
    }  

    @media screen and (min-width: 1280px) {
    }  */
`;
