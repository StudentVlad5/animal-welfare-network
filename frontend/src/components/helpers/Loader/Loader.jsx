import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { lightTheme } from 'components/baseStyles/Variables.styled';

const onLoading = () => {
  return Loading.circle('Loading...', {
    backgroundColor: 'transparent',
    svgSize: '160px',
    svgColor: `${props => props.theme.orangeLight}`,
    messageFontSize: '20px',
  });
};

const onLoaded = () => {
  return Loading.remove();
};

export { onLoading, onLoaded };
