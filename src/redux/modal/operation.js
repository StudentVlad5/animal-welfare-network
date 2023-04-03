import { modalSlice } from './slice';
export const addModal = b => (dispatch, getState) => {
  dispatch(modalSlice.actions.addModal({ ...b }));
};
export const cleanModal = () => (dispatch, getState) => {
  dispatch(modalSlice.actions.cleanModal());
};
