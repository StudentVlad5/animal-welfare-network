import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';
import { MdClose } from 'react-icons/md';
import { closeModalWindow } from 'hooks/modalWindow';
import { cleanModal } from 'redux/modal/operation';
import { TeamList } from '../TeamList/TeamList';
// import { fetchData } from 'services/APIservice';
import { onFetchError } from 'components/helpers/Messages/NotifyMessages';
import { onLoaded, onLoading } from 'components/helpers/Loader/Loader';
import { BackDrop, Modal, CloseIconBtn } from './ModalTeam.styled';
import { Title } from 'components/baseStyles/CommonStyle.styled';
import developers from '../TeamList/developers';

export const ModalTeam = () => {
  const [team, setTeam] = useState(developers);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function getData() {
      setIsLoading(true);
      try {
        // const { data } = await fetchData('/developers');
        setTeam(developers); // without backend
        if (!team) {
          return onFetchError('Whoops, something went wrong');
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [team]);

  //close modal window
  const dispatch = useDispatch();
  const closeModalTeam = e => {
    // e.preventDefault();
    dispatch(cleanModal());
    closeModalWindow(e);
  };

  return createPortal(
    <BackDrop
      onClick={e => {
        if (e.currentTarget === e.target) closeModalTeam(e);
      }}
    >
      <Modal>
        <CloseIconBtn onClick={e => closeModalTeam(e)} aria-label="Close modal">
          <MdClose size={15} />
        </CloseIconBtn>
        <Title as="h2" size="20px">
          Development team
        </Title>
        {isLoading ? onLoading() : onLoaded()}
        {error && onFetchError('Whoops, something went wrong')}
        {team.length > 0 && !error && <TeamList developers={team} />}
      </Modal>
    </BackDrop>,
    document.querySelector('#popup-root'),
  );
};
