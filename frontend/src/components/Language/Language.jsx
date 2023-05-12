import i18next from 'i18next';
import React, { useEffect, useState } from 'react';
import { SelectContainerLanguage, SelectLanguage } from './language.styled';

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  useEffect(() => {
    const saveLanguage = localStorage.getItem('chosenLanguage');
    if (saveLanguage) {
      i18next.changeLanguage(saveLanguage);
      setSelectedLanguage(saveLanguage);
    }
  }, []);

  const changeLanguage = event => {
    const language = event.target.value;
    i18next.changeLanguage(language);
    localStorage.setItem('chosenLanguage', language);
    setSelectedLanguage(language);
  };

  return (
    <SelectContainerLanguage>
      <SelectLanguage onChange={changeLanguage} value={selectedLanguage}>
        <option value="en">En</option>
        <option value="ua">Ua</option>
      </SelectLanguage>
    </SelectContainerLanguage>
  );
};

export default Language;
