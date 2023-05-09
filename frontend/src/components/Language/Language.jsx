import i18next from 'i18next';
import React from 'react';
import { SelectContainerLanguage, SelectLanguage } from './language.styled';

const Language = () => {
  const changeLanguage = event => {
    const language = event.target.value;
    i18next.changeLanguage(language);
  };

  return (
    <SelectContainerLanguage>
      <SelectLanguage onChange={changeLanguage}>
        <option value="en">En</option>
        <option value="ua">Ua</option>
      </SelectLanguage>
    </SelectContainerLanguage>
  );
};

export default Language;
