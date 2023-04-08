import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik, Formik } from 'formik';
import { ImEye, ImEyeBlocked } from 'react-icons/im';
import { baseColor } from 'components/baseStyles/Variables.styled';
import schemas from 'components/Schemas/schemas';
import { register } from 'redux/auth/operations';
import {
  FormRegister,
  FormContainer,
  Input,
  Button,
  TitleRegister,
  BackButton,
  ShowPassword,
  StyledLink,
  BoxText,
  IconValid,
  IconInValid,
  ErrBox,
  Div,
  LocationList,
  LocationItem,
  FormSection,
} from './RegisterForm.styled';
import usePlacesAutocomplete from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';

const RegisterForm = () => {
  const [isShown, setIsShown] = useState(true);
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = ({ values, action }) => {
    const { name: userName, email, password, phone, location } = values;
    dispatch(
      register({
        userName,
        email,
        password,
        phone,
        location,
      }),
    );
  };

  const showForm = () => {
    setIsShown(false);
  };

  const hideForm = () => {
    setIsShown(true);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      location: '',
    },
    validationSchema: schemas.registerSchema,
    onSubmit: (values, action) => {
      onSubmit({ values, action });
    },
  });

  const isValid =
    (formik.errors.email && formik.touched.email) ||
    (formik.errors.password && formik.touched.password) ||
    (formik.errors.confirmPassword && formik.touched.confirmPassword) ||
    formik.values.email === '' ||
    formik.values.confirmPassword === ''
      ? true
      : false;

  const showPassword = () => {
    setShowPass(!showPass);
  };
  const showConfirmPassword = () => {
    setShowConfirmPass(!showConfirmPass);
  };

  const showAccentValidateInput = (hasValue, isValide) => {
    return !hasValue ? null : isValide ? '#E2001A' : '#3CBC81';
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
        <LocationItem
          key={place_id}
          onClick={() => {
            setFieldValue('location', suggestion.description);
            clearSuggestions();
          }}
        >
          {main_text}
          {', '}
          {secondary_text}
        </LocationItem>
      );
    });

  return (
    <FormSection>
      <FormContainer>
        <Formik validationSchema={schemas.registerSchema}>
          <FormRegister onSubmit={formik.handleSubmit} autoComplete="off">
            <TitleRegister>Register</TitleRegister>
            {isShown && (
              <Div>
                <Input
                  style={{
                    borderColor: showAccentValidateInput(
                      formik.values.email,
                      formik.errors.email,
                    ),
                  }}
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formik.values.email}
                  validate={schemas.registerSchema.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {!formik.values.email ? null : !formik.errors.email ? (
                  <IconValid color={baseColor.colors.success} />
                ) : (
                  <IconInValid color={baseColor.colors.error} />
                )}
                {formik.errors.email && formik.touched.email ? (
                  <ErrBox>{formik.errors.email}</ErrBox>
                ) : null}
              </Div>
            )}
            {isShown && (
              <Div>
                <Input
                  style={{
                    borderColor: showAccentValidateInput(
                      formik.values.password,
                      formik.errors.password,
                    ),
                  }}
                  name="password"
                  type={showPass ? 'text' : 'password'}
                  placeholder="Password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                />

                <ShowPassword onClick={showPassword}>
                  {!showPass ? <ImEyeBlocked /> : <ImEye />}
                </ShowPassword>
                {formik.errors.password && formik.touched.password ? (
                  <ErrBox>{formik.errors.password}</ErrBox>
                ) : null}
              </Div>
            )}
            {isShown && (
              <Div>
                <Input
                  style={{
                    borderColor: showAccentValidateInput(
                      formik.values.confirmPassword,
                      formik.errors.confirmPassword,
                    ),
                  }}
                  name="confirmPassword"
                  type={showConfirmPass ? 'text' : 'password'}
                  placeholder="Confirm Password"
                  onChange={formik.handleChange}
                  value={formik.values.confirmPassword}
                  onBlur={formik.handleBlur}
                />
                <ShowPassword onClick={showConfirmPassword}>
                  {!showConfirmPass ? <ImEyeBlocked /> : <ImEye />}
                </ShowPassword>
                {formik.errors.confirmPassword &&
                formik.touched.confirmPassword ? (
                  <ErrBox>{formik.errors.confirmPassword}</ErrBox>
                ) : null}
              </Div>
            )}
            {isShown && (
              <Button type="button" onClick={showForm} disabled={isValid}>
                Next
              </Button>
            )}
            {!isShown && (
              <Div>
                <Input
                  style={{
                    borderColor: showAccentValidateInput(
                      formik.values.name,
                      formik.errors.name,
                    ),
                  }}
                  name="name"
                  type="text"
                  placeholder="Name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                />
                {!formik.values.name ? null : !formik.errors.name ? (
                  <IconValid color={baseColor.colors.success} />
                ) : (
                  <IconInValid color={baseColor.colors.error} />
                )}
                {formik.errors.name && formik.touched.name ? (
                  <ErrBox>{formik.errors.name}</ErrBox>
                ) : null}
              </Div>
            )}
            {!isShown && (
              <Div ref={ref}>
                <Input
                  style={{
                    borderColor: showAccentValidateInput(
                      formik.values.location,
                      formik.errors.location,
                    ),
                  }}
                  name="location"
                  type="text"
                  placeholder="Location, region"
                  value={formik.values.location}
                  onBlur={formik.handleBlur}
                  disabled={!ready}
                  onChange={e => {
                    formik.handleChange(e);
                    handleInput(e);
                  }}
                />
                {!formik.values.location ? null : !formik.errors.location ? (
                  <IconValid color={baseColor.colors.success} />
                ) : (
                  <IconInValid color={baseColor.colors.error} />
                )}

                {status === 'OK' && (
                  <LocationList>
                    {renderSuggestions(formik.setFieldValue)}
                  </LocationList>
                )}

                {formik.errors.location && formik.touched.location ? (
                  <ErrBox>{formik.errors.location}</ErrBox>
                ) : null}
              </Div>
            )}
            {!isShown && (
              <Div>
                <Input
                  style={{
                    borderColor: showAccentValidateInput(
                      formik.values.phone,
                      formik.errors.phone,
                    ),
                  }}
                  id="phone"
                  type="phone"
                  placeholder="Mobile phone"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  onBlur={formik.handleBlur}
                  name="phone"
                />
                {!formik.values.phone ? null : !formik.errors.phone ? (
                  <IconValid color={baseColor.colors.success} />
                ) : (
                  <IconInValid color={baseColor.colors.error} />
                )}
                {formik.errors.phone && formik.touched.phone ? (
                  <ErrBox>{formik.errors.phone}</ErrBox>
                ) : null}
              </Div>
            )}
            {!isShown && <Button type="submit">Register</Button>}
            {!isShown && (
              <BackButton type="button" onClick={hideForm}>
                Back
              </BackButton>
            )}
            <BoxText>
              <span>Already have an account?</span>{' '}
              <StyledLink to="/login">Login</StyledLink>
            </BoxText>
          </FormRegister>
        </Formik>
      </FormContainer>
    </FormSection>
  );
};

export default RegisterForm;
