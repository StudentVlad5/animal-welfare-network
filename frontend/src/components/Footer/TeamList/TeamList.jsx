import PropTypes from 'prop-types';
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

TeamList.propTypes = {
  developers: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      imageUrl: PropTypes.string,
      email: PropTypes.string,
      telegram: PropTypes.string,
      linkedin: PropTypes.string,
      github: PropTypes.string,
    }),
  ),
};
