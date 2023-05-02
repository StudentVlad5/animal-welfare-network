import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SEO } from 'utils/SEO';
import {
  Container,
  Section,
  Title,
} from 'components/baseStyles/CommonStyle.styled';
import { NewsList } from 'components/NewsComp/NewsList/NewsList';
import { NewsSearch } from 'components/NewsComp/NewsSearch/NewsSearch';
import { fetchData } from 'services/APIservice';
import { onLoading, onLoaded } from 'components/helpers/Loader/Loader';
import { onFetchError } from 'components/helpers/Messages/NotifyMessages';
import { Pagination } from 'utils/pagination';
import { onInfo } from 'components/helpers/Messages/NotifyMessages';

let page = 1;
let perPage = 12;

const News = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPage, setTotalPage] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  const setPage = toPage => {
    searchParams.set('page', toPage);
    setSearchParams(searchParams);
  };

  const setParams = search => {
    const params = getParams();
    params.page = 1;
    if (!search) {
      !params.search && onInfo('Fill the field!');
      delete params.search;
      setSearchParams(params);
      return;
    }
    params.search = search;
    setSearchParams(params);
  };

  const getParams = () => {
    const params = Object.fromEntries(searchParams);
    return params;
  };

  useEffect(() => {
    if (!page && !perPage) {
      const params = { page: 1, perPage };
      setSearchParams(params);
    }

    (async () => {
      try {
        const { data } = await fetchData(`/news?${searchParams}`);
        setNews(data.data);
        setTotalPage(data.totalPage);
        console.log('data', data);
        if (!data) {
          return onFetchError('Whoops, something went wrong 404');
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [searchParams, setSearchParams]);

  return (
    <>
      <SEO title="News" description="You can see all news" />
      <Section>
        <Container>
          <Title as="h1">News</Title>
          {isLoading ? onLoading() : onLoaded()}
          {error && onFetchError('Whoops, something went wrong')}

          <NewsSearch setParams={setParams} />
          {(!news || news?.length === 0) && !isLoading && (
            <Title as="h3" size="14px">
              Whoops! Can't find anything...
            </Title>
          )}
          {news?.length > 0 && !error && (
            <>
              <NewsList news={news} />
              <Pagination totalPage={totalPage} changePage={setPage} />
            </>
          )}
        </Container>
      </Section>
    </>
  );
};

export default News;
