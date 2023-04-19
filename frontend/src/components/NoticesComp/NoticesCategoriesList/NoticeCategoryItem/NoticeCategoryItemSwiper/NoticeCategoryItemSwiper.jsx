import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { closeModalWindow } from 'hooks/modalWindow';
import { cleanModal } from 'redux/modal/operation';
import { modalComponent } from 'redux/modal/selectors';
import {
  NoticesContainerItem,
  ContainerCloseModal,
  ContainerPositionForCloseModal,
  BackDrop,
} from './NoticeCategoryItemSwiper.styled';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const NoticeCategoryItemSwiper = () => {
  const dispatch = useDispatch();
  const modal = useSelector(modalComponent);
  const closeModalForItemPet = e => {
    e.preventDefault();
    dispatch(cleanModal());
    closeModalWindow(e);
  };

  return ReactDOM.createPortal(
    Object.values(modal)[0] === 'swiper' && (
      <BackDrop onClick={closeModalForItemPet}>
        <NoticesContainerItem onClick={e => e.stopPropagation()}>
          <ContainerPositionForCloseModal>
            <ContainerCloseModal onClick={closeModalForItemPet}>
              <MdClose style={{ width: '15.5px', height: '15.5px' }} />
            </ContainerCloseModal>
          </ContainerPositionForCloseModal>
          {modal.image1 ? (
            <>
              {' '}
              <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
              >
                {modal.image1 && (
                  <SwiperSlide>
                    <img src={modal.image1} alt="Pet first" />
                  </SwiperSlide>
                )}
                {modal.image2 && (
                  <SwiperSlide>
                    <img src={modal.image2} alt="Pet first" />
                  </SwiperSlide>
                )}
                {modal.image3 && (
                  <SwiperSlide>
                    <img src={modal.image3} alt="Pet first" />
                  </SwiperSlide>
                )}
              </Swiper>
            </>
          ) : (
            <h2>"Whoops... Don't have information about this pet"</h2>
          )}
        </NoticesContainerItem>
      </BackDrop>
    ),
    document.querySelector('#popup-root'),
  );
};
