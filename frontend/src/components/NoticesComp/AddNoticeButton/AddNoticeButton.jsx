import { AddNoticeModal } from './AddNoticeModal/AddNoticeModal';
import { ButtonStyled, PlusIcon } from './AddNoticeButton.styled';
import { useDispatch } from 'react-redux';
// import { addModal } from 'redux/modal/operation';
// import { openModalWindow } from 'hooks/modalWindow';
// import { onInfo } from 'components/helpers/Messages/NotifyMessages';
// import { fetchData } from 'services/APIservice';
// import { addBreeds } from 'redux/breeds/slice';
import { useAuth } from 'hooks/useAuth';
import { toggleModalAddNotice } from 'utils/toggleModalNotice';
import { getBreeds } from 'utils/getBreeds';
import { useTranslation } from 'react-i18next';

export const AddNoticeButton = () => {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <div style={{ marginLeft: 'auto', position: 'relative' }}>
      <ButtonStyled
        onClick={e => {
          toggleModalAddNotice(e, isLoggedIn, dispatch);
          getBreeds(dispatch);
        }}
        data-modal="formSell"
      >
        <div>
          <PlusIcon />
        </div>
        {t('Add pet')}
      </ButtonStyled>
      {isLoggedIn && <AddNoticeModal />}
    </div>
  );
};
