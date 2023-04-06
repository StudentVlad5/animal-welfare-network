import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';
import { baseColor } from 'components/baseStyles/Variables.styled';

export const GlobalStyle = createGlobalStyle`
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Manrope Medium', 'Manrope Bold', 'Manrope SemiBold', 
  'Manrope Regular', 'Poppins Regular','Poppins Bold', 'Inter Regular' ,'Inter Medium', 'Inter Bold',
  'Montserrat Regular', 'Montserrat Medium', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background-color: ${baseColor.colors.mainBg};

    &.scroll {
      max-height: 100vh;
      overflow: hidden;
    }
 }

#root {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

 //-----reset-----
h1, h2, h3, h4, h5, h6, p {
  padding: 0;
  margin: 0;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

img {
  display:block;
  max-width: 100%;
  height: auto;
}

//-----modal windows-----//
#popup-root {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 45;

    width: 100vw;
    height: 100vh;

    opacity: 1;
    visibility: visible;

    background-color: #0000006b;
    transition: opacity .3s linear 50ms, visibility .3s linear 50ms; 
}

#popup-root.is-hide {
  pointer-events: none;
  opacity: 0;
  visibility: hidden;

  width: 0;
  height: 0;
}

 //-----pagination-----//
.paginate__container {
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: calc(100vw - 40px);

  margin: 50px auto;
  padding: 6px 12px;
  border-radius: 20px;

  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.375;
  letter-spacing: 0.04em;
  text-align: left;

  color: ${baseColor.colors.mainBg};
  background-color: rgba(245, 146, 86, 0.8);
  box-shadow: 0px 0px 5px 0px ${baseColor.colors.inpText};

  @media screen and (min-width: 768px) {
    font-size: 24px;
    border-radius: 50px;
    padding: 8px 16px;
    max-width: calc(100vw - 64px);
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
}

.paginate__page, .paginate__page--prev, .paginate__page--next, .paginate__page--break {
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  width: 30px;
  height: 30px;

  transition: all .25s ease-in;

  &:hover, &:focus {
    border: 3px solid rgba(253, 247, 242, 0.3);
    border-radius: 50%;
  }

  @media screen and (min-width: 768px) {
    width: 38px;
    height: 38px;
  }
}

.paginate__link {
  display: block;
}

.paginate__page--disabled {
  pointer-events: none;
  opacity: 0.5;
}

.paginate__page--active {
  pointer-events: none;
  border-radius: 50%;
  border: 3px solid ${baseColor.colors.mainBg};
  color: ${baseColor.colors.white};
}
`;
