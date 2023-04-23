// import { useState } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { closeModalWindow } from 'hooks/modalWindow';
import { cleanModal } from 'redux/modal/operation';
import { modalComponent } from 'redux/modal/selectors';
import { FilterForm } from '../FilterForm/FilterForm';
import {
  ContainerCloseModal,
  ContainerPositionForCloseModal,
  FilterContainerItem,
  BackDrop,
} from './FilterModal.styled';

export const FilterModal = () => {
  const dispatch = useDispatch();
  const modal = useSelector(modalComponent);

  const closeModal = e => {
    e.preventDefault();
    dispatch(cleanModal());
    closeModalWindow(e);
  };
  //   const прописуємо всі стейти по фільтру;
  //   const [, setIsLoading] = useState(false);
  //   const [, setError] = useState(null);

  return ReactDOM.createPortal(
    Object.values(modal)[0] === 'filterModal' && (
      <BackDrop onClick={closeModal}>
        <FilterContainerItem onClick={e => e.stopPropagation()}>
          <ContainerPositionForCloseModal>
            <ContainerCloseModal onClick={closeModal}>
              <MdClose style={{ width: '15.5px', height: '15.5px' }} />
            </ContainerCloseModal>
          </ContainerPositionForCloseModal>
          <FilterForm closeModal={closeModal} />
        </FilterContainerItem>
      </BackDrop>
    ),
    document.querySelector('#popup-root'),
  );
};
