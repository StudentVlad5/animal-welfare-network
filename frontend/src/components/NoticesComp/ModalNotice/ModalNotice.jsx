import { useEffect, useState } from 'react';
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
import no_Photo from 'images/No-image-available.webp';
import {
  NoticesContainerItem,
  ContainerCloseModal,
  ContainerPositionForCloseModal,
  ContainerInfo,
  ImgItem,
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
  ModalBtn,
  ModalBtn1,
  NoticeItemTitleError,
} from './ModalNotice.styled';

export const ModalNotices = ({ addToFavoriteFunction }) => {
  const dispatch = useDispatch();
  const modal = useSelector(modalComponent);
  const favorites = useSelector(selectFavorites);
  const closeModalForItemPet = e => {
    e.preventDefault();
    dispatch(cleanModal());
    closeModalWindow(e);
  };

  const [data, setData] = useState([]);
  const [, setIsLoading] = useState(false);
  const [, setError] = useState(null);
  const [current, setCurrent] = useState(0);

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
          return onFetchError('Whoops, something went wrong');
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
  }, [itemForFetch, modal.id]);

  const nextSlide = () => {
    if (SliderData.length === 2) {
      setCurrent(current === 0 ? 1 : 0);
    } else {
      setCurrent(current === SliderData.length - 1 ? 0 : current + 1);
    }
  };

  const prevSlide = () => {
    if (SliderData.length === 2) {
      setCurrent(current === 1 ? 0 : 1);
    } else {
      setCurrent(current === 0 ? SliderData.length - 1 : current - 1);
    }
  };

  const SliderData = [
    {
      id: 1,
      image: data.imageUrl,
    },
    {
      id: 2,
      image: data.imageUrl_1,
    },
    {
      id: 3,
      image: data.imageUrl_2,
    },
  ];
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
                <div className="slider">
                  {SliderData.length > 0 && (
                    <div className="slider">
                      {SliderData.length > 1 && (
                        <>
                          <ModalBtn
                            type="button"
                            className="left-arrow"
                            onClick={prevSlide}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                              width={40}
                              hanging={40}
                            >
                              <path
                                fill="rgb(245, 146, 86)"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 19.5L8.25 12l7.5-7.5"
                              />
                            </svg>
                          </ModalBtn>
                          <ModalBtn1
                            type="button"
                            className="right-arrow"
                            onClick={nextSlide}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              width={40}
                              hanging={40}
                              className="w-6 h-6"
                            >
                              <path
                                fill="rgb(245, 146, 86)"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                              />
                            </svg>
                          </ModalBtn1>
                        </>
                      )}
                      {SliderData.map(slide => {
                        return (
                          <div
                            className={
                              slide.id === current + 1
                                ? 'slide active'
                                : 'slide'
                            }
                            key={slide.id}
                          >
                            {slide.id === current + 1 && (
                              <ImgItem
                                src={
                                  slide.image === '' ||
                                  slide.image === undefined
                                    ? no_Photo
                                    : slide.image
                                }
                                key={slide.id}
                              />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                <div>
                  <NoticeItemTitle>{data.title}</NoticeItemTitle>
                  <Table>
                    <tbody>
                      <tr>
                        <TdTable>Name:</TdTable>
                        <TdTable2>{data.name}</TdTable2>
                      </tr>
                      {data.price && (
                        <tr>
                          <TdTable>Price:</TdTable>
                          <TdTable2>
                            {data.price} {data.currency || '₴'}
                          </TdTable2>
                        </tr>
                      )}
                      <tr>
                        <TdTable>Birthday:</TdTable>
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
                        <TdTable>Breed:</TdTable>
                        <TdTable2>{data.breed}</TdTable2>
                      </tr>
                      <tr>
                        <TdTable>Size:</TdTable>
                        <TdTable2>{data.size}</TdTable2>
                      </tr>
                      <tr>
                        <TdTable>Height:</TdTable>
                        <TdTable2>{data.height}</TdTable2>
                      </tr>
                      <tr>
                        <TdTable>Weight:</TdTable>
                        <TdTable2>{data.weight}</TdTable2>
                      </tr>
                      <tr>
                        <TdTable>Passport:</TdTable>
                        <TdTable2>{data.passport}</TdTable2>
                      </tr>
                      <tr>
                        <TdTable>Sterilization:</TdTable>
                        <TdTable2>{data.sterilization}</TdTable2>
                      </tr>
                      <tr>
                        <TdTable>Lives:</TdTable>
                        <TdTable2>{data.lives}</TdTable2>
                      </tr>
                      <tr>
                        <TdTable>Location:</TdTable>
                        <TdTable2>{data.location}</TdTable2>
                      </tr>
                      <tr>
                        <TdTable>The sex:</TdTable>
                        <TdTable2>{data.sex}</TdTable2>
                      </tr>
                      <tr>
                        <TdTable>Email:</TdTable>
                        <TdTable2>
                          <LinkStyle href={`mailto: ${data.email}`}>
                            {data.email}
                          </LinkStyle>
                        </TdTable2>
                      </tr>
                      <tr>
                        <TdTable>Phone:</TdTable>
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
                <MainComments>Comments: </MainComments>
                <Comments>{data.comments}</Comments>
              </ContainerComments>
              <NoticeContainerButton>
                <Link
                  style={{ textDecoration: 'none' }}
                  to={`tel:${data.phone}`}
                >
                  <BtnContact>Contacts</BtnContact>
                </Link>
                {isInFavorite ? (
                  <BtnAddFavorites onClick={addToFavoriteFunction(modal.id)}>
                    Remove from
                    <AiFillHeart size={22} style={{ marginLeft: '5px' }} />
                  </BtnAddFavorites>
                ) : (
                  <BtnAddFavorites onClick={addToFavoriteFunction(modal.id)}>
                    Add to
                    <AiFillHeart size={22} style={{ marginLeft: '5px' }} />
                  </BtnAddFavorites>
                )}
              </NoticeContainerButton>
            </>
          ) : (
            <NoticeItemTitleError>
              "Whoops... Don't have information about this pet"
            </NoticeItemTitleError>
          )}
        </NoticesContainerItem>
      </BackDrop>
    ),
    document.querySelector('#popup-root'),
  );
};
