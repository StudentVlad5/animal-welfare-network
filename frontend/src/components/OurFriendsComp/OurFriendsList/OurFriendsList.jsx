import { OurFriendsItem } from 'components/OurFriendsComp/OurFriendsItem/OurFriendsItem';
import { List } from './OurFriendsList.styled';

export const OurFriendsList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => (
        <OurFriendsItem friend={friend} key={friend._id} />
      ))}
    </List>
  );
};
