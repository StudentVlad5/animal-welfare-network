export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user.userName;
export const selectFavorites = state => state.auth.user.favorites;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selecId = state => state.auth.user;
export const getUser = ({ auth }) => auth.user;
