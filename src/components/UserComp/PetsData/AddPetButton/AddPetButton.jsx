import { openModalWindow } from 'hooks/modalWindow';
import { useDispatch } from 'react-redux';
import { addModal } from 'redux/modal/operation';
import { ModalAddsPet } from '../ModalAddsPet/ModalAddsPet';
import {
  AddPetWrapper,
  AddPetDesc,
  AddPetBtn,
  PlusIcon,
} from './AddPetButton.styled';
import { fetchData } from 'services/APIservice';
import { addBreeds } from 'redux/breeds/slice';

export const AddPetButton = () => {
  const dispatch = useDispatch();

  const toggleModalAddUserPets = e => {
    e.preventDefault();
    e.stopPropagation();
    if (e.currentTarget.dataset.modal === 'formAddPets') {
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
    <AddPetWrapper>
      <AddPetDesc>Add pet</AddPetDesc>
      <AddPetBtn
        type="button"
        onClick={e => {
          toggleModalAddUserPets(e);
          getData();
        }}
        data-modal="formAddPets"
      >
        <PlusIcon />
      </AddPetBtn>
      <ModalAddsPet />
    </AddPetWrapper>
  );
};
