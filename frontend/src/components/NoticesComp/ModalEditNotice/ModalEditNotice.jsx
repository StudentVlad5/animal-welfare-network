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
  // Paragraph,
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
  // Option,
  // OptionFirst,
  IconCat,
  IconDog,
  FieldRadioType,
  LabelRadioType,
  FieldsRadioType,
} from './ModalEditNotice.styled';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalWindow, closeByEsc } from 'hooks/modalWindow';
import { cleanModal } from 'redux/modal/operation';
import { modalComponent } from 'redux/modal/selectors';
import schemas from 'components/Schemas/schemas';
import React, { useEffect, useState } from 'react';
import { fetchPatchNotice } from 'services/APIservice';
import { onLoading, onLoaded } from 'components/helpers/Loader/Loader';
import { onFetchError } from 'components/helpers/Messages/NotifyMessages';
import usePlacesAutocomplete from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';
import { breedsValue } from 'redux/breeds/selectors';
import { setImage } from 'utils/setimage';
import { useSearchParams } from 'react-router-dom';
import { addReload } from 'redux/reload/slice';
import CreatableSelect from 'react-select/creatable';
import { fetchData } from 'services/APIservice';
import { addBreeds } from 'redux/breeds/slice';
import { useTranslation } from 'react-i18next';

