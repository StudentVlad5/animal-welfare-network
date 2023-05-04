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
  const { abstract, web_url, lead_paragraph, pub_date } = newsItem;

  return (
    <Item key={web_url} id={web_url}>
      <TextWrapper>
        <Ractangle />
        <Title>
          <EllipsisText text={abstract} length={38} />
        </Title>
        <Text>
          <EllipsisText text={lead_paragraph} length={200} />
        </Text>
        {pub_date !== null ? (
          <DateWrapper>
            <Dates>{new Date(pub_date).toLocaleDateString()}</Dates>
            <Link target="_blank" href={web_url}>
              Read More
            </Link>
          </DateWrapper>
        ) : (
          <DateWrapper>
            <Dates>----/----/-------</Dates>
            <Link target="_blank" href={web_url}>
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
