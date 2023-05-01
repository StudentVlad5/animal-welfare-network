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
  Form,
  Field,
  Label,
  Input,
  CloseIconBtn,
  DoneIconBtn,
} from './EditDataModal.styled';
import { onFetchError } from 'components/helpers/Messages/NotifyMessages';
import { onLoaded, onLoading } from 'components/helpers/Loader/Loader';

export const EditDataModal = ({ path, onEdit }) => {
  const [data, setData] = useState([]);
  const [dataUpdate, setDataUpdate] = useState(data);
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
        setData(data);
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
            initialValues={data}
            onSubmit={(values, { setSubmitting }) => {
              // setTimeout(() => {
              setSubmitting(false);
              setDataUpdate(values);
              onEdit(modal.id, dataUpdate);
              //   }, 400);
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              values,
            }) => (
              <Form onSubmit={handleSubmit}>
                {Object.entries(data).map((item, idx) => (
                  <Field key={idx}>
                    <Label htmlFor={item[0]}>{item[0]}</Label>
                    <Input
                      id={item[0]}
                      type="text"
                      name={item[0]}
                      onChange={e => {
                        handleChange(e);
                        if (e.target.value === 'none') {
                          e.target.value = '';
                        }
                      }}
                      onBlur={handleBlur}
                      value={item[1] || 'none'}
                    />
                  </Field>
                ))}
                <DoneIconBtn
                  type="submit"
                  disabled={isSubmitting}
                  onClick={e => closeDataModal(e)}
                  aria-label="Submit"
                >
                  <MdDone size={15} />
                </DoneIconBtn>
              </Form>
            )}
          </Formik>
        </Modal>
      </BackDrop>
    ),
    document.querySelector('#popup-root'),
  );
};

EditDataModal.propTypes = {
  path: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
};
