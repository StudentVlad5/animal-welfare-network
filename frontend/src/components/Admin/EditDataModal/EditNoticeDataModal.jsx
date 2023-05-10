import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdClose, MdDone } from 'react-icons/md';
import CreatableSelect from 'react-select/creatable';
import usePlacesAutocomplete from 'use-places-autocomplete';
import { Formik } from 'formik';
import { closeModalWindow } from 'hooks/modalWindow';
import { cleanModal } from 'redux/modal/operation';
import { modalComponent } from 'redux/modal/selectors';
import { addReload } from 'redux/reload/slice';
import { addBreeds } from 'redux/breeds/slice';
import { breedsValue } from 'redux/breeds/selectors';
import { fetchData, fetchPatchNotice } from 'services/APIservice';
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

export const EditNoticeDataModal = () => {
  const [dataUpdate, setDataUpdate] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const breeds = useSelector(breedsValue);
  const modal = useSelector(modalComponent);
  const dispatch = useDispatch();

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
  const typeofpetForFormik = [
    { value: 'dog', label: 'dog' },
    { value: 'cat', label: 'cat' },
  ];
  const livesForFormik = [
    { value: 'in street', label: 'in street' },
    { value: 'shelter', label: 'shelter' },
    { value: 'at volunteers', label: 'at volunteers' },
    { value: 'home', label: 'home' },
  ];
  const categoryForFormik = [
    { value: 'needs-care', label: 'needs-care' },
    { value: 'for-free', label: 'for-free' },
    { value: 'sell', label: 'sell' },
    { value: 'none', label: 'none' },
  ];

  const itemForFetch = `/notices/byid/${modal.id}`;

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

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await fetchData('/breeds');
        dispatch(addBreeds(data));
        if (!data) {
          return alert('Whoops, something went wrong');
        }
      } catch (error) {
        alert(error.message);
      }
    }
    getData();
  }, [dispatch]);

  async function editNotice(values) {
    console.log('editNotice ~ values:', values);
    const file1 = document.querySelector('#imageUrl')?.files[0];
    const file2 = document.querySelector('#imageUrl_1')?.files[0];
    const file3 = document.querySelector('#imageUrl_2')?.files[0];
    setIsLoading(true);
    try {
      const { code } = await fetchPatchNotice(
        `/admin/notices/${modal.id}`,
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

  const closeDataModal = e => {
    e.preventDefault();
    dispatch(cleanModal());
    closeModalWindow(e);
  };

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
              category: dataUpdate?.category ? dataUpdate.category : '',
              typeofpet: dataUpdate?.typeofpet ? dataUpdate.typeofpet : '',
              title: dataUpdate?.title ? dataUpdate.title : '',
              name: dataUpdate?.name ? dataUpdate.name : '',
              birthday: dataUpdate?.birthday ? dataUpdate.birthday : '',
              breed: dataUpdate?.breed ? dataUpdate.breed : '',
              sex: dataUpdate?.sex ? dataUpdate.sex : '',
              size: dataUpdate?.size ? dataUpdate.size : '',
              height: dataUpdate?.height ? dataUpdate.height : '',
              weight: dataUpdate?.weight ? dataUpdate.weight : '',
              location: dataUpdate?.location ? dataUpdate.location : '',
              price: dataUpdate?.price ? dataUpdate.price : '',
              currency: dataUpdate?.currency ? dataUpdate.currency : '',
              imageUrl: '',
              imageUrl_1: '',
              imageUrl_2: '',
              passport: dataUpdate?.passport ? dataUpdate.passport : '',
              sterilization: dataUpdate?.sterilization
                ? dataUpdate.sterilization
                : '',
              lives: dataUpdate?.lives ? dataUpdate.lives : '',
              comments: dataUpdate?.comments ? dataUpdate.comments : '',
              email: dataUpdate?.email ? dataUpdate.email : '',
              phone: dataUpdate?.phone ? dataUpdate.phone : '',
            }}
            onSubmit={values => {
              editNotice(values);
              // closeDataModal();
              dispatch(addReload(false));
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
                      placeholder="Pet's id"
                      disabled
                    />
                  </FieldStyled>
                  <FieldStyled>
                    <Label htmlFor="category">
                      <span>Category</span>
                      {errors.category && touched.category ? (
                        <Error>{errors.category}</Error>
                      ) : null}
                    </Label>
                    <CreatableSelect
                      isClearable
                      type="text"
                      id="category"
                      name="category"
                      placeholder={
                        values.category === ''
                          ? 'Pet category'
                          : values.category
                      }
                      defaultValue={values.category}
                      value={values.category}
                      className="react-select-container"
                      classNamePrefix="react-select"
                      onChange={e => {
                        setFieldValue('category', e?.value);
                      }}
                      options={categoryForFormik}
                    ></CreatableSelect>
                  </FieldStyled>
                  <FieldStyled>
                    <Label htmlFor="typeofpet">Type of pet</Label>
                    <CreatableSelect
                      isClearable
                      type="text"
                      id="typeofpet"
                      name="typeofpet"
                      placeholder={
                        values.typeofpet === ''
                          ? 'Type of pet'
                          : values.typeofpet
                      }
                      defaultValue={values.typeofpet}
                      value={values.typeofpet}
                      className="react-select-container"
                      classNamePrefix="react-select"
                      onChange={e => setFieldValue('typeofpet', e?.value)}
                      options={typeofpetForFormik}
                    ></CreatableSelect>
                  </FieldStyled>
                  <FieldStyled>
                    <Label htmlFor="title">
                      <span>Title of ad</span>
                      {errors.title && touched.title ? (
                        <Error>{errors.title}</Error>
                      ) : null}
                    </Label>
                    <Input
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Type title"
                      value={values.title}
                    />
                  </FieldStyled>
                  <FieldStyled>
                    <Label htmlFor="name">
                      <span>Name pet</span>
                      {errors.name && touched.name ? (
                        <Error>{errors.name}</Error>
                      ) : null}
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Type name pet"
                      value={values.name}
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
                        min={'2000-01-01'}
                        max={`${new Date().toISOString().split('T')[0]}`}
                        placeholder="Type day of birth"
                        value={values.birthday}
                      />
                    </div>
                  </FieldStyled>
                  <FieldStyled>
                    <Label htmlFor="breed">
                      <span>Breed</span>
                      {errors.breed && touched.breed ? (
                        <Error>{errors.breed}</Error>
                      ) : null}
                    </Label>
                    <CreatableSelect
                      isClearable
                      isDisabled={values.typeofpet === '' ? true : false}
                      type="text"
                      value={values.breed}
                      options={options(values.typeofpet)}
                      className="react-select-container"
                      classNamePrefix="react-select"
                      placeholder={
                        values.typeofpet === ''
                          ? 'Select type of pet'
                          : values.breed
                      }
                      onChange={e => setFieldValue('breed', e?.value)}
                    />
                  </FieldStyled>
                  <FieldStyled>
                    <Label htmlFor="sex">
                      <span>Sex</span>
                      {errors.sex && touched.sex ? (
                        <Error>{errors.sex}</Error>
                      ) : null}
                    </Label>
                    <Input
                      type="text"
                      id="sex"
                      name="sex"
                      placeholder="The sex"
                      value={values.sex}
                    />
                  </FieldStyled>
                  <FieldStyled>
                    <Label htmlFor="size">
                      <span>Size</span>
                      {errors.size && touched.size ? (
                        <Error>{errors.size}</Error>
                      ) : null}
                    </Label>
                    <CreatableSelect
                      isClearable
                      type="text"
                      id="size"
                      name="size"
                      placeholder={
                        values.size === '' ? 'Pet size' : values.size
                      }
                      defaultValue={values.size}
                      value={values.size}
                      className="react-select-container"
                      classNamePrefix="react-select"
                      onChange={e => setFieldValue('size', e?.value)}
                      options={sizeForFormik}
                    ></CreatableSelect>
                  </FieldStyled>
                  <FieldStyled>
                    <Label htmlFor="height">
                      <span>Height in cm</span>
                      {errors.height && touched.height ? (
                        <Error>{errors.height}</Error>
                      ) : null}
                    </Label>
                    <Input
                      type="number"
                      id="height"
                      name="height"
                      placeholder="Type height in cm"
                      value={values.height}
                    />
                  </FieldStyled>
                  <FieldStyled>
                    <Label htmlFor="weight">
                      <span>Weight in kg</span>
                      {errors.weight && touched.weight ? (
                        <Error>{errors.weight}</Error>
                      ) : null}
                    </Label>
                    <Input
                      type="number"
                      id="weight"
                      name="weight"
                      placeholder="Type weight in kg"
                      value={values.weight}
                    />
                  </FieldStyled>
                </FieldList>
                <FieldList>
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
                    <Label htmlFor="price">
                      <span>Price</span>
                      {errors.price && touched.price ? (
                        <Error>{errors.price}</Error>
                      ) : null}
                    </Label>
                    <Input
                      type="number"
                      id="price"
                      name="price"
                      placeholder="Type price"
                      value={values.price}
                    />
                  </FieldStyled>
                  <FieldStyled>
                    <Label htmlFor="currency">
                      <span>Currency</span>
                      {errors.currency && touched.currency ? (
                        <Error>{errors.currency}</Error>
                      ) : null}
                    </Label>
                    <CreatableSelect
                      isClearable
                      type="text"
                      id="currency"
                      name="currency"
                      placeholder={
                        values.currency === ''
                          ? 'Select currency'
                          : values.currency
                      }
                      defaultValue={values.currency}
                      value={values.currency}
                      className="react-select-container"
                      classNamePrefix="react-select"
                      onChange={e => setFieldValue('currency', e?.value)}
                      options={currencyForFormik}
                    ></CreatableSelect>
                  </FieldStyled>
                  <FieldStyled>
                    <Label htmlFor="imageUrl">
                      <span>The pet’s image</span>
                      {errors.imageUrl && touched.imageUrl ? (
                        <Error>{errors.imageUrl}</Error>
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
                      {dataUpdate?.imageUrl ? (
                        <FieldItemFile
                          style={{
                            backgroundImage: `url(${dataUpdate?.imageUrl})`,
                            backgroundSize: '50px ,50px',
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
                      {dataUpdate?.imageUrl_1 ? (
                        <FieldItemFile
                          style={{
                            backgroundImage: `url(${dataUpdate?.imageUrl_1})`,
                            backgroundSize: '50px ,50px',
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
                      {dataUpdate?.imageUrl_2 ? (
                        <FieldItemFile
                          style={{
                            backgroundImage: `url(${dataUpdate?.imageUrl_2})`,
                            backgroundSize: '50px ,50px',
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
                  </FieldStyled>
                  <FieldStyled>
                    <Label htmlFor="passport">
                      <span>Passport</span>
                      {errors.passport && touched.passport ? (
                        <Error>{errors.passport}</Error>
                      ) : null}
                    </Label>
                    <Input
                      type="text"
                      id="passport"
                      name="passport"
                      placeholder="Type passport data"
                      value={values.passport}
                    />
                  </FieldStyled>
                  <FieldStyled>
                    <Label htmlFor="sterilization">
                      <span>Sterilization</span>
                      {errors.sterilization && touched.sterilization ? (
                        <Error>{errors.sterilization}</Error>
                      ) : null}
                    </Label>
                    <CreatableSelect
                      isClearable
                      type="text"
                      id="sterilization"
                      name="sterilization"
                      placeholder={
                        values.sterilization === ''
                          ? 'Is sterilized'
                          : values.sterilization
                      }
                      defaultValue={values.sterilization}
                      value={values.sterilization}
                      className="react-select-container"
                      classNamePrefix="react-select"
                      onChange={e => setFieldValue('sterilization', e?.value)}
                      options={sterilizationForFormik}
                    ></CreatableSelect>
                  </FieldStyled>
                  <FieldStyled>
                    <Label htmlFor="lives">
                      <span>Lives</span>
                      {errors.lives && touched.lives ? (
                        <Error>{errors.lives}</Error>
                      ) : null}
                    </Label>
                    <CreatableSelect
                      isClearable
                      type="text"
                      id="lives"
                      name="lives"
                      placeholder={
                        values.lives === '' ? 'Select place' : values.lives
                      }
                      defaultValue={values.lives}
                      value={values.lives}
                      className="react-select-container"
                      classNamePrefix="react-select"
                      onChange={e => setFieldValue('lives', e?.value)}
                      options={livesForFormik}
                    ></CreatableSelect>
                  </FieldStyled>
                  <FieldStyled>
                    <Label htmlFor="comments">
                      <span>Comments</span>
                      {errors.comments && touched.comments ? (
                        <Error>{errors.comments}</Error>
                      ) : null}
                    </Label>
                    <Input
                      type="text"
                      id="comments"
                      name="comments"
                      placeholder="Type comments"
                      value={values.comments}
                    />
                  </FieldStyled>
                  <FieldStyled>
                    <Label htmlFor="email">
                      <span>Owner email</span>
                      {errors.email && touched.email ? (
                        <Error>{errors.email}</Error>
                      ) : null}
                    </Label>
                    <Input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Owner email"
                      value={values.email}
                    />
                  </FieldStyled>
                  <FieldStyled>
                    <Label htmlFor="phone">
                      <span>Owner phone</span>
                      {errors.phone && touched.phone ? (
                        <Error>{errors.phone}</Error>
                      ) : null}
                    </Label>
                    <Input
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder="Owner phone"
                      value={values.phone}
                    />
                  </FieldStyled>
                  <DoneIconBtn
                    type="submit"
                    disabled={isSubmitting}
                    // onClick={e => closeDataModal(e)}
                    aria-label="Submit"
                  >
                    <MdDone size={15} />
                  </DoneIconBtn>
                </FieldList>
              </FormStyled>
            )}
          </Formik>
        </Modal>
      </BackDrop>
    ),
    document.querySelector('#popup-root'),
  );
};
