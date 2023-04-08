import { useEffect, useState } from 'react';
import { SiDatadog } from 'react-icons/si';
import { useDispatch } from 'react-redux';
import { openModalWindow } from 'hooks/modalWindow';
import { addModal } from 'redux/modal/operation';
import {
  FooterSection,
  FooterContainer,
  Copyright,
  Developers,
  Description,
  TeamModalBtn,
} from './Footer.styled';
import { ModalTeam } from './ModalTeam/ModalTeam';

export const Footer = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = e => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(
      addModal({
        modal: e.currentTarget.dataset.modal,
      }),
    );
    openModalWindow(e, null);
    setIsOpenModal(true);
  };

  return (
    <>
      <FooterSection id="footer">
        <FooterContainer>
          <Copyright>&#169; 2023 | All Rights Reserved |</Copyright>
          <Developers>
            <Description>Developed by</Description>
            <TeamModalBtn
              onClick={e => {
                toggleModal(e);
              }}
              data-modal="developers"
            >
              <SiDatadog size={16} />
            </TeamModalBtn>
          </Developers>
        </FooterContainer>
      </FooterSection>
      {isOpenModal && <ModalTeam />}
    </>
  );
};
