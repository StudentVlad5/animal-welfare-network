// import PropTypes from 'prop-types';
import { TeamListItem } from './TeamListItem';

export const TeamList = developers => {
  developers.map(developer => (
    <TeamListItem developer={developer} key={developer._id} />
  ));
};
