import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Manrope Medium', 'Manrope Bold', 'Manrope SemiBold', 
  'Manrope Regular', 'Poppins Regular','Poppins Bold', 'Inter Regular' ,'Inter Medium', 'Inter Bold',
  'Montserrat Regular', 'Montserrat Medium', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background-color: ${props => props.theme.mainBg};
  transition: .3s ease;
  &.scroll {
      max-height: 100vh;
      overflow: hidden;
    }
 }

#root {
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

  color: ${props => props.theme.mainBg};
  background-color: rgba(245, 146, 86, 0.8);
  box-shadow: 0px 0px 5px 0px ${props => props.theme.inpText};

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
  border: 3px solid ${props => props.theme.white};
  color: ${props => props.theme.white};
}


//-----react-select-----//

.react-select-container {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px 15px 10px 15px;


  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.375;
  letter-spacing: 0.04em;
  text-align: left;
  color: ${props => props.theme.inpText};

  &::placeholder {
    color: rgba(27, 27, 27, 0.6);
  }
  height: 40px;
  width: 100%;

  margin-bottom: 16px;

  background: ${props => props.theme.mainBg};
  border: 1px solid ${props => props.theme.orangeLight};
  border-radius: 40px;
  outline: none;
  transition: all 0.25s ease-in;
  &:hover {
    outline: 2px solid ${props => props.theme.orangeLight};
  }

  &:focus {
    outline: 3px solid ${props => props.theme.orangeLight};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    display: none;
  }



  @media screen and (min-width: 768px) {
    font-size: 16px;
    height: 48px;
    margin-bottom: 28px;
  }
}

.react-select__control, .react-select__control--is-focused, react-select__control--menu-is-open {
width: 100%;
padding: 0!important;
margin: 0!important;
border: none!important;
box-shadow: none!important;

background-color: transparent!important;
}

.react-select__input-container {
padding: 0!important;
margin: 0!important;
}

.react-select__placeholder {
padding: 0!important;
margin: 0!important;

color: ${props => props.theme.inpText}!important;
}

.react-select__indicators {
padding: 0!important;
margin: 0!important;
}

.react-select__menu {
}

.react-select__menu-list {
}

.react-select__option--is-focused {
background-color: ${props => props.theme.mainBg}!important;
}

.react-select__option--is-selected {
background-color: ${props => props.theme.orangeLight}!important;
}


.react-select__input-container {
padding: 0!important;
margin: 0!important;
}

.react-select__value-container {
padding: 0!important;
margin: 0!important;
}

//-----Swiper-----//

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-button-next::after {
  color: ${props => props.theme.orangeLight};
}

.swiper-button-prev::after {
  color: ${props => props.theme.orangeLight};
}

.swiper-pagination-bullet-active {
  background-color: ${props => props.theme.orangeLight}!important;
}

.swiper-button-prev,
.swiper-button-next,
.swiper-pagination-bullet {
  transform: scale(1.7);
}
`;
