import PropTypes from 'prop-types';
import EllipsisText from 'react-ellipsis-text';
import {
  Item,
  Title,
  TextWrapper,
  Text,
  DateWrapper,
  Link,
  Ractangle,
  Dates,
} from './NewsListItem.styled';

export const NewsListItem = ({ newsItem }) => {
  const { _id, title, description, date, url } = newsItem;

  return (
    <Item key={_id} id={_id}>
      <TextWrapper>
        <Ractangle />
        <Title>
          <EllipsisText text={title} length={38} />
        </Title>
        <Text>
          <EllipsisText text={description} length={200} />
        </Text>
        {date !== null ? (
          <DateWrapper>
            <Dates>{new Date(date).toLocaleDateString()}</Dates>
            <Link target="_blank" href={url}>
              Read More
            </Link>
          </DateWrapper>
        ) : (
          <DateWrapper>
            <Dates>----/----/-------</Dates>
            <Link target="_blank" href={url}>
              Read More
            </Link>
          </DateWrapper>
        )}
      </TextWrapper>
    </Item>
  );
};

NewsListItem.propTypes = {
  newsItem: PropTypes.object.isRequired,
};
