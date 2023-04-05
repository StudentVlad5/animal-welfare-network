import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { baseColor } from 'components/baseStyles/Variables.styled';
import { ReactComponent as iconUser } from 'images/svg/icon_user.svg';

const MobileAccountButton = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 46px auto 0 auto;
  padding: 8px 36px;

  height: 35px;
  border-radius: 40px;
  text-decoration: none;
  background-color: ${baseColor.colors.orangeLight};
  border: 2px solid ${baseColor.colors.orangeLight};
  color: ${baseColor.colors.white};

  font-family: 'Manrope';
  font-style: normal;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;

  @media screen and (min-width: 768px) {
    margin-top: 0px;
    height: 44px;
    display: none;
  }
`;

const AccountButton = styled(MobileAccountButton)`
  display: none;

  @media screen and (min-width: 768px) {
    padding: 8px 28px;
    display: flex;
    height: 44px;
    font-size: 20px;
    line-height: 27px;
  }
`;

const IconUser = styled(iconUser)`
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-right: 12px;
  display: block;
  fill: ${baseColor.colors.white};
  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;
export { MobileAccountButton, AccountButton, IconUser };
