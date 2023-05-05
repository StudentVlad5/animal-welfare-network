import { Formik } from 'formik';
import {
  ButtonStyled,
  FormStyled,
  FieldStyled,
  LabelStyled,
  IconSearch,
} from './NewsSearch.styled';

export const NewsSearch = ({ searchText, setParams }) => {
  return (
    <Formik
      initialValues={{ search: !searchText ? '' : searchText }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        setParams(values.search);
      }}
    >
      {({ isSubmitting, values, handleSubmit, handleChange }) => (
        <FormStyled onSubmit={handleSubmit} autoComplete="off">
          <LabelStyled>
            <FieldStyled
              id="search"
              type="search"
              name="search"
              placeholder="Search"
              value={values.search}
              onChange={e => {
                handleChange(e);
                if (e.target.value === '') {
                  setParams(null);
                }
              }}
            />
            <ButtonStyled type="submit" disabled={isSubmitting}>
              <IconSearch />
            </ButtonStyled>
          </LabelStyled>
        </FormStyled>
      )}
    </Formik>
  );
};
