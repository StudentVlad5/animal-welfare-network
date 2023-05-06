import no_Photo from 'images/No-image-available.webp';
import { openModalWindow } from 'hooks/modalWindow';
import { useDispatch, useSelector } from 'react-redux';
import { addModal } from 'redux/modal/operation';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { theme } from 'components/baseStyles/Variables.styled';
import {
  NoticesContainerItem,
  ContainerInfo,
  ImgItem,
  ContainerStatus,
  NoticeItemTitle,
  BtnLearnMore,
  BtnDelete,
  ItemContainer,
  TdTable,
  TdTable2,
  Table,
  NoticeContainerButton,
  BtnForFavorite,
  TBody,
  DeleteIcon,
  EditIcon,
  BtnEdit,
} from './NoticeCategoryItem.styled';
import { selectId, getPermission } from 'redux/auth/selectors';
import { useState } from 'react';
import { deleteData } from 'services/APIservice';
import { addReload } from 'redux/reload/slice';
import { useTranslation } from 'react-i18next';

export const NoticesCategoriesItem = ({
  data,
  addToFavoriteFunction,
  isInFavorite,
}) => {
  const [, setIsLoading] = useState(false);
  const [, setError] = useState(null);

  const _id = useSelector(selectId); //isLoggedIn
  const dispatch = useDispatch();
  let id = '';
  _id == null ? (id = 1) : (id = _id);

  const { t } = useTranslation();
  const permission = useSelector(getPermission);

  async function deleteNotice(e, id) {
    e.preventDefault();
    e.stopPropagation();
    setIsLoading(true);
    try {
      const { date } = await deleteData(`/notices/${id}`);
      return date;
    } catch (error) {
      setError(error);
    } finally {
      dispatch(addReload(true));
      setIsLoading(false);
    }
  }

  const openModalForItemPet = e => {
    e.preventDefault();
    e.stopPropagation();
    if (e.currentTarget.dataset.modal === 'itemPet') {
      dispatch(
        addModal({
          modal: e.currentTarget.dataset.modal,
          id: e.currentTarget.dataset.id,
        }),
      );
      setTimeout(() => openModalWindow(e, null), 500);
    }
  };

  const openModalForEditItemPet = e => {
    e.preventDefault();
    e.stopPropagation();
    if (e.currentTarget.dataset.modal === 'editItemPet') {
      dispatch(
        addModal({
          modal: e.currentTarget.dataset.modal,
          id: e.currentTarget.dataset.id,
        }),
      );
      setTimeout(() => openModalWindow(e, null), 500);
    }
  };

  const openModalSwiper = e => {
    e.preventDefault();
    e.stopPropagation();
    if (e.currentTarget.dataset.modal === 'swiper') {
      dispatch(
        addModal({
          modal: e.currentTarget.dataset.modal,
          image1: e.currentTarget.dataset.image1,
          image2: e.currentTarget.dataset.image2,
          image3: e.currentTarget.dataset.image3,
        }),
      );
      setTimeout(() => openModalWindow(e, null), 500);
    }
  };

  return (
    <ItemContainer
      onClick={e =>
        e.currentTarget.innerText !== 'Learn more' && openModalSwiper(e)
      }
      data-modal="swiper"
      data-image1={data?.imageUrl}
      data-image2={data?.imageUrl_1}
      data-image3={data?.imageUrl_2}
    >
      <NoticesContainerItem>
        <ContainerInfo>
          <ContainerStatus>{data.category}</ContainerStatus>
          <BtnForFavorite onClick={addToFavoriteFunction(data._id)}>
            {isInFavorite ? (
              <AiFillHeart size={28} color={theme.light.orangeLight} />
            ) : (
              <AiOutlineHeart size={28} color={theme.light.orangeLight} />
            )}
          </BtnForFavorite>
          <ImgItem
            src={
              data.imageUrl === '' || data.imageUrl === undefined
                ? no_Photo
                : data.imageUrl
            }
            onError={e => {
              if (e.target.onerror == null) {
                e.target.src =
                  'https://res.cloudinary.com/dfqhj2far/image/upload/v1681063506/No-image-available_tdyrjx.jpg';
              }
            }}
            loading="lazy"
          />
          <NoticeItemTitle>{data.title}</NoticeItemTitle>
          <Table>
            <TBody>
              <tr>
                <TdTable>{t('Breed')}:</TdTable>
                <TdTable2>{data.breed}</TdTable2>
              </tr>
              <tr>
                <TdTable>{t('Place')}:</TdTable>
                <TdTable2>{data.location}</TdTable2>
              </tr>
              <tr>
                <TdTable>{t('Age')}:</TdTable>
                <TdTable2>
                  {data.birthday
                    ? Math.round(
                        (Date.now() - Date.parse(data.birthday)) / 31536000000,
                      ) < 1
                      ? '<1 year'
                      : Math.round(
                          (Date.now() - Date.parse(data.birthday)) /
                            31536000000,
                        ) + ' years'
                    : 'no info'}
                </TdTable2>
              </tr>
              {data.price && (
                <tr>
                  <TdTable>{t('Price')}:</TdTable>
                  <TdTable2>
                    {data.price} {data.currency}
                  </TdTable2>
                </tr>
              )}
            </TBody>
          </Table>
        </ContainerInfo>
        <NoticeContainerButton>
          <BtnLearnMore
            onClick={e =>
              e.currentTarget.innerText === 'Learn more' &&
              openModalForItemPet(e)
            }
            data-modal="itemPet"
            data-id={data._id}
          >
            Learn more
          </BtnLearnMore>
          {(data.owner === id || permission === 'admin') && (
            <>
              <BtnEdit
                onClick={e =>
                  e.currentTarget.innerText === 'Edit' &&
                  openModalForEditItemPet(e)
                }
                data-modal="editItemPet"
                data-id={data._id}
              >
                {t('Edit')}
                <EditIcon />
              </BtnEdit>
              <BtnDelete onClick={e => deleteNotice(e, data._id)}>
                {t('Delete')}
                <DeleteIcon />
              </BtnDelete>
            </>
          )}
        </NoticeContainerButton>
      </NoticesContainerItem>
    </ItemContainer>
  );
};
