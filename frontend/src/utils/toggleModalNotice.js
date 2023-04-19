import { addModal } from 'redux/modal/operation';
import { openModalWindow } from 'hooks/modalWindow';
import { onInfo } from 'components/helpers/Messages/NotifyMessages';

export const toggleModalAddNotice = (e, isLoggedIn, dispatch) => {
  e.preventDefault();
  e.stopPropagation();
  if (!isLoggedIn) {
    onInfo('You must be loggined!');
  }
  if (isLoggedIn && e.currentTarget.dataset.modal === 'formSell') {
    dispatch(
      addModal({
        modal: e.currentTarget.dataset.modal,
      }),
    );
    openModalWindow(e, null);
  }
};
