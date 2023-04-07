// import PropTypes from 'prop-types';
import { List } from './TeamList.styled';
import { TeamListItem } from './TeamListItem/TeamListItem';

export const TeamList = ({ developers }) => {
  return (
    <List>
      {developers.map(developer => (
        <TeamListItem developer={developer} key={developer._id} />
      ))}
    </List>
  );
};
