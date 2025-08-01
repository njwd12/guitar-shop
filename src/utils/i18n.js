// src/utils/i18n.js
import React, { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    guitarBrands: 'Guitar Brands',
    models: 'Models',
    searchModels: 'Search models...',
    all: 'All',
    electric: 'Electric',
    acoustic: 'Acoustic',
    bass: 'Bass',
    specs: 'Specifications',
    musicians: 'Musicians',
    bodyWood: 'Body Wood',
    neckWood: 'Neck Wood',
    fingerboardWood: 'Fingerboard Wood',
    pickups: 'Pickups',
    tuners: 'Tuners',
    scaleLength: 'Scale Length',
    bridge: 'Bridge',
    showMore: 'Show More',
    back: 'Back',
    errorLoadingBrands: 'Error loading brands',
    errorLoadingModels: 'Error loading models',
    errorLoadingGuitar: 'Error loading guitar details'
  },
  mk: {
    guitarBrands: 'Гитарски Брендови',
    models: 'Модели',
    searchModels: 'Пребарај модели...',
    all: 'Сите',
    electric: 'Електрична',
    acoustic: 'Акустична',
    bass: 'Бас',
    specs: 'Спецификации',
    musicians: 'Музичари',
    bodyWood: 'Материјал на телото',
    neckWood: 'Материјал на вратот',
    fingerboardWood: 'Материјал на грифа',
    pickups: 'Пикови',
    tuners: 'Механизми',
    scaleLength: 'Должина на скала',
    bridge: 'Мост',
    showMore: 'Прикажи повеќе',
    back: 'Назад',
    errorLoadingBrands: 'Грешка при вчитување на брендови',
    errorLoadingModels: 'Грешка при вчитување на модели',
    errorLoadingGuitar: 'Грешка при вчитување на детали за гитара'
  },
  al: {
    guitarBrands: 'Brendet e Kitarave',
    models: 'Modelet',
    searchModels: 'Kërko modele...',
    all: 'Të gjitha',
    electric: 'Elektrike',
    acoustic: 'Akustike',
    bass: 'Bas',
    specs: 'Specifikimet',
    musicians: 'Muzikantët',
    bodyWood: 'Druri i trupit',
    neckWood: 'Druri i qafës',
    fingerboardWood: 'Druri i tastierës',
    pickups: 'Pickups',
    tuners: 'Akorduesit',
    scaleLength: 'Gjatësia e shkallës',
    bridge: 'Ura',
    showMore: 'Shfaq më shumë',
    back: 'Kthehu',
    errorLoadingBrands: 'Gabim gjatë ngarkimit të brendeve',
    errorLoadingModels: 'Gabim gjatë ngarkimit të modeleve',
    errorLoadingGuitar: 'Gabim gjatë ngarkimit të detajeve të kitarës'
  }
};

const I18nContext = createContext();

export function I18nProvider({ children }) {
  const [language, setLanguage] = useState('en');
  
  const t = (key) => translations[language][key] || key;
  
  return (
    <I18nContext.Provider value={{ t, language, setLanguage }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useTranslation must be used within an I18nProvider');
  }
  return context;
}