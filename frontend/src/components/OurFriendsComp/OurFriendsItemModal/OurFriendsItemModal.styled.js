import styled from 'styled-components';

const Modal = styled.div`
  position: absolute;
  bottom: -3px;
  left: 0;
  transform: translateY(100%);

  display: flex;
  align-items: center;
  inline-size: max-content;
  max-width: 145px;
  padding: 12px;

  background-color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.orangeLight};
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  z-index: 20;
`;

const Table = styled.tbody`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

const Line = styled.tr`
  display: flex;
  gap: 12px;
`;

const Day = styled.th`
  width: 20px; // deletes different position
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 12px;
  line-height: 1.333;
  color: ${props => props.theme.black};
  cursor: pointer;
`;

const Time = styled.td`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 12px;
  line-height: 1.333;
  color: ${props =>
    props.accent
      ? `${props => props.theme.orangeLight}`
      : `${props => props.theme.black}`};
  cursor: pointer;
`;

export { Modal, Table, Line, Day, Time };
