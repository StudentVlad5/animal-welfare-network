import ScrollToTop from 'react-scroll-to-top';
import { theme } from 'components/baseStyles/Variables.styled';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';

const ScrollTop = () => {
  return (
    <ScrollToTop
      smooth
      top="400"
      style={{
        width: '40px',
        height: '40px',
        backgroundColor: `${theme.light.orangeLight}`,
        color: `${theme.light.white}`,
        fontSize: '16px',
      }}
      component={<MdKeyboardDoubleArrowUp size={30} />}
    />
  );
};

export { ScrollTop };
