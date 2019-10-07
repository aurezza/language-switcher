import React, { useState, useEffect } from 'react';
import i18n from '../i18n';
import Locales from '../constants/Locale';

const LanguageSwitch = () => {
  const [language, setLanguage] = useState(Locales[0].value);

  useEffect(() => {
    const currentLang = Locales.find(({ value }) => i18n.language === value);
    const languageDefault = currentLang ? currentLang.label : language;
    setLanguage(languageDefault);
  }, [language]);

  const changeLanguage = (lngValue) => {
    const lng = Locales.find(({ value }) => value === lngValue);
    setLanguage(lng.label);
    i18n.changeLanguage(lngValue, (err) => {
      if (err) return console.log('error changing lang');
      console.log('lng value', lngValue);
    });
  };

  return (
    <select id="lang" onChange={(e) => changeLanguage(e.target.value)} value={language}>
      {
        Locales.map(({ value, label }) => {
          return <option value={value}>{label}</option>
        })
      }
    </select>
  );
};

export default LanguageSwitch;
