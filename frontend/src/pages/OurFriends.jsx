import { useState, useEffect } from 'react';
import { SEO } from 'utils/SEO';
import { OurFriendsList } from 'components/OurFriendsComp/OurFriendsList/OurFriendsList';
import {
  Container,
  Section,
  Title,
} from 'components/baseStyles/CommonStyle.styled';
import { fetchData } from '../services/APIservice';
import { onLoading, onLoaded } from 'components/helpers/Loader/Loader';
import { onFetchError } from 'components/helpers/Messages/NotifyMessages';

const OurFriends = () => {
  const [friends, setFriends] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function getData() {
      setIsLoading(true);
      try {
        const { data } = await fetchData('/friends');
        setFriends(data);
        if (!data) {
          return onFetchError('Whoops, something went wrong');
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <SEO
        title="Our friends"
        description="You can see all of our company of friends"
      />
      <Section>
        <Container>
          <Title as="h1">Our Friends</Title>
          {isLoading ? onLoading() : onLoaded()}
          {error && onFetchError('Whoops, something went wrong')}
          {friends.length > 0 && !error && <OurFriendsList friends={friends} />}
        </Container>
      </Section>
    </>
  );
};

export default OurFriends;
