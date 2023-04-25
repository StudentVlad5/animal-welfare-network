import { useDispatch } from 'react-redux';
import { BtnFilter, FilterNoticesWrapper } from './BtnFilterNotices.styled';
import { addModal } from 'redux/modal/operation';
import { openModalWindow } from 'hooks/modalWindow';
import { useSearchParams } from 'react-router-dom';

export const BtnFilterNotices = () => {
  const dispatch = useDispatch();
  const [, setSearchParams] = useSearchParams();

  const openModalFilter = e => {
    e.preventDefault();
    e.stopPropagation();
    if (e.currentTarget.dataset.modal === 'filterModal') {
      dispatch(
        addModal({
          modal: e.currentTarget.dataset.modal,
        }),
      );
      openModalWindow(e, null);
    }
  };

  const handleClearAll = () => {
    localStorage.setItem('typeofpet', '');
    localStorage.setItem('sex', '');
    // localStorage.setItem('birthday', '');
    localStorage.setItem('size', '');
    localStorage.setItem('sterilization', '');
    localStorage.setItem('lives', '');
    setSearchParams({ page: 1, perPage: 12 });
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
      <BtnFilter
        type="button"
        onClick={handleClearAll}
        disabled={
          localStorage.getItem('typeofpet') ||
          localStorage.getItem('sex') ||
          localStorage.getItem('size') ||
          localStorage.getItem('typeofpet') ||
          localStorage.getItem('sterilization') ||
          localStorage.getItem('lives')
            ? false
            : true
        }
      >
        clear filter
      </BtnFilter>
    </FilterNoticesWrapper>
  );
};
