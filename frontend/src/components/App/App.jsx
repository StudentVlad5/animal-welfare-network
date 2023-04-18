import { lazy, useEffect, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom'; //Navigate
import { RestrictedRoute } from 'routes/RestrictedRoute';
import { PrivateRoute } from 'routes/PrivateRoute';
import { SharedLayout } from '../SharedLayout/SharedLayout';
import { ApiDocs } from '../ApiDocs/ApiDocs';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';

const HomePage = lazy(() => import('pages/Home'));
const OurFriendsPage = lazy(() => import('pages/OurFriends'));
const NoticesPage = lazy(() => import('pages/Notices'));
const NewsPage = lazy(() => import('pages/News'));
const UserPage = lazy(() => import('pages/User'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));

export const App = ({ theme, setTheme }) => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  // const user = useSelector(selectUser)
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <></>
  ) : (
    <HelmetProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={<SharedLayout theme={theme} setTheme={setTheme} />}
          >
            <Route index element={<HomePage />} />

            <Route
              path="register"
              element={
                <RestrictedRoute
                  redirectTo="/user"
                  component={<RegisterPage />}
                />
              }
            />

            <Route
              path="login"
              element={
                <RestrictedRoute redirectTo="/user" component={<LoginPage />} />
              }
            />

            <Route path="news" element={<NewsPage />} />

            <Route path="notices/:id" element={<NoticesPage />} />

            <Route
              path="notices/:favorite"
              element={
                <PrivateRoute
                  redirectTo="/register"
                  component={<NoticesPage />}
                />
              }
            />

            <Route
              path="notices/:own"
              element={
                <PrivateRoute
                  redirectTo="/register"
                  component={<NoticesPage />}
                />
              }
            />

            <Route path="friends" element={<OurFriendsPage />} />

            <Route
              path="api-docs"
              element={
                <RestrictedRoute
                  redirectTo="/api-docs"
                  component={<ApiDocs />}
                />
              }
            />

            <Route
              path="user"
              element={
                <PrivateRoute redirectTo="/register" component={<UserPage />} />
              }
            />

            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </Suspense>
    </HelmetProvider>
  );
};
