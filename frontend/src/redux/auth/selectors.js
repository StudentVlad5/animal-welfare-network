export const selectIsLoggedIn = ({ auth }) => auth.isLoggedIn;
export const selectUser = ({ auth }) => auth.user.userName;
export const selectFavorites = ({ auth }) => auth.user.favorites;
export const selectIsRefreshing = ({ auth }) => auth.isRefreshing;
export const selectId = ({ auth }) => auth.user._id;
export const getUser = ({ auth }) => auth.user;
export const getPermission = ({ auth }) => auth.permission;
