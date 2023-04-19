import { useDispatch } from 'react-redux';
import { BtnFilter, FilterNoticesWrapper } from './BtnFilterNotices.styled';
import { addModal } from 'redux/modal/operation';
import { openModalWindow } from 'hooks/modalWindow';

export const BtnFilterNotices = () => {
  const dispatch = useDispatch();

  const openModalFilter = e => {
    e.preventDefault();
    e.stopPropagation();
    if (e.currentTarget.dataset.modal === 'filterModal') {
      dispatch(
        addModal({
          modal: e.currentTarget.dataset.modal,
          id: e.currentTarget.dataset.id,
        }),
      );
      openModalWindow(e, null);
    }
  };
  return (
    <FilterNoticesWrapper>
      <BtnFilter
        type="button"
        onClick={openModalFilter}
        data-modal="filterModal"
      >
        filter <span style={{ fontSize: '20px' }}>4</span> search
      </BtnFilter>
    </FilterNoticesWrapper>
  );
};
