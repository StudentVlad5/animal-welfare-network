import i18next from 'i18next';
import React from 'react';
import { SelectConteinerLanguage, SelectLanguage } from './language.styled';

const Language = () => {
  const changeLanguage = event => {
    const language = event.target.value;
    i18next.changeLanguage(language);
  };

  return (
    <SelectConteinerLanguage>
      <SelectLanguage onChange={changeLanguage}>
        <option value="en">En</option>
        <option value="ua">Ua</option>
      </SelectLanguage>
    </SelectConteinerLanguage>
  );
};

export default Language;
