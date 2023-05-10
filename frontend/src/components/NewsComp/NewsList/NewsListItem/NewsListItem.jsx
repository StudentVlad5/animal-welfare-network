import PropTypes from 'prop-types';
import EllipsisText from 'react-ellipsis-text';
import moment from 'moment';
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
import { useTranslation } from 'react-i18next';

export const NewsListItem = ({ newsItem }) => {
  const { abstract, web_url, lead_paragraph, pub_date } = newsItem;
  const { t } = useTranslation();

  return (
    <Item key={web_url} id={web_url}>
      <TextWrapper>
        <Ractangle />
        <Title>
          <EllipsisText text={abstract} length={50} />
        </Title>
        <Text>
          <EllipsisText text={lead_paragraph} length={200} />
        </Text>
        {pub_date !== null ? (
          <DateWrapper>
            <Dates>{moment(`${pub_date}`).utc().format('YYYY-MM-DD')}</Dates>
            <Link target="_blank" href={web_url}>
              {t('Read More')}
            </Link>
          </DateWrapper>
        ) : (
          <DateWrapper>
            <Dates>----/----/-------</Dates>
            <Link target="_blank" href={web_url}>
              {t('Read More')}
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
