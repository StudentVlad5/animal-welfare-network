import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdClose, MdDone } from 'react-icons/md';
import { Formik } from 'formik';
import { closeModalWindow } from 'hooks/modalWindow';
import { cleanModal } from 'redux/modal/operation';
import { modalComponent } from 'redux/modal/selectors';
import { fetchData } from 'services/APIservice';
import {
  BackDrop,
  Modal,
  FormStyled,
  FieldStyled,
  Label,
  Input,
  CloseIconBtn,
  DoneIconBtn,
} from './EditDataModal.styled';
import { onFetchError } from 'components/helpers/Messages/NotifyMessages';
import { onLoaded, onLoading } from 'components/helpers/Loader/Loader';

export const EditUserDataModal = ({ path, onEdit }) => {
  const [dataUpdate, setDataUpdate] = useState([]);
  const [formFieldData, setFormFieldData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const modal = useSelector(modalComponent);
  const dispatch = useDispatch();

  const closeDataModal = e => {
    e.preventDefault();
    dispatch(cleanModal());
    closeModalWindow(e);
  };

  const itemForFetch = `/${path}/${modal.id}`;

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        const { data } = await fetchData(itemForFetch);
        setDataUpdate(data);
        if (!data) {
          return onFetchError('Whoops, something went wrong');
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    if (modal.id !== '') {
      getData();
    }
  }, [itemForFetch, modal.id]);

  return createPortal(
    Object.values(modal)[0] === 'admin' && (
      <BackDrop
        onClick={e => {
          if (e.currentTarget === e.target) closeDataModal(e);
        }}
      >
        <Modal>
          <CloseIconBtn
            onClick={e => closeDataModal(e)}
            aria-label="Close modal"
          >
            <MdClose size={15} />
          </CloseIconBtn>

          {isLoading ? onLoading() : onLoaded()}
          {error && onFetchError('Whoops, something went wrong')}
          <Formik
            initialValues={dataUpdate}
            onSubmit={(values, { setSubmitting }) => {
              // setTimeout(() => {
              setSubmitting(false);
              const editedData = {
                [values.name]: values.value,
              };
              setDataUpdate(prevState => ({ ...prevState, ...editedData }));
              // setDataUpdate(prevState => ({ ...prevState, ...formFieldData }));
              onEdit(modal.id, dataUpdate);
              //   }, 100);
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              values,
            }) => (
              <FormStyled
                onSubmit={handleSubmit}
                onChange={e => {
                  handleChange(e);
                  setFormFieldData(e.target.value);
                }}
              >
                {Object.entries(dataUpdate).map((item, idx) => (
                  <FieldStyled key={idx}>
                    <Label htmlFor={item[0]}>{item[0]}</Label>
                    <Input
                      id={item[0]}
                      type="text"
                      name={item[0]}
                      defaultValue={item[1]}
                      placeholder={item[1]?.toString() || ''}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      // value={formFieldData}
                    />
                  </FieldStyled>
                ))}
                <DoneIconBtn
                  type="submit"
                  disabled={isSubmitting}
                  onClick={e => closeDataModal(e)}
                  aria-label="Submit"
                >
                  <MdDone size={15} />
                </DoneIconBtn>
              </FormStyled>
            )}
          </Formik>
        </Modal>
      </BackDrop>
    ),
    document.querySelector('#popup-root'),
  );
};

EditUserDataModal.propTypes = {
  path: PropTypes.string.isRequired,
  onEdit: PropTypes.func,
};
