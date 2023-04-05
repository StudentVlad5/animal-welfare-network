import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 16px;
  max-width: calc(100vw - 40px);

  /* display: -ms-grid;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  -ms-grid-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-template-rows: 1fr;
  grid-auto-rows: 1fr;
  grid-gap: 16px; */

  @media screen and (min-width: 768px) {
    gap: 32px;
    max-width: calc(100vw - 64px);

    /* grid-template-columns: repeat(auto-fit, minmax(336px, 1fr));
    -ms-grid-columns: repeat(auto-fit, minmax(336px, 1fr));
    grid-auto-rows: auto;
    -ms-grid-rows: auto;
    grid-gap: 32px; */
  }

  @media screen and (min-width: 1280px) {
    justify-content: space-between;
    max-width: 1280px;

    /* grid-template-columns: repeat(auto-fill, minmax(390px, 1fr));
    -ms-grid-columns: repeat(auto-fill, minmax(390px, 1fr)); */
  }
`;

export { List };
