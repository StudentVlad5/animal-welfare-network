import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Main, Wrapper } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Wrapper>
      <Header />
      <Suspense fallback={null}>
        <Main>
          <Outlet />
        </Main>
      </Suspense>
    </Wrapper>
  );
};
