import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 10px;

  @media screen and (min-width: 768px) {
    gap: 30px;
  }

  @media screen and (min-width: 1280px) {
    justify-content: space-between;
  }
`;

export { List };
