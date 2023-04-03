import React from 'react';
import { useState } from 'react';
import { Burger, MobileMenuSection } from './menu.styled';
import { MobileMenu } from 'components/Header/MobileMenu/MobileMenu';

export const Menu = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <Burger onClick={handleToggle}></Burger>
      <MobileMenuSection
        className={`collapsed ${isExpanded ? 'is-expanded' : ''}`}
      >
        <MobileMenu toggleMenu={handleToggle} />
      </MobileMenuSection>
    </>
  );
};
