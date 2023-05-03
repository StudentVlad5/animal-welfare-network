import React from 'react';
import { useTranslation } from 'react-i18next';

export const Language = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    const language = event.target.value;
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <select onChange={changeLanguage}>
        <option value="en">English</option>
        <option value="ua">Українська</option>
      </select>
    </div>
  );
}

