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
import { useTranslation } from 'react-i18next';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <HeroSection>
      <HeroContainer>
        <HeroTitle>{t('Take good care of your small pets')}</HeroTitle>
        <Heart src={heart} width={91} height={89} alt="heart" />
        <Ball src={ball} width={64} height={64} alt="ball" />
      </HeroContainer>
    </HeroSection>
  );
};
