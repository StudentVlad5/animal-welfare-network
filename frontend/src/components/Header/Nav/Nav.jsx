import React from 'react';
import { MobileNavList, NavList, NavItem } from './Nav.styled';
import { useSearchParams } from 'react-router-dom';

export const MobileNav = ({ toggleMenu }) => {
  const [searchParams] = useSearchParams();
  searchParams.set('perPage', 12);
  searchParams.set('page', 1);

  return (
    <MobileNavList>
      <NavItem to={`/news?${searchParams}`} onClick={toggleMenu}>
        News
      </NavItem>
      <NavItem to={`/notices/sell?${searchParams}`} onClick={toggleMenu}>
        Find pet
      </NavItem>
      <NavItem to="/friends" onClick={toggleMenu}>
        Our friends
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
      <NavItem to={`/notices/sell?${searchParams}`}>
        Find pet
      </NavItem>
      <NavItem to="/friends">Our friends</NavItem>
    </NavList>
  );
};
