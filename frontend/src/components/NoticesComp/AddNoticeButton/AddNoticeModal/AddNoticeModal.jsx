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
  IconCat,
  IconDog,
  FieldRadioType,
  LabelRadioType,
  FieldsRadioType,
} from './AddNoticeModal.styled';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalWindow, closeByEsc } from 'hooks/modalWindow';
import { cleanModal } from 'redux/modal/operation';
import { modalComponent } from 'redux/modal/selectors';
import schemas from 'components/Schemas/schemas';
import React, { useState } from 'react';
import { fetchNotice } from 'services/APIservice';
import { onLoading, onLoaded } from 'components/helpers/Loader/Loader';
import { onFetchError } from 'components/helpers/Messages/NotifyMessages';
import usePlacesAutocomplete from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';
import { breedsValue } from 'redux/breeds/selectors';
import { setImage } from 'utils/setimage';
import { useSearchParams } from 'react-router-dom';
import { addReload } from 'redux/reload/slice';
import CreatableSelect from 'react-select/creatable';
import { useTranslation } from 'react-i18next';

export const AddNoticeModal = () => {
  const [formQueue, setFormQueue] = useState('first');
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
  const { t } = useTranslation();

  const onClickBackdrop = e => {
    setFieldPrice(false);
    setFormQueue('first');
    e.preventDefault();
    e.stopPropagation();
    dispatch(cleanModal());
    closeModalWindow();
  };

  async function postNotice(values) {
    const file1 = document.querySelector('#imageUrl')?.files[0];
    const file2 = document.querySelector('#imageUrl_1')?.files[0];
    const file3 = document.querySelector('#imageUrl_2')?.files[0];
    setIsLoading(true);
    try {
      const { code } = await fetchNotice(
        `/notices/${values.category}`,
        values,
        file1,
        file2,
        file3,
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

  function changeBack(e) {
    if (formQueue === 'first') {
      onClickBackdrop(e);
    } else if (formQueue === 'second') {
      setFormQueue('first');
    } else if (formQueue === 'third') {
      setFormQueue('second');
    }
  }

  function options(typeofpet) {
    const options = [];
    breeds
      .filter(breed => breed.typeofpet === typeofpet)
      .forEach(breed => {
        const obj = {};
        obj.value = breed['name-en'].toLowerCase();
        obj.label = breed['name-en'];
        options.push(obj);
      });
    return options;
  }

  return ReactDOM.createPortal(
    Object.values(modal)[0] === 'formSell' && (
      <Overlay onClick={e => onClickBackdrop(e)}>
        <ModalAddNoticeStyled onClick={e => e.stopPropagation()}>
          {isLoading ? onLoading() : onLoaded()}
          {error && onFetchError(t('Whoops, something went wrong'))}
          <ButtonClose type="button" onClick={e => onClickBackdrop(e)}>
            <IconClose />
          </ButtonClose>
          <Title>{t('Add pet')}</Title>
          <div>
            <Formik
              initialValues={{
                category: '',
                typeofpet: '',
                title: '',
                name: '',
                birthday: '',
                breed: '',
                sex: '',
                size: '',
                height: '',
                weight: '',
                location: '',
                price: '',
                currency: '',
                imageUrl: '',
                imageUrl_1: '',
                imageUrl_2: '',
                passport: '',
                sterilization: '',
                lives: '',
                comments: '',
              }}
              onSubmit={values => {
                if (formQueue === 'third') {
                  postNotice(values);
                  closeModalWindow();
                  dispatch(cleanModal());
                  setFormQueue('first');
                  setFieldPrice(false);
                  window.removeEventListener('keydown', closeByEsc);
                  navigate(`/notices/own?${searchParams}`);
                  dispatch(addReload(false));
                } else if (formQueue === 'first') {
                  setFormQueue('second');
                } else if (formQueue === 'second') {
                  setFormQueue('third');
                }
              }}
              enableReinitialize={true}
              validationSchema={
                formQueue === 'first'
                  ? schemas.noticeSchemaFirst
                  : formQueue === 'second'
                  ? !fieldPrice
                    ? schemas.noticeSchemaSecond
                    : schemas.noticeSchemaSecondPrice
                  : schemas.noticeSchemaThird
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
                    values.category === 'sell'
                      ? setFieldPrice(true)
                      : setFieldPrice(false);
                  }}
                >
                  <>
                    <div
                      className="formFirst"
                      style={
                        formQueue === 'first'
                          ? { display: 'block' }
                          : { display: 'none' }
                      }
                    >
                      <FieldsRadio role="group" id="category">
                        <p>
                          {t('Category')}
                          {errors.category && touched.category ? (
                            <Error style={{ top: '-20px' }}>
                              {errors.category}
                            </Error>
                          ) : null}
                        </p>
                        <FieldRadio
                          type="radio"
                          id="radioOne"
                          name="category"
                          value="needs-care"
                          checked={values.category === 'needs-care'}
                        />
                        <LabelRadio htmlFor="radioOne">
                          {t('needs-care')}
                        </LabelRadio>

                        <FieldRadio
                          type="radio"
                          id="radioTwo"
                          name="category"
                          value="for-free"
                          checked={values.category === 'for-free'}
                        />
                        <LabelRadio htmlFor="radioTwo">
                          {t('for-free')}
                        </LabelRadio>

                        <FieldRadio
                          type="radio"
                          id="radioThree"
                          name="category"
                          value="sell"
                          checked={values.category === 'sell'}
                        />
                        <LabelRadio htmlFor="radioThree">
                          {t('sell')}
                        </LabelRadio>

                        <FieldRadio
                          type="radio"
                          id="radioFour"
                          name="category"
                          value="none"
                          checked={values.category === 'none'}
                        />
                        <LabelRadio htmlFor="radioFour">
                          {t('without')}
                        </LabelRadio>
                      </FieldsRadio>

                      <FieldsRadioType role="group" id="typeofpet">
                        <p>
                          {t('Type of pet')}
                          {errors.type && touched.type ? (
                            <Error>{errors.type}</Error>
                          ) : null}
                        </p>
                        <FieldRadioType
                          type="radio"
                          id="radioOneType"
                          name="typeofpet"
                          value="cat"
                          checked={values.typeofpet === 'cat'}
                        />
                        <LabelRadioType htmlFor="radioOneType">
                          <IconCat />
                          <span>{t('Cat')}</span>
                        </LabelRadioType>

                        <FieldRadioType
                          type="radio"
                          id="radioTwoType"
                          name="typeofpet"
                          value="dog"
                          checked={values.typeofpet === 'dog'}
                        />
                        <LabelRadioType htmlFor="radioTwoType">
                          <IconDog />
                          <span>{t('Dog')}</span>
                        </LabelRadioType>
                      </FieldsRadioType>

                      <FieldList>
                        <LabelItem htmlFor="title">
                          <span>{t('Title of ad')}</span>
                          {errors.title && touched.title ? (
                            <Error>{errors.title}</Error>
                          ) : null}
                        </LabelItem>

                        <FieldItem
                          type="text"
                          id="title"
                          name="title"
                          placeholder={t('Type name')}
                          value={values.title}
                        />
                        <LabelItem htmlFor="name">
                          <span>{t('Name pet')}</span>
                          {errors.name && touched.name ? (
                            <Error>{errors.name}</Error>
                          ) : null}
                        </LabelItem>

                        <FieldItem
                          type="text"
                          id="name"
                          name="name"
                          placeholder={t('Type name pet')}
                          value={values.name}
                        />
                        <LabelItem htmlFor="birthday">
                          <span>{t('Date of birth')}</span>
                          {errors.birthday && touched.birthday ? (
                            <Error>{errors.birthday}</Error>
                          ) : null}
                        </LabelItem>

                        <FieldItem
                          onFocus={e => {
                            e.target.setAttribute('type', 'date');
                          }}
                          onBlur={e => {
                            e.target.setAttribute('type', 'text');
                          }}
                          type="text"
                          id="birthday"
                          name="birthday"
                          min={'2000-01-01'}
                          max={`${new Date().toISOString().split('T')[0]}`}
                          placeholder={t('Type day of birth')}
                          value={values.birthday}
                        />
                        <LabelItem htmlFor="breed">
                          <span>{t('Breed')}</span>
                          {errors.breed && touched.breed ? (
                            <Error>{errors.breed}</Error>
                          ) : null}
                        </LabelItem>

                        <CreatableSelect
                          isClearable
                          isDisabled={values.typeofpet === '' ? true : false}
                          type="text"
                          defaultValue={values.breed}
                          options={options(values.typeofpet)}
                          className="react-select-container"
                          classNamePrefix="react-select"
                          placeholder={
                            values.typeofpet === ''
                              ? t('Select type of pet firstly...')
                              : t('Select breed...')
                          }
                          onChange={e => setFieldValue('breed', e?.value)}
                        />
                      </FieldList>
                    </div>
                    <div
                      ref={ref}
                      className="formSecond"
                      style={
                        formQueue === 'second'
                          ? { display: 'block' }
                          : { display: 'none' }
                      }
                    >
                      <FieldsRadioSex role="group" id="sex">
                        <p>
                          {t('The sex')}
                          {errors.sex && touched.sex ? (
                            <Error>{errors.sex}</Error>
                          ) : null}
                        </p>
                        <FieldRadioSex
                          type="radio"
                          id="radioOneSex"
                          name="sex"
                          value="boy"
                          checked={values.sex === 'boy'}
                        />
                        <LabelRadioSex htmlFor="radioOneSex">
                          <IconMale />
                          <span>{t('Boy')}</span>
                        </LabelRadioSex>

                        <FieldRadioSex
                          type="radio"
                          id="radioTwoSex"
                          name="sex"
                          value="girl"
                          checked={values.sex === 'girl'}
                        />
                        <LabelRadioSex htmlFor="radioTwoSex">
                          <IconFemale />
                          <span>{t('Girl')}</span>
                        </LabelRadioSex>
                      </FieldsRadioSex>
                      <FieldList>
                        <LabelItem htmlFor="size">
                          <span>{t('Size')}</span>
                          {errors.size && touched.size ? (
                            <Error>{errors.size}</Error>
                          ) : null}
                        </LabelItem>

                        <FieldItem
                          as="select"
                          type="text"
                          id="size"
                          name="size"
                          placeholder={t('Pet size')}
                          defaultValue={values.size}
                        >
                          {
                            <OptionFirst first value="unselected">
                              {t('Select size type')}
                            </OptionFirst>
                          }
                          {[t('Big'), t('Average'), t('Small')].map(s => (
                            <Option key={s} value={s.toLowerCase()}>
                              {s}
                            </Option>
                          ))}
                        </FieldItem>

                        <LabelItem htmlFor="height">
                          <span>{t('Height in cm')}</span>
                          {errors.height && touched.height ? (
                            <Error>{errors.height}</Error>
                          ) : null}
                        </LabelItem>

                        <FieldItem
                          type="number"
                          id="height"
                          name="height"
                          placeholder={t('Type height in cm')}
                          value={values.height}
                        />

                        <LabelItem htmlFor="weight">
                          <span>{t('Weight in kg')}</span>
                          {errors.weight && touched.weight ? (
                            <Error>{errors.weight}</Error>
                          ) : null}
                        </LabelItem>

                        <FieldItem
                          type="number"
                          id="weight"
                          name="weight"
                          placeholder={t('Type weight in kg')}
                          value={values.weight}
                        />

                        <LabelItem htmlFor="location">
                          <span>{t('Location')}</span>
                          {errors.location && touched.location ? (
                            <Error>{errors.location}</Error>
                          ) : null}
                        </LabelItem>
                        <div style={{ position: 'relative' }}>
                          <FieldItem
                            type="text"
                            id="location"
                            name="location"
                            placeholder={t('Type location')}
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
                        {fieldPrice && (
                          <div>
                            <LabelItem htmlFor="price">
                              <span>{t('Price')}</span>
                              {errors.price && touched.price ? (
                                <Error>{errors.price}</Error>
                              ) : null}
                            </LabelItem>

                            <FieldItem
                              type="number"
                              id="price"
                              name="price"
                              placeholder={t('Type price')}
                              value={values.price}
                            />

                            <LabelItem htmlFor="currency">
                              <span>{t('Currency')}</span>
                              {errors.currency && touched.currency ? (
                                <Error>{errors.currency}</Error>
                              ) : null}
                            </LabelItem>

                            <FieldItem
                              as="select"
                              type="text"
                              id="currency"
                              name="currency"
                              placeholder={t('Select currency')}
                              defaultValue={values.currency}
                            >
                              {
                                <OptionFirst first value="unselected">
                                  {t('Select currency')}
                                </OptionFirst>
                              }
                              {['₴', '$', '€'].map(s => (
                                <Option key={s} value={s.toLowerCase()}>
                                  {s}
                                </Option>
                              ))}
                            </FieldItem>
                          </div>
                        )}
                      </FieldList>
                    </div>
                    <div
                      className="formThird"
                      style={
                        formQueue === 'third'
                          ? { display: 'block' }
                          : { display: 'none' }
                      }
                    >
                      <FieldList>
                        <LabelItem htmlFor="imageUrl">
                          <span>{t('Load the pet’s image')}</span>
                          {errors.imageUrl && touched.imageUrl ? (
                            <Error>{errors.imageUrl}</Error>
                          ) : null}
                        </LabelItem>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            gap: '4px',
                          }}
                        >
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

                          {values.imageUrl !== '' && (
                            <FieldItemFile
                              className="file"
                              type="file"
                              id="imageUrl_1"
                              name="imageUrl_1"
                              accept=".jpeg,.jpg,.png,.gif"
                              onChange={e => {
                                handleChange(e);
                                setImage(e);
                              }}
                            />
                          )}

                          {values.imageUrl_1 !== '' && (
                            <FieldItemFile
                              className="file"
                              type="file"
                              id="imageUrl_2"
                              name="imageUrl_2"
                              accept=".jpeg,.jpg,.png,.gif"
                              onChange={e => {
                                handleChange(e);
                                setImage(e);
                              }}
                            />
                          )}
                        </div>
                        <LabelItem htmlFor="passport">
                          <span>{t('Passport')}</span>
                          {errors.passport && touched.passport ? (
                            <Error>{errors.passport}</Error>
                          ) : null}
                        </LabelItem>

                        <FieldItem
                          type="text"
                          id="passport"
                          name="passport"
                          placeholder={t('Type passport data')}
                          value={values.passport}
                        />

                        <LabelItem htmlFor="sterilization">
                          <span>{t('Sterilization')}</span>
                          {errors.sterilization && touched.sterilization ? (
                            <Error>{errors.sterilization}</Error>
                          ) : null}
                        </LabelItem>

                        <FieldItem
                          as="select"
                          type="text"
                          id="sterilization"
                          name="sterilization"
                          placeholder={t('Is sterilized')}
                          defaultValue={values.sterilization}
                        >
                          {
                            <OptionFirst first value="unselected">
                              {t('Select option...')}
                            </OptionFirst>
                          }
                          {[t('Yes'), t('No')].map(s => (
                            <Option key={s} value={s.toLowerCase()}>
                              {s}
                            </Option>
                          ))}
                        </FieldItem>

                        <LabelItem htmlFor="lives">
                          <span>{t('Lives')}</span>
                          {errors.lives && touched.lives ? (
                            <Error>{errors.lives}</Error>
                          ) : null}
                        </LabelItem>

                        <FieldItem
                          as="select"
                          type="text"
                          id="lives"
                          name="lives"
                          placeholder={t('Select place')}
                          defaultValue={values.lives}
                        >
                          {
                            <OptionFirst first value="unselected">
                              {t('Select option...')}
                            </OptionFirst>
                          }
                          {[
                            t('In street'),
                            t('Shelter'),
                            t('At volunteers'),
                            t('Home'),
                          ].map(s => (
                            <Option key={s} value={s.toLowerCase()}>
                              {s}
                            </Option>
                          ))}
                        </FieldItem>

                        <LabelItemTextArea htmlFor="comments">
                          <span>{t('Comments')}</span>
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
                          placeholder={t('Type comments')}
                          onChange={e => handleChange(e)}
                          defaultValue={values.comments}
                        />
                      </FieldList>
                    </div>
                    <div className="btns">
                      <ButtonFirst className="btn__submit" type="submit">
                        {formQueue !== 'third' ? t('Next') : t('Done')}
                      </ButtonFirst>
                      <ButtonSecond type="button" onClick={e => changeBack(e)}>
                        {formQueue === 'first' ? t('Cancel') : t('Back')}
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
