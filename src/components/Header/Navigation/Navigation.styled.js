import styled from 'styled-components';

const Container = styled.div`
  display: flex;

  @media screen and (min-width: 768px) and (max-width: 1280px) {
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
    margin-left: 80px;
  }
`;

const NavBlock = styled.div`
  display: flex;
  justify-content: end;

  @media screen and (min-width: 768px) and (max-width: 1280px) {
    display: flex;
    justify-content: end;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: start;
    width: 100%;
    // margin-left: 80px;
  }
`;
export { Container, NavBlock };
