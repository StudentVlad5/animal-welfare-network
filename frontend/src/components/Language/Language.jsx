// import i18n from 'i18n';
import i18next from 'i18next';
import React from 'react';

export const Language = () => {
  // const { i18n } = useTranslation();

  const changeLanguage = event => {
    const language = event.target.value;
    i18next.changeLanguage(language);
  };

  return (
    <div>
      <select onChange={changeLanguage}>
        <option value="en">En</option>
        <option value="ua">Ua</option>
      </select>
    </div>
  );
};
