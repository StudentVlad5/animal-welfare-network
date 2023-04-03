import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Modal, Table, Line, Day, Time } from './OurFriendsItemModal.styled';

export const OurFriendsItemModal = ({ workDays, dayClosed, onClose }) => {
  const [workTime, setWorkTime] = useState('');

  useEffect(() => {
    // closes modal with a click on the root
    const handleBackdropClick = e => {
      onClose();
    };
    document
      .querySelector('#root')
      .addEventListener('click', handleBackdropClick);

    // closes modal with a click on the Escape
    const handleKeyDown = e => {
      if (e.code === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    // removes all event listener
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document
        .querySelector('#root')
        .removeEventListener('click', handleBackdropClick);
    };
  }, [onClose]);

  useEffect(() => {
    const time = {
      MN: workDays[0].isOpen ? workDays[0].from + ' - ' + workDays[0].to : '',
      TU: workDays[1].isOpen ? workDays[1].from + ' - ' + workDays[1].to : '',
      WE: workDays[2].isOpen ? workDays[2].from + ' - ' + workDays[2].to : '',
      TH: workDays[3].isOpen ? workDays[3].from + ' - ' + workDays[3].to : '',
      FR: workDays[4].isOpen ? workDays[4].from + ' - ' + workDays[4].to : '',
      SA: workDays[5].isOpen ? workDays[5].from + ' - ' + workDays[5].to : '',
      SU: workDays[6].isOpen ? workDays[6].from + ' - ' + workDays[6].to : '',
    };
    setWorkTime(time);
  }, [workDays]);

  return (
    <Modal onClick={() => onClose()}>
      <table>
        <Table>
          {Object.keys(workTime).map((time, idx) => {
            if (dayClosed === idx) {
              return (
                <Line key={idx}>
                  <Day>{time}</Day>
                  <Time accent>{workTime[time]}</Time>
                </Line>
              );
            }
            return (
              <Line key={idx}>
                <Day>{time}</Day>
                <Time>{workTime[time]}</Time>
              </Line>
            );
          })}
        </Table>
      </table>
    </Modal>
  );
};

OurFriendsItemModal.propTypes = {
  workDays: PropTypes.arrayOf(
    PropTypes.shape({
      isOpen: PropTypes.bool,
      from: PropTypes.string,
      to: PropTypes.string,
    }).isRequired,
  ),
  dayClosed: PropTypes.any,
  onClose: PropTypes.func.isRequired,
};
