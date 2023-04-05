import { AddNoticeModal } from './AddNoticeModal/AddNoticeModal';
import { ButtonStyled, PlusIcon } from './AddNoticeButton.styled';
import { useDispatch } from 'react-redux';
import { addModal } from 'redux/modal/operation';
import { openModalWindow } from 'hooks/modalWindow';
import { onInfo } from 'components/helpers/Messages/NotifyMessages';
import { fetchData } from 'services/APIservice';
import { addBreeds } from 'redux/breeds/slice';
import { useAuth } from 'hooks/useAuth';

export const AddNoticeButton = () => {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  const toggleModalAddNotice = e => {
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

  async function getData() {
    try {
      const { data } = await fetchData('/breeds');
      dispatch(addBreeds(data));
      if (!data) {
        return alert('Whoops, something went wrong');
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div style={{ marginLeft: 'auto', position: 'relative' }}>
      <ButtonStyled
        onClick={e => {
          toggleModalAddNotice(e);
          getData();
        }}
        data-modal="formSell"
      >
        <div>
          <PlusIcon />
        </div>
        Add pet
      </ButtonStyled>
      {isLoggedIn && <AddNoticeModal />}
    </div>
  );
};
