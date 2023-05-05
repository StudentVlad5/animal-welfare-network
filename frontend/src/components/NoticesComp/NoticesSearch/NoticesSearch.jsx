import React from 'react';
import { Formik } from 'formik';
import {
  ButtonStyled,
  FormStyled,
  FieldStyled,
  LabelStyled,
  IconSearch,
} from './NoticesSearch.styled';
import { onInfo } from 'components/helpers/Messages/NotifyMessages';
import { useSearchParams } from 'react-router-dom';

export const NoticesSearch = ({ setPages }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const setParams = search => {
    const params = getParams();
    params.page = 1;
    setPages(1);
    if (!search) {
      !params.findtext && onInfo('Fill the field!');
      delete params.findtext;
      setSearchParams(params);
      return;
    }
    params.findtext = search;
    setSearchParams(params);
  };

  const getParams = () => {
    const params = Object.fromEntries(searchParams);
    return params;
  };
  return (
    <Formik
      initialValues={{ search: searchParams.get('findtext') }}
      onSubmit={(values, actions) => {
        actions.setSubmitting(false);
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
            <div>
              <ButtonStyled type="submit" disabled={isSubmitting}>
                <IconSearch />
              </ButtonStyled>
            </div>
          </LabelStyled>
        </FormStyled>
      )}
    </Formik>
  );
};
