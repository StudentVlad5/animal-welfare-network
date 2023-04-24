import { HiArrowLeft } from 'react-icons/hi';
import { GoBack } from './BackLink.styled';

export const BackButton = ({ to, children }) => {
  return (
    <GoBack to={to}>
      <HiArrowLeft size="10" />
      {children}
    </GoBack>
  );
};
