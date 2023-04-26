import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  max-width: calc(100vw - 40px);

  @media screen and (min-width: 768px) {
    max-width: calc(100vw - 64px);
  }

  @media screen and (min-width: 1280px) {
    justify-content: space-between;
    max-width: 1280px;
  }
`;

const Item = styled.li`
  display: flex;
  justify-content: space-evenly;

  width: 100%;
  height: auto;
  padding: 12px 4px;

  background-color: ${props => props.theme.white};
  box-shadow: 7px 4px 14px ${props => props.theme.shadowColor};
  border-radius: 20px;

  @media screen and (min-width: 320px) {
    max-width: 280px;
  }

  @media screen and (min-width: 768px) {
    max-width: 336px;
    border-radius: 40px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 390px;
  }

  & svg {
    margin-left: 8px;
  }
`;

const SLink = styled(NavLink)`
  display: flex;
  align-items: center;
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 14px;
  line-height: 1.333;
  color: ${props => props.theme.blackText};
  text-decoration: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.357;
  }

  @media screen and (min-width: 1280px) {
    font-size: 18px;
    line-height: 1.375;
  }

  transition: all 0.2s ease-in;

  &:hover,
  &:focus {
    color: ${props => props.theme.orangeLight};
    text-decoration: none;
    scale: 1.05;
  }
`;

const IconButton = styled.button`
  display: inline-flex;
  align-content: center;
  justify-content: center;
  align-items: center;

  margin: ${props => props.margin || '0'};
  padding: 0;

  color: ${props => props.theme.blackText};
  background-color: transparent;
  border: none;
  cursor: pointer;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus,
  &:active {
    color: ${props => props.theme.orangeLight};
  }

  & > svg {
    fill: currentColor;
  }
`;

const Table = styled.table`
  width: 100%;
  margin-top: 10px;
  color: ${props => props.theme.blackText};
  border-collapse: collapse;
`;

const TableHead = styled.th`
  padding: 0.25rem;
  font-family: 'Manrope', sans-serif;
  font-size: 10px;
  font-weight: 700;
  line-height: 1.1;

  border-bottom: 1px solid ${props => props.theme.logout};

  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 1.3;
  }

  @media screen and (min-width: 768px) {
    max-width: 200px;
    font-size: 14px;
  }
`;

const TableRow = styled.tr`
  &:nth-child(2n) {
    background-color: ${props => props.theme.shadowColor};
  }
`;

const TableData = styled.td`
  padding: 0.25rem;
  max-width: 80px;

  font-family: 'Manrope', sans-serif;
  font-size: 10px;
  font-weight: 400;
  line-height: 1.1;

  overflow-x: hidden;
  white-space: nowrap;

  @media screen and (min-width: 768px) {
    max-width: 100px;
    font-size: 12px;
    line-height: 1.3;
  }

  @media screen and (min-width: 768px) {
    max-width: 200px;
    font-size: 14px;
  }
`;

const LearnMoreBtn = styled.button`
  margin-left: auto;
  padding: 4px;
  font-family: 'Manrope', sans-serif;
  font-size: 10px;
  color: ${props => props.theme.blackText};
  background-color: transparent;
  border: 1px solid ${props => props.theme.logout};
  box-shadow: ${props => props.theme.shadowColor} 3px 3px 5px;
  border-radius: 4px;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: ${props => props.theme.shadowColor} 3px 3px 5px inset;
  }
`;

export {
  List,
  Item,
  SLink,
  IconButton,
  Table,
  TableHead,
  TableRow,
  TableData,
  LearnMoreBtn,
};
