import styled from 'styled-components';

const ContainerStatus = styled.ul`
  display: grid;
  grid-template-rows: auto;
  max-width: 280px;
  grid-template-columns: 1fr;
  gap: 20px;

  @media screen and (min-width: 768px) and (max-width: 1279.5px) {
    max-width: 704px;
    grid-template-columns: 1fr 1fr;
    padding: 60px 0;
    gap: 32px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1248px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 60px 0;
    gap: 32px;
  }
`;

export { ContainerStatus };
