import React from 'react';
import { MobileNavList, NavList, NavItem } from './Nav.styled';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const MobileNav = ({ toggleMenu }) => {
  const [searchParams] = useSearchParams();
  searchParams.set('perPage', 12);
  searchParams.set('page', 1);
  const { t } = useTranslation();

  return (
    <MobileNavList>
      <NavItem to={`/news?${searchParams}`} onClick={toggleMenu}>
        {t('News')}
        {/* News */}
      </NavItem>
      <NavItem to={`/notices/sell?${searchParams}`} onClick={toggleMenu}>
        {t('Find pet')}
        {/* Find pet */}
      </NavItem>
      <NavItem to="/friends" onClick={toggleMenu}>
        {t('Our friends')}
        {/* Our friends */}
      </NavItem>
    </MobileNavList>
  );
};

export const Nav = () => {
  const [searchParams] = useSearchParams();
  searchParams.set('perPage', 12);
  searchParams.set('page', 1);

  return (
    <NavList>
      <NavItem to={`/news?${searchParams}`}>News</NavItem>
      <NavItem to={`/notices/sell?${searchParams}`}>Find pet</NavItem>
      <NavItem to="/friends">Our friends</NavItem>
    </NavList>
  );
};
