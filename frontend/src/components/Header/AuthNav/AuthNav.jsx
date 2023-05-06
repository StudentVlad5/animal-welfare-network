import PropTypes from 'prop-types';
import { ButtonAuth } from '../Elements/button/ButtonAuth';
import { MobileContainer, Container } from './AuthNav.styled';
import { useTranslation } from 'react-i18next';

export const MobileAuthNav = ({ toggleMenu }) => {
  const { t } = useTranslation();

  return (
    <MobileContainer>
      <ButtonAuth title={t('Login')} path="/login" onClick={toggleMenu} />
      <ButtonAuth
        title={t('Registration')}
        path="/register"
        onClick={toggleMenu}
      />
    </MobileContainer>
  );
};

export const AuthNav = ({ toggleMenu }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <ButtonAuth title={t('Login')} path="/login" onClick={toggleMenu} />
      <ButtonAuth
        title={t('Registration')}
        path="/register"
        onClick={toggleMenu}
      />
    </Container>
  );
};

MobileAuthNav.propTypes = {
  toggleMenu: PropTypes.func,
};

AuthNav.propTypes = {
  toggleMenu: PropTypes.func,
};
