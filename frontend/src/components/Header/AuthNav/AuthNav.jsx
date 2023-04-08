import PropTypes from 'prop-types';
import { ButtonAuth } from '../Elements/button/ButtonAuth';
import { MobileContainer, Container } from './AuthNav.styled';

export const MobileAuthNav = ({ toggleMenu }) => {
  return (
    <MobileContainer>
      <ButtonAuth title="Login" path="/login" onClick={toggleMenu} />
      <ButtonAuth title="Registration" path="/register" onClick={toggleMenu} />
    </MobileContainer>
  );
};

export const AuthNav = ({ toggleMenu }) => {
  return (
    <Container>
      <ButtonAuth title="Login" path="/login" onClick={toggleMenu} />
      <ButtonAuth title="Registration" path="/register" onClick={toggleMenu} />
    </Container>
  );
};

MobileAuthNav.propTypes = {
  toggleMenu: PropTypes.func,
};

AuthNav.propTypes = {
  toggleMenu: PropTypes.func,
};
