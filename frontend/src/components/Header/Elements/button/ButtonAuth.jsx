import PropTypes from 'prop-types';
import { AuthLink } from './ButtonAuth.styled';

export const ButtonAuth = ({ title, path, onClick, ...otherprops }) => {
  return (
    <AuthLink to={path} onClick={onClick} {...otherprops}>
      {title}
    </AuthLink>
  );
};

ButtonAuth.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  otherprops: PropTypes.string,
};
