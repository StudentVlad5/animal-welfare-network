import PropTypes from 'prop-types';
import { FaEnvelope, FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import {
  Item,
  ImageMember,
  InfoMember,
  LinkWrapper,
  LinkMember,
} from './TeamListItem.styled';
import noImage from 'images/No-image-available.webp';

export const TeamListItem = ({ developer }) => {
  const { _id, name, email, telegram, linkedin, github, imageUrl } = developer;
  const hrefEmail = `mailto:${email}`;
  return (
    <Item key={_id}>
      {imageUrl ? (
        <ImageMember
          src={imageUrl}
          alt={name}
          width="150"
          height="150"
          loading="lazy"
        />
      ) : (
        <ImageMember
          src={noImage}
          alt={name}
          width="100"
          height="100"
          loading="lazy"
        />
      )}
      <InfoMember>{name}</InfoMember>
      <LinkWrapper>
        <LinkMember href={hrefEmail} aria-label="Email">
          <FaEnvelope size={15} />
        </LinkMember>
        <LinkMember href={telegram} aria-label="Telegram" target="blank">
          <FaTelegram size={15} />
        </LinkMember>
        <LinkMember href={linkedin} aria-label="Linkedin" target="blank">
          <FaLinkedin size={15} />
        </LinkMember>
        <LinkMember href={github} aria-label="Github" target="blank">
          <FaGithub size={15} />
        </LinkMember>
      </LinkWrapper>
    </Item>
  );
};

TeamListItem.propTypes = {
  developer: PropTypes.object.isRequired,
};
