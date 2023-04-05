import { closeModalWindow } from 'hooks/modalWindow';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cleanModal } from 'redux/modal/operation';
import { modalComponent } from 'redux/modal/selectors';
import ReactDOM from 'react-dom';
import {
  ButtonBackText,
  ButtonBox,
  ButtonFirst,
  ButtonSecond,
  ButtonText,
  ButtonText2,
  ContainerCloseModal,
  ContainerInfo,
  ContainerPositionForCloseModal,
  ErrBox,
  ErrBoxImage,
  FieldItemFile,
  FormDiv,
  ImgTitle,
  InfoList,
  InfoList2,
  InfoListInput,
  InfoListLable,
  InfoListText,
  InfoListTextArea,
  PetsItemTitle,
  UserPetContainerItem,
  Option,
  OptionFirst,
} from './ModalAddsPet.styled';
import { MdClose } from 'react-icons/md';
import { Formik, useFormik } from 'formik';
import schemas from 'components/Schemas/schemas';
import { setImage } from 'utils/setimage';
import { onLoaded, onLoading } from 'components/helpers/Loader/Loader';
import { onFetchError } from 'components/helpers/Messages/NotifyMessages';
import { fetchPetsUser } from 'services/APIservice';
import { breedsValue } from 'redux/breeds/selectors';
import React from 'react';
import { addReload } from 'redux/reload/slice';

export const ModalAddsPet = () => {
  const dispatch = useDispatch();
  const modal = useSelector(modalComponent);
  const breeds = useSelector(breedsValue);

  const onClickBackdrop = e => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(cleanModal());
    closeModalWindow();
    formik.resetForm();
  };

  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState(null);
  const [isShown, setIsShown] = useState(true);

  const showForm = () => {
    setIsShown(false);
  };

  const hideForm = () => {
    setIsShown(true);
  };

  async function postUserPets(values) {
    const file = document.querySelector('.file').files[0];
    setIsLoading(true);
    try {
      const { code } = await fetchPetsUser(`/pets`, values, file);
      if (code && code !== 204) {
        return onFetchError('Whoops, something went wrong');
      }
      dispatch(addReload(true));
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  const onSubmit = values => {
    postUserPets(values);
    formik.resetForm();
    closeModalWindow();
    dispatch(cleanModal());
    setIsShown(true);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      data: '',
      breed: '',
      comments: '',
      imageUrl: '',
    },
    validationSchema: schemas.addPetsUser,
    onSubmit: (values, action) => {
      onSubmit({ values, action });
    },
  });

  return ReactDOM.createPortal(
    Object.values(modal)[0] === 'formAddPets' && (
      <FormDiv className="form" onClick={e => onClickBackdrop(e)}>
        {isLoading ? onLoading() : onLoaded()}
        <div onClick={e => e.stopPropagation()}>
          <Formik>
            <UserPetContainerItem onSubmit={formik.handleSubmit}>
              <ContainerPositionForCloseModal>
                <ContainerCloseModal onClick={e => onClickBackdrop(e)}>
                  <MdClose style={{ width: '15.5px', height: '15.5px' }} />
                </ContainerCloseModal>
              </ContainerPositionForCloseModal>

              <ContainerInfo>
                <PetsItemTitle>Add pet</PetsItemTitle>
                <div
                  style={isShown ? { display: 'block' } : { display: 'none' }}
                >
                  <InfoList>
                    <InfoListLable>
                      <InfoListText>Name pet</InfoListText>
                      <InfoListInput
                        type="text"
                        id="name"
                        name="name"
                        autoComplete="off"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        onBlur={formik.handleBlur}
                        placeholder="Type name pet"
                      />
                      {formik.errors.name || formik.touched.name ? (
                        <ErrBox>{formik.errors.name}</ErrBox>
                      ) : null}
                    </InfoListLable>

                    <InfoListLable>
                      <InfoListText>Date of birth</InfoListText>
                      <InfoListInput
                        onFocus={e => {
                          e.target.setAttribute('type', 'date');
                        }}
                        onBlur={formik.handleBlur}
                        type="text"
                        id="data"
                        name="data"
                        onChange={formik.handleChange}
                        value={formik.values.data}
                        placeholder="Type date of birth"
                      />

                      {formik.errors.data || formik.touched.data ? (
                        <ErrBox>{formik.errors.data}</ErrBox>
                      ) : null}
                    </InfoListLable>

                    <InfoListLable>
                      <InfoListText>Breed</InfoListText>
                      <InfoListInput
                        as="select"
                        type="text"
                        id="breed"
                        name="breed"
                        onChange={formik.handleChange}
                        value={formik.values.breed}
                        onBlur={formik.handleBlur}
                        placeholder="Type breed"
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
                      </InfoListInput>

                      {formik.errors.breed || formik.touched.breed ? (
                        <ErrBox>{formik.errors.breed}</ErrBox>
                      ) : null}
                    </InfoListLable>
                  </InfoList>

                  <ButtonBox>
                    <ButtonFirst type="button" onClick={showForm}>
                      <ButtonText>Next</ButtonText>
                    </ButtonFirst>

                    <ButtonSecond
                      type="button"
                      onClick={e => onClickBackdrop(e)}
                    >
                      <ButtonText2>Cancel</ButtonText2>
                    </ButtonSecond>
                  </ButtonBox>
                </div>

                <div
                  style={!isShown ? { display: 'block' } : { display: 'none' }}
                >
                  <InfoList2>
                    <>
                      <ImgTitle>Add petAdd photo and some comments</ImgTitle>

                      <FieldItemFile
                        className="file"
                        type="file"
                        id="imageUrl"
                        name="imageUrl"
                        accept=".jpeg,.jpg,.png,.gif"
                        onChange={e => {
                          formik.handleChange(e);
                          setImage(e);
                        }}
                      />
                      {formik.errors.imageUrl || formik.touched.imageUrl ? (
                        <ErrBoxImage>{formik.errors.imageUrl}</ErrBoxImage>
                      ) : null}
                    </>

                    <InfoListLable>
                      <InfoListText>Comments</InfoListText>
                      <InfoListTextArea
                        onChange={formik.handleChange}
                        value={formik.values.comments}
                        onBlur={formik.handleBlur}
                        name="comments"
                        placeholder="Type comments"
                      />
                      {formik.errors.comments || formik.touched.comments ? (
                        <ErrBox>{formik.errors.comments}</ErrBox>
                      ) : null}
                    </InfoListLable>
                  </InfoList2>

                  <ButtonBox>
                    <ButtonFirst type="submit">
                      <ButtonText>Done</ButtonText>
                    </ButtonFirst>

                    <ButtonSecond type="button" onClick={hideForm}>
                      <ButtonBackText>Back</ButtonBackText>
                    </ButtonSecond>
                  </ButtonBox>
                </div>
              </ContainerInfo>
            </UserPetContainerItem>
          </Formik>
        </div>
      </FormDiv>
    ),
    document.querySelector('#popup-root'),
  );
};
