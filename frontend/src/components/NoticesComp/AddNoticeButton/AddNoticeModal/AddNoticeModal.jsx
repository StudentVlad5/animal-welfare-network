import { useNavigate } from 'react-router';
import { Formik } from 'formik';
import ReactDOM from 'react-dom';
import {
  Overlay,
  ModalAddNoticeStyled,
  FormStyled,
  FieldsRadio,
  LabelRadio,
  FieldRadio,
  Title,
  Paragraph,
  FieldList,
  LabelItem,
  FieldItem,
  ButtonClose,
  IconClose,
  ButtonFirst,
  ButtonSecond,
  FieldItemFile,
  IconFemale,
  IconMale,
  FieldRadioSex,
  LabelRadioSex,
  FieldsRadioSex,
  LabelItemTextArea,
  FieldItemTextArea,
  Error,
  Li,
  Option,
  OptionFirst,
} from './AddNoticeModal.styled';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalWindow, closeByEsc } from 'hooks/modalWindow';
import { cleanModal } from 'redux/modal/operation';
import { modalComponent } from 'redux/modal/selectors';
import schemas from 'components/Schemas/schemas';
import { useState } from 'react';
import { fetchNotice } from 'services/APIservice';
import { onLoading, onLoaded } from 'components/helpers/Loader/Loader';
import { onFetchError } from 'components/helpers/Messages/NotifyMessages';
import usePlacesAutocomplete from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';
import { breedsValue } from 'redux/breeds/selectors';
import { setImage } from 'utils/setimage';
import { useSearchParams } from 'react-router-dom';
import { addReload } from 'redux/reload/slice';

