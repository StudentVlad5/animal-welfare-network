import styled from 'styled-components';
import { baseColor } from 'components/baseStyles/Variables.styled';
import {
  Container,
  Section,
  Title,
} from 'components/baseStyles/CommonStyle.styled';
import waveMobile from 'images/hero/waveMobileFull.webp';
import waveTabFull from 'images/hero/waveTabFull.webp';
import waveLeftDesk from 'images/hero/wave1-desk.webp';
import waveRightDesk from 'images/hero/wave2Full.webp';
import CatAndDog from 'images/hero/dog-cat.png';
import CatAndDog_w from 'images/hero/dog-cat.webp';

const HeroSection = styled(Section)`
  height: 100%;
  padding: 0;
`;

const HeroContainer = styled(Container)`
  position: relative; // for img

  height: 100%;
  width: 100%;
  min-height: calc(100vh - 140px);

  justify-content: start;
  align-items: start;

  @media screen and (max-width: 767.9px) {
    background-image: url(${CatAndDog}), url(${waveMobile});
    background-image: -webkit-image-set(url(${CatAndDog_w}) 1x),
      -webkit-image-set(url(${waveMobile}) 1x);

    background-repeat: no-repeat;
    background-size: 320px auto, 620px auto;
    background-position: bottom 0px left 70%, bottom -20px left 25%;
  }
  @media screen and (min-width: 768px) and (max-width: 1279.9px) {
    background-image: url(${CatAndDog}), url(${waveTabFull});
    background-image: -webkit-image-set(url(${CatAndDog_w}) 1x),
      -webkit-image-set(url(${waveTabFull}) 1x);

    background-repeat: no-repeat;
    background-size: 670px auto, 1400px auto;
    background-position: bottom 0px left 70%, bottom -150px left 30%;
  }

  @media screen and (min-width: 1280px) {
    min-height: calc(100vh - 120px);

    background-image: url(${CatAndDog}), url(${waveRightDesk}),
      url(${waveLeftDesk});
    background-image: -webkit-image-set(url(${CatAndDog_w}) 1x),
      -webkit-image-set(url(${waveRightDesk}) 1x),
      -webkit-image-set(url(${waveLeftDesk}) 1x);

    background-repeat: no-repeat;
    background-size: 524px auto, 425px 393px, 1178px 450px;
    background-position: bottom 0px left 92%, bottom 0px right 0px,
      bottom 0px left 0px;
  }
`;

const Heart = styled.img`
  display: none;

  @media screen and (min-width: 1280px) {
    display: block;
    position: absolute;
    top: 60px;
    left: 650px;

    animation: heartbeat 1.5s ease-in-out infinite both;
  }

  @keyframes heartbeat {
    from {
      transform: scale(1);
      transform-origin: center center;
      animation-timing-function: ease-out;
    }
    10% {
      transform: scale(0.85);
      animation-timing-function: ease-in;
    }
    17% {
      transform: scale(0.95);
      animation-timing-function: ease-out;
    }
    33% {
      transform: scale(0.85);
      animation-timing-function: ease-in;
    }
    45% {
      transform: scale(1);
      animation-timing-function: ease-out;
    }
  }
`;

const Ball = styled.img`
  display: none;

  @media screen and (min-width: 1280px) {
    display: block;
    position: absolute;
    bottom: 200px;
    left: 465px;

    animation: bounce-in-top 4s both;
  }

  @keyframes bounce-in-top {
    0% {
      transform: translateY(-700px);
      animation-timing-function: ease-in;
    }
    40% {
      transform: translateY(300px);
      animation-timing-function: ease-out;
    }
    70% {
      transform: translateY(-200px);
      animation-timing-function: ease-in;
    }
    100% {
      transform: translateY(0px);
      animation-timing-function: ease-out;
    }
  }
`;

const HeroTitle = styled(Title)`
  margin-top: 60px;
  margin-bottom: 0;
  text-align: left;
  font-size: 32px;
  color: ${baseColor.colors.blackText};

  @media screen and (min-width: 768px) {
    margin-top: 88px;
    font-size: 68px;
    line-height: 1.47;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 92px;
    max-width: 630px;
  }
`;

export { HeroSection, HeroContainer, HeroTitle, Heart, Ball };
