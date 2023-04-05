import styled from 'styled-components';
import { baseColor } from 'components/baseStyles/Variables.styled';
import { Container } from 'components/baseStyles/CommonStyle.styled';
import waveMobile from 'images/hero/waveMobileFull.webp';
import DogMobile from 'images/hero/dogMobile-X1.webp';
import DogTab from 'images/hero/dogTab-X1.webp';
import DogDesk from 'images/hero/dogDesk-X1.webp';
import waveTabFull from 'images/hero/waveTabFull.webp';
import waveLeftDesk from 'images/hero/wave1-desk.webp';
import waveRightDesk from 'images/hero/wave2Full.webp';
import heart from 'images/hero/heart.webp';
import ball from 'images/hero/ball.webp';
import animalPaw from 'images/hero/animalPow.png';

const HeroSection = styled.section`
  height: 100%;
  min-height: 720px;
  @media screen and (max-width: 767.9px) {
    min-height: 550px;
    background: url(${DogMobile}), url(${waveMobile});
    background-repeat: no-repeat;
    background-size: 280px auto, 620px auto;
    background-position: bottom 0px left 50%, bottom -20px left 25%;
  }
  @media screen and (min-width: 768px) and (max-width: 1279.9px) {
    min-height: 1200px;
    background: url(${DogTab}), url(${waveTabFull});
    background-repeat: no-repeat;
    background-size: 636px auto, 1400px auto;
    background-position: bottom 0px left 50%, bottom -150px left 30%;
  }
`;

const HeroContainer = styled(Container)`
  position: relative;
  height: 100%;
  justify-content: start;
  align-items: start;
  @media screen and (min-width: 1280px) {
    overflow: hidden;
    background-image: url(${DogDesk}), url(${waveRightDesk}),
      url(${waveLeftDesk});
    background-repeat: no-repeat;
    background-size: 524px auto, 425px 393px, 1178px 450px;
    background-position: bottom 0px left 92%, bottom 0px right 0px,
      bottom 0px left 0px;
  }
`;

const HeartContainer = styled.div`
  @media screen and (min-width: 1280px) {
    position: absolute;
    top: 60px;
    left: 650px;
    height: 89px;
    width: 91px;
    background-image: url(${heart});
    background-repeat: no-repeat;
    animation: heartbeat 1.5s ease-in-out infinite both;
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
  }
`;

const AnimalPaw = styled.div`
  @media screen and (min-width: 1280px) {
    position: absolute;
    bottom: -240px;
    left: 450px;
    height: 500px;
    width: 100px;
    background-image: url(${animalPaw});
    background-repeat: no-repeat;
    background-size: contain;

    animation: bounce-in-bottom 3s both;
    animation-delay: 3s;
  }
  @keyframes bounce-in-bottom {
    0% {
      transform: translateY(280px);
      animation-timing-function: ease-in;
    }
    30% {
      transform: translateY(0);
      animation-timing-function: ease-in;
    }
    70% {
      transform: translateY(0);
      animation-timing-function: ease-in;
    }
    100% {
      transform: translateY(280px);
      animation-timing-function: ease-in;
    }
  }
`;

const BallContainer = styled.div`
  @media screen and (min-width: 1280px) {
    position: absolute;
    bottom: 220px;
    left: 465px;
    height: 64px;
    width: 64px;
    background-image: url(${ball});
    background-repeat: no-repeat;
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

  /* @keyframes bounce-in-top {
    0% {
      transform: translateY(-700px);
      animation-timing-function: ease-in;
    }
    35% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
    50% {
      transform: translateY(-200px);
      animation-timing-function: ease-in;
    }
    65% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
    75% {
      transform: translateY(-70px);
      animation-timing-function: ease-in;
    }
    84% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
    90% {
      transform: translateY(-20px);
      animation-timing-function: ease-in;
    }
    94% {
      transform: translateY(0px);
      animation-timing-function: ease-in;
    }
    97% {
      transform: translateY(-10px);
      animation-timing-function: ease-in;
    }
    100% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
  } */
  /* @keyframes bounce-in-top {
    0% {
      transform: translateY(-500px);
      animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
      transform: translateY(0);
      animation-timing-function: ease-out;
      opacity: 1;
    }
    55% {
      transform: translateY(-65px);
      animation-timing-function: ease-in;
    }
    72% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
    81% {
      transform: translateY(-28px);
      animation-timing-function: ease-in;
    }
    90% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
    95% {
      transform: translateY(-8px);
      animation-timing-function: ease-in;
    }
    100% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
  } */
`;

const HeroTitle = styled.h1`
  margin-top: 60px;
  text-align: left;
  /* margin-right: auto; */
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: ${baseColor.colors.blackText};
  @media screen and (min-width: 768px) {
    margin-top: 88px;
    font-size: 68px;
    line-height: 100px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 92px;
    max-width: 630px;
  }
`;
export {
  HeroSection,
  HeroContainer,
  HeroTitle,
  HeartContainer,
  BallContainer,
  AnimalPaw,
};
