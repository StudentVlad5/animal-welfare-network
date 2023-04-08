import React from 'react';
import {
  HeroSection,
  HeroContainer,
  HeroTitle,
  Heart,
  Ball,
} from './Hero.styled';
import heart from 'images/hero/heart.webp';
import ball from 'images/hero/ball.webp';

export const Hero = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <HeroTitle>Take good care of your small pets</HeroTitle>
        <Heart src={heart} width={91} height={89} />
        <Ball src={ball} width={64} height={64} />
      </HeroContainer>
    </HeroSection>
  );
};
