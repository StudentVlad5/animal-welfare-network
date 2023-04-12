import styled from 'styled-components';
import { baseColor } from 'components/baseStyles/Variables.styled';

const Item = styled.li`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-end;
  align-items: center;

  width: 120px;
  height: auto;
  padding: 10px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.11) 7px 4px 14px;

  @media screen and (min-width: 768px) {
    width: 200px;
  }
`;

const ImageMember = styled.img`
  width: 100px;
  height: auto;

  margin-bottom: 10px;
  border-radius: 10px;
  background-color: ${baseColor.colors.mainBg};
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 120px;
  }
`;

const InfoMember = styled.p`
  margin-bottom: 8px;
  font-family: 'Manrope';
  font-size: 12px;
  font-weight: 700;
  line-height: 1.15;
  text-align: center;
  color: ${baseColor.colors.blackText};

  @media screen and (min-width: 768px) {
    margin-bottom: 12px;
    font-size: 16px;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`;

const LinkMember = styled.a`
  color: ${baseColor.colors.inpitColor};

  &:hover,
  &:focus {
    color: ${baseColor.colors.orangeLight};
  }
`;

export { Item, ImageMember, InfoMember, LinkWrapper, LinkMember };
