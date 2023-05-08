import { useEffect, useState } from 'react';
import {
  LogoutBtn,
  LogoutBtnText,
  LogoutIconStyled,
  Modal,
} from './Logout.styled';
import { ModalLogout } from './ModalLogout/ModalLogout';
import { useTranslation } from 'react-i18next';

export const Logout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(state => !state);
  const { t } = useTranslation();

  useEffect(() => {
    if (!isModalOpen) {
      document.body.style.overflow = '';
    }
  }, [isModalOpen]);

  return (
    <>
      <LogoutBtn onClick={toggleModal}>
        <LogoutIconStyled />
        <LogoutBtnText>{t("Log Out")}</LogoutBtnText>
      </LogoutBtn>

      {isModalOpen && (
        <Modal setShow={toggleModal}>
          <ModalLogout onClose={toggleModal} onCloseBtn={toggleModal} />
        </Modal>
      )}
    </>
  );
};
