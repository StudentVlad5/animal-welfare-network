import { NoticesCategoriesItem } from './NoticeCategoryItem/NoticeCategoryItem';
import { ModalNotices } from '../ModalNotice/ModalNotice';
import { onLoading, onLoaded } from 'components/helpers/Loader/Loader';
import { ContainerStatus } from './NoticesCategoriesList.styled';
import {
  onFetchError,
  onInfo,
  onSuccess,
} from 'components/helpers/Messages/NotifyMessages';
import { Title } from 'components/baseStyles/CommonStyle.styled';
import { fetchData } from 'services/APIservice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { addFavorite, removeFavorite } from 'redux/auth/operations';
import { selectFavorites, selectIsLoggedIn } from 'redux/auth/selectors';
import { Pagination } from 'utils/pagination';
import { addReload } from 'redux/reload/slice';
import { reloadValue } from 'redux/reload/selectors';

let page = 1;
let perPage = 12;

export const NoticesCategoriesList = () => {
  const dispatch = useDispatch();
  const [listItem, setListItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPage, setTotalPage] = useState(0);
  const routeParams = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const reload = useSelector(reloadValue);

  const setPage = toPage => {
    searchParams.set('page', toPage);
    setSearchParams(searchParams);
  };

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const favorites = useSelector(selectFavorites);

  const toggleFavorite = async id => {
    let isInFavorite = false;
    favorites
      ? (isInFavorite = favorites.includes(id))
      : (isInFavorite = false);
    if (isInFavorite) {
      dispatch(removeFavorite(id));
      onSuccess('You remove pet from the favorite!');
      return;
    }
    dispatch(addFavorite(id));
    onSuccess('You add pet to the favorite!');
  };

  const handleFavoriteBtnClick = id => e => {
    e.preventDefault();
    e.stopPropagation();
    if (routeParams.id === 'favorite') {
      dispatch(addReload(true));
    }
    !isLoggedIn ? onInfo('You must be loggined!') : toggleFavorite(id);
  };

  useEffect(() => {
    if (!page || !perPage) {
      const params = { page: 1, perPage };
      setSearchParams(params);
    }

    async function fetchNoticesList() {
      setIsLoading(true);
      try {
        const { data } = await fetchData(
          `/notices/${routeParams.id}?${searchParams}`,
        );
        setListItem(data.data);
        setTotalPage(data.totalPage);
        if (!data) {
          return onFetchError('Whoops, something went wrong');
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchNoticesList();
    if (reload) {
      fetchNoticesList();
      dispatch(addReload(false));
    }
  }, [dispatch, reload, routeParams.id, searchParams, setSearchParams]);

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <ContainerStatus>
          {listItem?.length === 0 && !isLoading ? (
            <Title as="h3" size="20px" sizeTablet="20px">
              Whoops! Can't find anything...
            </Title>
          ) : (
            listItem.map(value => (
              <NoticesCategoriesItem
                data={value}
                isInFavorite={favorites ? favorites.includes(value._id) : false}
                addToFavoriteFunction={handleFavoriteBtnClick}
                key={value._id}
              />
            ))
          )}
        </ContainerStatus>
      </div>
      {isLoading ? onLoading() : onLoaded()}
      {error && onFetchError('Whoops, something went wrong')}
      <Pagination
        totalPage={totalPage}
        changePage={setPage}
        page={searchParams.get('page')}
      />
      <ModalNotices addToFavoriteFunction={handleFavoriteBtnClick} />
    </>
  );
};
