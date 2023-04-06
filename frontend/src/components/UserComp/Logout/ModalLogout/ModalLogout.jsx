import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import {
  ModalWrapper,
  CloseBtnWrapper,
  ModalCloseBtn,
  CloseIcon,
  ModalDescription,
  ModalButtonWrapper,
  ModalButton,
} from './ModalLogout.styled';

export const ModalLogout = ({ _id, onClose, onCloseBtn }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(logOut());
    onClose();
  };

  return (
    <ModalWrapper>
      <CloseBtnWrapper>
        <ModalCloseBtn type="button" onClick={onCloseBtn}>
          <CloseIcon />
        </ModalCloseBtn>
      </CloseBtnWrapper>
      <ModalDescription>Are you sure you want to exit?</ModalDescription>
      <ModalButtonWrapper>
        <ModalButton type="button" onClick={handleDelete}>
          Yes
        </ModalButton>
        <ModalButton
          type="button"
          onClick={onCloseBtn}
          style={{
            backgroundColor: '#F59256',
            color: 'white',
            marginLeft: '20px',
          }}
        >
          No
        </ModalButton>
      </ModalButtonWrapper>
    </ModalWrapper>
  );
};
