// src/components/LanguageSwitcher.jsx
import React from 'react';
import { useTranslation } from '../../utils/i18n';

import './Languageswitcher.css';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useTranslation();
  
  return (
    <div className="language-switcher">
      <button 
        onClick={() => setLanguage('en')} 
        className={language === 'en' ? 'active' : ''}
        aria-label="English"
      >
        EN
      </button>
      <button 
        onClick={() => setLanguage('mk')} 
        className={language === 'mk' ? 'active' : ''}
        aria-label="Macedonian"
      >
        MK
      </button>
      <button 
        onClick={() => setLanguage('al')} 
        className={language === 'al' ? 'active' : ''}
        aria-label="Albanian"
      >
        AL
      </button>
    </div>
  );
};

export default LanguageSwitcher;