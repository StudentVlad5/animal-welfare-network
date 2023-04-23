import { lazy, useEffect, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom'; //Navigate
import { RestrictedRoute } from 'routes/RestrictedRoute';
import { PrivateRoute } from 'routes/PrivateRoute';
import { SharedLayout } from '../SharedLayout/SharedLayout';
import { ApiDocs } from '../ApiDocs/ApiDocs';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing, getPermission } from 'redux/auth/selectors';

const HomePage = lazy(() => import('pages/Home'));
const OurFriendsPage = lazy(() => import('pages/OurFriends'));
const NoticesPage = lazy(() => import('pages/Notices'));
const NewsPage = lazy(() => import('pages/News'));
const UserPage = lazy(() => import('pages/User'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const AdminPage = lazy(() => import('pages/Admin/Admin'));
const AdminUsersPage = lazy(() => import('pages/Admin/AdminUsers'));
const AdminNoticesPage = lazy(() => import('pages/Admin/AdminNotices'));

export const App = ({ theme, setTheme }) => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const permission = useSelector(getPermission);

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

            {permission === 'admin' ? (
              <Route
                path="login"
                element={
                  <RestrictedRoute
                    redirectTo="/admin"
                    component={<LoginPage />}
                  />
                }
              />
            ) : (
              <Route
                path="login"
                element={
                  <RestrictedRoute
                    redirectTo="/user"
                    component={<LoginPage />}
                  />
                }
              />
            )}
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
              path="user"
              element={
                <PrivateRoute redirectTo="/register" component={<UserPage />} />
              }
            />

            <Route
              path="admin"
              element={
                <PrivateRoute redirectTo="/user" component={<AdminPage />} />
              }
            />
            <Route
              path="admin/users"
              element={
                <PrivateRoute
                  redirectTo="/admin"
                  component={<AdminUsersPage />}
                />
              }
            />

            <Route
              path="admin/notices"
              element={
                <PrivateRoute
                  redirectTo="/admin"
                  component={<AdminNoticesPage />}
                />
              }
            />

            <Route
              path="api-docs"
              element={
                <RestrictedRoute
                  redirectTo="/api-docs"
                  component={<ApiDocs />}
                />
              }
            />

            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </Suspense>
    </HelmetProvider>
  );
};