export const ModalEditNotice = () => {
  const [dataOfPet, setDataOfPet] = useState([]);

  const [formQueue, setFormQueue] = useState('first');
  const [fieldPrice, setFieldPrice] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const modal = useSelector(modalComponent);
  const breeds = useSelector(breedsValue);
  const [searchParams] = useSearchParams();

  const sizeForFormik = [
    { value: 'big', label: 'big' },
    { value: 'average', label: 'average' },
    { value: 'small', label: 'small' },
  ];
  const currencyForFormik = [
    { value: '$', label: 'USA' },
    { value: '€', label: 'EUR' },
    { value: '₴', label: 'UAH' },
  ];
  const sterilizationForFormik = [
    { value: 'yes', label: 'yes' },
    { value: 'no', label: 'no' },
  ];
  const livesForFormik = [
    { value: 'in street', label: 'in street' },
    { value: 'shelter', label: 'shelter' },
    { value: 'at volunteers', label: 'at volunteers' },
    { value: 'home', label: 'home' },
  ];

  searchParams.set('perPage', 12);
  searchParams.set('page', 1);
  const { t } = useTranslation();

  let itemForFetch = `/notices/byid/${modal.id}`;

  useEffect(() => {
    async function fetchNoticesList() {
      setIsLoading(true);
      try {
        const { data } = await fetchData(itemForFetch);
        setDataOfPet(data);
        if (!data) {
          return onFetchError(`Can't find anything`);
        }
      } catch (error) {
        setDataOfPet(false);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    if (modal.id !== '') {
      fetchNoticesList();
    }
  }, [itemForFetch, modal.id]);

  const onClickBackdrop = e => {
    setFormQueue('first');
    e.preventDefault();
    e.stopPropagation();
    dispatch(cleanModal());
    closeModalWindow();
  };

  async function postNotice(values) {
    console.log('postNotice ~ values:', values);
    const file1 = document.querySelector('#imageUrl')?.files[0];
    const file2 = document.querySelector('#imageUrl_1')?.files[0];
    const file3 = document.querySelector('#imageUrl_2')?.files[0];
    setIsLoading(true);
    try {
      const { code } = await fetchPatchNotice(
        `/notices/${values.category}/${modal.id}`,
        values,
        file1,
        file2,
        file3,
      );
      if (code && code !== 201) {
        return onFetchError(t('Whoops, something went wrong'));
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

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await fetchData('/breeds');
        dispatch(addBreeds(data));
        if (!data) {
          return alert(t('Whoops, something went wrong'));
        }
      } catch (error) {
        alert(error.message);
      }
    }
    getData();
  }, [dispatch, t]);

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
    Object.values(modal)[0] === 'editItemPet' && (
      <Overlay onClick={e => onClickBackdrop(e)}>
        <ModalAddNoticeStyled onClick={e => e.stopPropagation()}>
          {isLoading ? onLoading() : onLoaded()}
          {error && onFetchError(t('Whoops, something went wrong'))}
          <ButtonClose type="button" onClick={e => onClickBackdrop(e)}>
            <IconClose />
          </ButtonClose>
          <Title>(t{'Edit data of pet'})</Title>
          <div>
            <Formik
              initialValues={{
                category: dataOfPet?.category ? dataOfPet.category : '',
                typeofpet: dataOfPet?.typeofpet ? dataOfPet.typeofpet : '',
                title: dataOfPet?.title ? dataOfPet.title : '',
                name: dataOfPet?.name ? dataOfPet.name : '',
                birthday: dataOfPet?.birthday ? dataOfPet.birthday : '',
                breed: dataOfPet?.breed ? dataOfPet.breed : '',
                sex: dataOfPet?.sex ? dataOfPet.sex : '',
                size: dataOfPet?.size ? dataOfPet.size : '',
                height: dataOfPet?.height ? dataOfPet.height : '',
                weight: dataOfPet?.weight ? dataOfPet.weight : '',
                location: dataOfPet?.location ? dataOfPet.location : '',
                price: dataOfPet?.price ? dataOfPet.price : '',
                currency: dataOfPet?.currency ? dataOfPet.currency : '',
                imageUrl: '',
                imageUrl_1: '',
                imageUrl_2: '',
                passport: dataOfPet?.passport ? dataOfPet.passport : '',
                sterilization: dataOfPet?.sterilization
                  ? dataOfPet.sterilization
                  : '',
                lives: dataOfPet?.lives ? dataOfPet.lives : '',
                comments: dataOfPet?.comments ? dataOfPet.comments : '',
              }}
              onSubmit={values => {
                if (formQueue === 'third') {
                  postNotice(values);
                  closeModalWindow();
                  dispatch(cleanModal());
                  setFormQueue('first');
                  setFieldPrice(false);
                  window.removeEventListener('keydown', closeByEsc);
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
                  : schemas.noticeSchemaThirdforEdit
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
                          Category
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
                          placeholder="Type name"
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
                          placeholder="Type name pet"
                          value={values.name}
                        />
                        <LabelItem htmlFor="birthday">
                          <span>{t('Date of birth')}</span>
                          {errors.birthday && touched.birthday ? (
                            <Error>{errors.birthday}</Error>
                          ) : null}
                        </LabelItem>
                        <div style={{ position: 'relative' }}>
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
                            placeholder="Type day of birth"
                            value={values.birthday}
                          />
                        </div>
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
                          value={values.breed}
                          options={options(values.typeofpet)}
                          className="react-select-container"
                          classNamePrefix="react-select"
                          placeholder={
                            values.typeofpet === ''
                              ? t('Select type of pet firstly...')
                              : values.breed
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
                        <CreatableSelect
                          isClearable
                          type="text"
                          id="size"
                          name="size"
                          placeholder={
                            values.size === ''
                              ? t('Select size type')
                              : values.size
                          }
                          defaultValue={values.size}
                          value={values.size}
                          className="react-select-container"
                          classNamePrefix="react-select"
                          onChange={e => setFieldValue('size', e?.value)}
                          options={sizeForFormik}
                        ></CreatableSelect>

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
                        {values.category === 'sell' && (
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

                            <CreatableSelect
                              isClearable
                              type="text"
                              id="currency"
                              name="currency"
                              placeholder={
                                values.currency === ''
                                  ? t('Select currency')
                                  : values.currency
                              }
                              defaultValue={values.currency}
                              value={values.currency}
                              className="react-select-container"
                              classNamePrefix="react-select"
                              onChange={e =>
                                setFieldValue('currency', e?.value)
                              }
                              options={currencyForFormik}
                            ></CreatableSelect>
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
                          {dataOfPet?.imageUrl ? (
                            <FieldItemFile
                              style={{
                                backgroundImage: `url(${dataOfPet?.imageUrl})`,
                                backgroundSize: '140px ,140px',
                              }}
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
                          ) : (
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
                          )}
                          {dataOfPet?.imageUrl_1 ? (
                            <FieldItemFile
                              style={{
                                backgroundImage: `url(${dataOfPet?.imageUrl_1})`,
                                backgroundSize: '140px ,140px',
                              }}
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
                          ) : (
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
                          {dataOfPet?.imageUrl_2 ? (
                            <FieldItemFile
                              style={{
                                backgroundImage: `url(${dataOfPet?.imageUrl_2})`,
                                backgroundSize: '140px ,140px',
                              }}
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
                          ) : (
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

                        <CreatableSelect
                          isClearable
                          type="text"
                          id="sterilization"
                          name="sterilization"
                          placeholder={
                            values.sterilization === ''
                              ? t('Is sterilized')
                              : values.sterilization
                          }
                          defaultValue={values.sterilization}
                          value={values.sterilization}
                          className="react-select-container"
                          classNamePrefix="react-select"
                          onChange={e =>
                            setFieldValue('sterilization', e?.value)
                          }
                          options={sterilizationForFormik}
                        ></CreatableSelect>

                        <LabelItem htmlFor="lives">
                          <span>{t('Lives')}</span>
                          {errors.lives && touched.lives ? (
                            <Error>{errors.lives}</Error>
                          ) : null}
                        </LabelItem>

                        <CreatableSelect
                          isClearable
                          type="text"
                          id="lives"
                          name="lives"
                          placeholder={
                            values.lives === ''
                              ? t('Select place')
                              : values.lives
                          }
                          defaultValue={values.lives}
                          value={values.lives}
                          className="react-select-container"
                          classNamePrefix="react-select"
                          onChange={e => setFieldValue('lives', e?.value)}
                          options={livesForFormik}
                        ></CreatableSelect>

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
