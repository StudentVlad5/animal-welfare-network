export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user.userName;
export const selectFavorites = state => state.auth.user.favorites;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectId = state => state.auth.user._id;
export const getUser = ({ auth }) => auth.user;
export const getPermission = ({ auth }) => auth.permission;