export const AddNoticeModal = () => {
  const [formQueue, setFormQueue] = useState(true);
  const [fieldPrice, setFieldPrice] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const modal = useSelector(modalComponent);
  const breeds = useSelector(breedsValue);
  const [searchParams] = useSearchParams();
  searchParams.set('perPage', 12);
  searchParams.set('page', 1);

  const onClickBackdrop = e => {
    setFormQueue(true);
    e.preventDefault();
    e.stopPropagation();
    dispatch(cleanModal());
    closeModalWindow();
  };

  function toggleForm() {
    setFormQueue(!formQueue);
  }

  async function postNotice(values) {
    const file = document.querySelector('.file').files[0];
    setIsLoading(true);
    try {
      const { code } = await fetchNotice(
        `/notices/${values.category}`,
        values,
        file,
      );
      if (code && code !== 201) {
        return onFetchError('Whoops, something went wrong');
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
      dispatch(addReload(true));
    }
  }

  const {
    ready,
    suggestions: { data, status },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {},
    debounce: 300,
  });

  const ref = useOnclickOutside(() => {
    clearSuggestions();
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

  return ReactDOM.createPortal(
    Object.values(modal)[0] === 'formSell' && (
      <Overlay onClick={e => onClickBackdrop(e)}>
        <ModalAddNoticeStyled onClick={e => e.stopPropagation()}>
          {isLoading ? onLoading() : onLoaded()}
          {error && onFetchError('Whoops, something went wrong')}
          <ButtonClose type="button" onClick={e => onClickBackdrop(e)}>
            <IconClose />
          </ButtonClose>
          <Title>Add pet</Title>
          <div>
            <Formik
              initialValues={{
                category: '',
                title: '',
                name: '',
                birthday: '',
                breed: '',
                sex: '',
                location: '',
                price: '',
                imageUrl: '',
                comments: '',
              }}
              onSubmit={values => {
                if (!formQueue) {
                  postNotice(values);
                  closeModalWindow();
                  dispatch(cleanModal());
                  setFormQueue(true);
                  window.removeEventListener('keydown', closeByEsc);
                  navigate(`/notices/own?${searchParams}`);
                  dispatch(addReload(false));
                } else {
                  toggleForm();
                }
              }}
              enableReinitialize={true}
              validationSchema={
                formQueue
                  ? schemas.noticeSchemaFirst
                  : !fieldPrice
                  ? schemas.noticeSchemaSecond
                  : schemas.noticeSchemaSecondPrice
              }
            >
              {({
                values,
                handleChange,
                handleSubmit,
                errors,
                touched,
                setFieldValue,
              }) => (
                <FormStyled
                  autoComplete="off"
                  onSubmit={handleSubmit}
                  onChange={e => {
                    handleChange(e);
                    values.category === 'sell' && setFieldPrice(true);
                  }}
                >
                  <>
                    <div
                      className="formFirst"
                      style={
                        formQueue ? { display: 'block' } : { display: 'none' }
                      }
                    >
                      <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur Lorem ipsum
                        dolor sit amet, consectetur
                      </Paragraph>
                      <FieldsRadio role="group" id="category">
                        {errors.category && touched.category ? (
                          <Error style={{ top: '-20px' }}>
                            {errors.category}
                          </Error>
                        ) : null}
                        <FieldRadio
                          type="radio"
                          id="radioOne"
                          name="category"
                          value="lost-found"
                          checked={values.category === 'lost-found'}
                        />
                        <LabelRadio htmlFor="radioOne">lost/found</LabelRadio>

                        <FieldRadio
                          type="radio"
                          id="radioTwo"
                          name="category"
                          value="for-free"
                          checked={values.category === 'for-free'}
                        />
                        <LabelRadio htmlFor="radioTwo">for-free</LabelRadio>

                        <FieldRadio
                          type="radio"
                          id="radioThree"
                          name="category"
                          value="sell"
                          checked={values.category === 'sell'}
                        />
                        <LabelRadio htmlFor="radioThree">sell</LabelRadio>
                      </FieldsRadio>
                      <FieldList>
                        <LabelItem htmlFor="title">
                          <span>Title of ad</span>
                          {errors.title && touched.title ? (
                            <Error>{errors.title}</Error>
                          ) : null}
                        </LabelItem>

                        <FieldItem
                          type="text"
                          id="title"
                          name="title"
                          placeholder="Type name"
                          value={values.title}
                        />
                        <LabelItem htmlFor="name">
                          <span>Name pet</span>
                          {errors.name && touched.name ? (
                            <Error>{errors.name}</Error>
                          ) : null}
                        </LabelItem>

                        <FieldItem
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Type name pet"
                          value={values.name}
                        />
                        <LabelItem htmlFor="birthday">
                          <span>Date of birth</span>
                          {errors.birthday && touched.birthday ? (
                            <Error>{errors.birthday}</Error>
                          ) : null}
                        </LabelItem>

                        <FieldItem
                          onFocus={e => {
                            e.target.setAttribute('type', 'date');
                          }}
                          // onBlur={e => {
                          //   e.target.setAttribute('type', 'text');
                          // }}
                          type="text"
                          id="birthday"
                          name="birthday"
                          placeholder="Type day of birth"
                          value={values.birthday}
                        />
                        <LabelItem htmlFor="breed">
                          <span>Breed</span>
                          {errors.breed && touched.breed ? (
                            <Error>{errors.breed}</Error>
                          ) : null}
                        </LabelItem>

                        <FieldItem
                          as="select"
                          type="text"
                          id="breed"
                          name="breed"
                          placeholder="Type breed"
                          defaultValue={values.breed}
                        >
                          {
                            <OptionFirst first value="unselected">
                              Select breed type
                            </OptionFirst>
                          }
                          {breeds.map(breed => (
                            <Option key={breed._id} value={breed['name-en']}>
                              {breed['name-en']}
                            </Option>
                          ))}
                        </FieldItem>
                      </FieldList>
                    </div>
                    <div
                      ref={ref}
                      className="formSecond"
                      style={
                        !formQueue ? { display: 'block' } : { display: 'none' }
                      }
                    >
                      <FieldsRadioSex role="group" id="sex">
                        <p>
                          The sex
                          {errors.sex && touched.sex ? (
                            <Error>{errors.sex}</Error>
                          ) : null}
                        </p>
                        <FieldRadioSex
                          type="radio"
                          id="radioOneSex"
                          name="sex"
                          value="male"
                          checked={values.sex === 'male'}
                        />
                        <LabelRadioSex htmlFor="radioOneSex">
                          <IconMale />
                          <span>Male</span>
                        </LabelRadioSex>

                        <FieldRadioSex
                          type="radio"
                          id="radioTwoSex"
                          name="sex"
                          value="female"
                          checked={values.sex === 'female'}
                        />
                        <LabelRadioSex htmlFor="radioTwoSex">
                          <IconFemale />
                          <span>Female</span>
                        </LabelRadioSex>
                      </FieldsRadioSex>
                      <FieldList>
                        <LabelItem htmlFor="location">
                          <span>Location</span>
                          {errors.location && touched.location ? (
                            <Error>{errors.location}</Error>
                          ) : null}
                        </LabelItem>
                        <div style={{ position: 'relative' }}>
                          <FieldItem
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
                        {values.category === 'sell' ? (
                          <div>
                            <LabelItem htmlFor="price">
                              <span>Price</span>
                              {errors.price && touched.price ? (
                                <Error>{errors.price}</Error>
                              ) : null}
                            </LabelItem>

                            <FieldItem
                              type="number"
                              id="price"
                              name="price"
                              placeholder="Type price"
                              value={values.price}
                            />
                          </div>
                        ) : (
                          ''
                        )}
                        <LabelItem htmlFor="imageUrl">
                          <span>Load the pet’s image</span>
                          {errors.imageUrl && touched.imageUrl ? (
                            <Error>{errors.imageUrl}</Error>
                          ) : null}
                        </LabelItem>

                        <FieldItemFile
                          className="file"
                          type="file"
                          id="imageUrl"
                          name="imageUrl"
                          accept=".jpeg,.jpg,.png,.gif"
                          onChange={e => {
                            handleChange(e);
                            setImage(e);
                          }}
                        />
                        <LabelItemTextArea htmlFor="comments">
                          <span>Comments</span>
                          {errors.comments && touched.comments ? (
                            <Error>{errors.comments}</Error>
                          ) : null}
                        </LabelItemTextArea>

                        <FieldItemTextArea
                          maxLength="120"
                          minLength="8"
                          as="textarea"
                          style={{ resize: 'none', overflow: 'auto' }}
                          type="text"
                          id="comments"
                          name="comments"
                          placeholder="Type comments"
                          onChange={e => handleChange(e)}
                          defaultValue={values.comments}
                        />
                      </FieldList>
                    </div>
                    <div className="btns">
                      <ButtonFirst className="btn__submit" type="submit">
                        {formQueue ? 'Next' : 'Done'}
                      </ButtonFirst>
                      <ButtonSecond
                        type="button"
                        onClick={
                          formQueue ? e => onClickBackdrop(e) : toggleForm
                        }
                      >
                        {formQueue ? 'Cancel' : 'Back'}
                      </ButtonSecond>
                    </div>
                  </>
                </FormStyled>
              )}
            </Formik>
          </div>
        </ModalAddNoticeStyled>
      </Overlay>
    ),
    document.querySelector('#popup-root'),
  );
};
