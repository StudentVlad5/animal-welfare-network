import PropTypes from 'prop-types';
import { NewsListItem } from './NewsListItem/NewsListItem';
import { List } from './NewsList.styled';

export const NewsList = ({ news }) => {
  const sortedNewsList = news.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <List>
      {sortedNewsList.map(newsItem => (
        <NewsListItem newsItem={newsItem} key={newsItem._id} />
      ))}
    </List>
  );
};

NewsList.propTypes = {
  news: PropTypes.array.isRequired,
};
