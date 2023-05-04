import PropTypes from 'prop-types';
import { NewsListItem } from './NewsListItem/NewsListItem';
import { List } from './NewsList.styled';

export const NewsList = ({ news }) => {
  return (
    <List>
      {news.map(newsItem => (
        <NewsListItem newsItem={newsItem} key={newsItem.web_url} />
      ))}
    </List>
  );
};

NewsList.propTypes = {
  news: PropTypes.array.isRequired,
};
