import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { AiFillHeart } from 'react-icons/ai';
import { closeModalWindow } from 'hooks/modalWindow';
import { cleanModal } from 'redux/modal/operation';
import { modalComponent } from 'redux/modal/selectors';
import { selectFavorites } from 'redux/auth/selectors';
import { fetchData } from 'services/APIservice';
import { onFetchError } from 'components/helpers/Messages/NotifyMessages';
import {
  NoticesContainerItem,
  ContainerCloseModal,
  ContainerPositionForCloseModal,
  ContainerInfo,
  ContainerStatus,
  NoticeItemTitle,
  BtnContact,
  BtnAddFavorites,
  BackDrop,
  TdTable,
  TdTable2,
  Table,
  Comments,
  MainComments,
  ContainerComments,
  NoticeContainerButton,
  LinkStyle,
  NoticeItemTitleError,
  ImgItem,
} from './ModalNotice.styled';
import { useTranslation } from 'react-i18next';

export const ModalNotices = ({ addToFavoriteFunction }) => {
  const dispatch = useDispatch();
  const modal = useSelector(modalComponent);
  const favorites = useSelector(selectFavorites);
  const { t } = useTranslation();
  const closeModalForItemPet = e => {
    e.preventDefault();
    dispatch(cleanModal());
    closeModalWindow(e);
  };

  const [data, setData] = useState([]);
  const [, setIsLoading] = useState(false);
  const [, setError] = useState(null);

  let isInFavorite = false;
  favorites
    ? (isInFavorite = favorites.includes(modal.id))
    : (isInFavorite = false);

  let itemForFetch = `/notices/byid/${modal.id}`;

  useEffect(() => {
    async function fetchNoticesList() {
      setIsLoading(true);
      try {
        const { data } = await fetchData(itemForFetch);
        setData(data);
        if (!data) {
          return onFetchError(t('Whoops, something went wrong'));
        }
      } catch (error) {
        setData(false);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    if (modal.id !== '') {
      fetchNoticesList();
    }
  }, [itemForFetch, modal.id, t]);

  return ReactDOM.createPortal(
    Object.values(modal)[0] === 'itemPet' && (
      <BackDrop onClick={closeModalForItemPet}>
        <NoticesContainerItem onClick={e => e.stopPropagation()}>
          <ContainerPositionForCloseModal>
            <ContainerCloseModal onClick={closeModalForItemPet}>
              <MdClose style={{ width: '15.5px', height: '15.5px' }} />
            </ContainerCloseModal>
          </ContainerPositionForCloseModal>
          {data ? (
            <>
              <ContainerInfo>
                <ContainerStatus>{data.category}</ContainerStatus>
                <Swiper
                  cssMode={true}
                  navigation={true}
                  pagination={true}
                  mousewheel={true}
                  keyboard={true}
                  modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                  className="mySwiper"
                >
                  {data.imageUrl && (
                    <SwiperSlide>
                      <ImgItem src={data.imageUrl} alt="Pet first" />
                    </SwiperSlide>
                  )}
                  {data.imageUrl_1 && (
                    <SwiperSlide>
                      <ImgItem src={data.imageUrl_1} alt="Pet first" />
                    </SwiperSlide>
                  )}
                  {data.imageUrl_2 && (
                    <SwiperSlide>
                      <ImgItem src={data.imageUrl_2} alt="Pet first" />
                    </SwiperSlide>
                  )}
                </Swiper>

                <div>
                  <NoticeItemTitle>{data.title}</NoticeItemTitle>
                  <Table>
                    <tbody>
                      <tr>
                        <TdTable>{t('Name')}:</TdTable>
                        <TdTable2>{data.name}</TdTable2>
                      </tr>
                      {data.price && (
                        <tr>
                          <TdTable>{t('Price')}:</TdTable>
                          <TdTable2>
                            {data.price} {data.currency || '₴'}
                          </TdTable2>
                        </tr>
                      )}
                      <tr>
                        <TdTable>{t('Birthday')}:</TdTable>
                        <TdTable2>
                          {data.birthday
                            ? data.birthday
                                .split('T')[0]
                                .split(' ')[0]
                                .split('-')[2] +
                              ' ' +
                              data.birthday
                                .split('T')[0]
                                .split(' ')[0]
                                .split('-')[1] +
                              ' ' +
                              data.birthday
                                .split('T')[0]
                                .split(' ')[0]
                                .split('-')[0]
                            : 'no info'}
                        </TdTable2>
                      </tr>
                      <tr>
                        <TdTable>{t('Breed')}:</TdTable>
                        <TdTable2>{data.breed}</TdTable2>
                      </tr>
                      <tr>
                        <TdTable>{t('Size')}:</TdTable>
                        <TdTable2>{data.size}</TdTable2>
                      </tr>
                      <tr>
                        <TdTable>{t('Height')}:</TdTable>
                        <TdTable2>{data.height}</TdTable2>
                      </tr>
                      <tr>
                        <TdTable>{t('Weight')}:</TdTable>
                        <TdTable2>{data.weight}</TdTable2>
                      </tr>
                      <tr>
                        <TdTable>{t('Passport')}:</TdTable>
                        <TdTable2>{data.passport}</TdTable2>
                      </tr>
                      <tr>
                        <TdTable>{t('Sterilization')}:</TdTable>
                        <TdTable2>{data.sterilization}</TdTable2>
                      </tr>
                      <tr>
                        <TdTable>{t('Lives')}:</TdTable>
                        <TdTable2>{data.lives}</TdTable2>
                      </tr>
                      <tr>
                        <TdTable>{t('Location')}:</TdTable>
                        <TdTable2>{data.location}</TdTable2>
                      </tr>
                      <tr>
                        <TdTable>{t('The sex')}:</TdTable>
                        <TdTable2>{data.sex}</TdTable2>
                      </tr>
                      <tr>
                        <TdTable>{t('Email')}:</TdTable>
                        <TdTable2>
                          <LinkStyle href={`mailto: ${data.email}`}>
                            {data.email}
                          </LinkStyle>
                        </TdTable2>
                      </tr>
                      <tr>
                        <TdTable>{t('Phone')}:</TdTable>
                        <TdTable2>
                          <LinkStyle href={`tel:${data.phone}`}>
                            {data.phone}
                          </LinkStyle>
                        </TdTable2>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </ContainerInfo>
              <ContainerComments>
                <MainComments>{t('Comments')}: </MainComments>
                <Comments>{data.comments}</Comments>
              </ContainerComments>
              <NoticeContainerButton>
                <Link
                  style={{ textDecoration: 'none' }}
                  to={`tel:${data.phone}`}
                >
                  <BtnContact>{t('Contacts')}</BtnContact>
                </Link>
                {isInFavorite ? (
                  <BtnAddFavorites onClick={addToFavoriteFunction(modal.id)}>
                    {t('Remove from')}
                    <AiFillHeart size={22} style={{ marginLeft: '5px' }} />
                  </BtnAddFavorites>
                ) : (
                  <BtnAddFavorites onClick={addToFavoriteFunction(modal.id)}>
                    {t('Add to')}
                    <AiFillHeart size={22} style={{ marginLeft: '5px' }} />
                  </BtnAddFavorites>
                )}
              </NoticeContainerButton>
            </>
          ) : (
            <NoticeItemTitleError>
              {t("Whoops... Don't have information about this pet")}
            </NoticeItemTitleError>
          )}
        </NoticesContainerItem>
      </BackDrop>
    ),
    document.querySelector('#popup-root'),
  );
};
