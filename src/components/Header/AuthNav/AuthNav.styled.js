import styled from 'styled-components';

const MobileContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 46px;

  @media screen and (min-width: 768px) {
    margin-top: 0px;
    display: none;
  }
`;
const Container = styled(MobileContainer)`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    // justify-content: center;
    // align-items: center;
  }
`;

export { MobileContainer, Container };
