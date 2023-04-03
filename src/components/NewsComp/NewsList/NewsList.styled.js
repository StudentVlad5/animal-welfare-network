import styled from 'styled-components';

const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 40px);
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 40px;

  margin: 0 auto;
  padding: 0;

  @media screen and (min-width: 768px) {
    max-width: calc(100vw - 64px);
    grid-template-columns: repeat(auto-fill, minmax(336px, 1fr));
    grid-row-gap: 60px;
    grid-column-gap: 32px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    grid-template-columns: repeat(auto-fill, minmax(390px, 1fr));
  }
`;

export { List };
