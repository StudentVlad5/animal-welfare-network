import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { Main } from './SharedLayout.styled';

export const SharedLayout = ({ theme, setTheme }) => {
  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <Suspense fallback={null}>
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </Suspense>
    </>
  );
};
