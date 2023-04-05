import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

export function SEO({ title, description }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
