import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdClose, MdDone } from 'react-icons/md';
import usePlacesAutocomplete from 'use-places-autocomplete';
import { Formik } from 'formik';
import { closeModalWindow } from 'hooks/modalWindow';
import { cleanModal } from 'redux/modal/operation';
import { modalComponent } from 'redux/modal/selectors';
import { fetchData, updateData } from 'services/APIservice';
import { setImage } from 'utils/setimage';
import {
  BackDrop,
  Modal,
  Li,
  FormStyled,
  FieldList,
  FieldStyled,
  Label,
  Input,
  FieldItemFile,
  CloseIconBtn,
  DoneIconBtn,
  Error,
} from './EditDataModal.styled';
import { onFetchError } from 'components/helpers/Messages/NotifyMessages';
import { onLoaded, onLoading } from 'components/helpers/Loader/Loader';
import { addReload } from 'redux/reload/slice';

export const EditUserDataModal = ({ path }) => {
  const [dataUpdate, setDataUpdate] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const modal = useSelector(modalComponent);
  const dispatch = useDispatch();
  const itemForFetch = `/admin/users/${modal.id}`;

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

  async function editUser(formData) {
    const file = document.querySelector('#avatar')?.files[0];
    setIsLoading(true);
    try {
      const { date } = await updateData(itemForFetch, formData, file);
      if (date && date !== 201) {
        return onFetchError('Whoops, something went wrong');
      }
      return date;
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
      dispatch(addReload(true));
    }
  }

  const closeDataModal = e => {
    e.preventDefault();
    dispatch(cleanModal());
    closeModalWindow(e);
  };

  const {
    ready,
    suggestions: { data, status },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {},
    debounce: 300,
  });

  const handleInput = e => {
    setValue(e.target.value);
  };

  const renderSuggestions = setFieldValue =>
    data.map(suggestion => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <Li
          key={place_id}
          onClick={() => {
            setFieldValue('location', suggestion.description);
            clearSuggestions();
          }}
        >
          {main_text}
          {', '}
          {secondary_text}
        </Li>
      );
    });

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
            initialValues={{
              id: dataUpdate?._id ? dataUpdate._id : '',
              userName: dataUpdate?.userName ? dataUpdate.userName : '',
              birthday: dataUpdate?.birthday ? dataUpdate.birthday : '',
              location: dataUpdate?.location ? dataUpdate.location : '',
              avatar: '',
              email: dataUpdate?.email ? dataUpdate.email : '',
              phone: dataUpdate?.phone ? dataUpdate.phone : '',
              role: dataUpdate?.role ? dataUpdate.role : 'user',
            }}
            onSubmit={(values, { setSubmitting }) => {
              editUser(values);
              closeDataModal();
              dispatch(addReload(false));
              setSubmitting(false);
            }}
            enableReinitialize={true}
          >
            {({
              handleChange,
              handleSubmit,
              setFieldValue,
              isSubmitting,
              values,
              errors,
              touched,
            }) => (
              <FormStyled
                autoComplete="off"
                onSubmit={handleSubmit}
                onChange={e => {
                  handleChange(e);
                }}
              >
                <FieldList>
                  <FieldStyled>
                    <Label htmlFor="id">ID</Label>
                    <Input
                      id="id"
                      type="text"
                      name="id"
                      placeholder="User id"
                      disabled
                    />
                  </FieldStyled>
                  <FieldStyled>
                    <Label htmlFor="userName">
                      <span>Name</span>
                      {errors.userName && touched.userName ? (
                        <Error>{errors.userName}</Error>
                      ) : null}
                    </Label>
                    <Input
                      type="text"
                      id="userName"
                      name="userName"
                      placeholder="Type user name"
                      value={values.userName}
                    />
                  </FieldStyled>
                  <FieldStyled>
                    <Label htmlFor="email">
                      <span>Email</span>
                      {errors.email && touched.email ? (
                        <Error>{errors.email}</Error>
                      ) : null}
                    </Label>
                    <Input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Type user email"
                      value={values.email}
                    />
                  </FieldStyled>
                  <FieldStyled>
                    <Label htmlFor="phone">
                      <span>Phone</span>
                      {errors.phone && touched.phone ? (
                        <Error>{errors.phone}</Error>
                      ) : null}
                    </Label>
                    <Input
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder="Type user phone"
                      value={values.phone}
                    />
                  </FieldStyled>
                  <FieldStyled>
                    <Label htmlFor="birthday">
                      <span>Date of birth</span>
                      {errors.birthday && touched.birthday ? (
                        <Error>{errors.birthday}</Error>
                      ) : null}
                    </Label>
                    <div style={{ position: 'relative' }}>
                      <Input
                        onFocus={e => {
                          e.target.setAttribute('type', 'date');
                        }}
                        onBlur={e => {
                          e.target.setAttribute('type', 'text');
                        }}
                        type="text"
                        id="birthday"
                        name="birthday"
                        min={'1900-01-01'}
                        max={`${new Date().toISOString().split('T')[0]}`}
                        placeholder="Type day of birth"
                        value={values.birthday}
                      />
                    </div>
                  </FieldStyled>
                  <FieldStyled>
                    <Label htmlFor="location">
                      <span>Location</span>
                      {errors.location && touched.location ? (
                        <Error>{errors.location}</Error>
                      ) : null}
                    </Label>
                    <div style={{ position: 'relative' }}>
                      <Input
                        type="text"
                        id="location"
                        name="location"
                        placeholder="Type location"
                        value={values.location}
                        disabled={!ready}
                        onChange={e => {
                          handleChange(e);
                          handleInput(e);
                        }}
                      />
                      {status === 'OK' && (
                        <ul
                          style={{
                            position: 'absolute',
                            top: '100%',
                            left: '0px',
                            zIndex: '999',
                          }}
                        >
                          {renderSuggestions(setFieldValue)}
                        </ul>
                      )}
                    </div>
                  </FieldStyled>
                  <FieldStyled>
                    <Label htmlFor="avatar">
                      <span>Avatar</span>
                      {errors.avatar && touched.avatar ? (
                        <Error>{errors.avatar}</Error>
                      ) : null}
                    </Label>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        gap: '4px',
                      }}
                    >
                      {dataUpdate?.avatar ? (
                        <FieldItemFile
                          style={{
                            backgroundImage: `url(${dataUpdate?.avatar})`,
                            backgroundSize: '50px,50px',
                          }}
                          className="file"
                          type="file"
                          id="avatar"
                          name="avatar"
                          accept=".jpeg,.jpg,.png,.gif"
                          onChange={e => {
                            handleChange(e);
                            setImage(e);
                          }}
                        />
                      ) : (
                        <FieldItemFile
                          className="file"
                          type="file"
                          id="avatar"
                          name="avatar"
                          accept=".jpeg,.jpg,.png,.gif"
                          onChange={e => {
                            handleChange(e);
                            setImage(e);
                          }}
                        />
                      )}
                    </div>
                  </FieldStyled>
                  <FieldStyled>
                    <Label htmlFor="role">
                      <span>role</span>
                      {errors.role && touched.role ? (
                        <Error>{errors.role}</Error>
                      ) : null}
                    </Label>
                    <Input
                      type="text"
                      id="role"
                      name="role"
                      placeholder="Type user role"
                      value={values.role}
                    />
                  </FieldStyled>
                </FieldList>

                <DoneIconBtn
                  type="submit"
                  disabled={isSubmitting}
                  // onClick={e => closeDataModal(e)}
                  // aria-label="Submit"
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
