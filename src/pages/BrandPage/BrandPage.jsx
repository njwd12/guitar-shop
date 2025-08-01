// src/pages/BrandPage.jsx
import React from 'react';
import { useQuery } from '@apollo/client';
// Ново:
import { useTranslation } from '../../utils/i18n';   // ← Точно!
import { FIND_ALL_BRANDS } from '../../constants';  // ← Точно!
import BrandCard from '../../components/BrandCard/BrandCard';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';
import './BrandPage.css';

const BrandPage = () => {
  const { t } = useTranslation();
  const { loading, error, data } = useQuery(FIND_ALL_BRANDS);

  if (loading) return <LoadingSpinner />;
  if (error) return <p className="error-message">{t('errorLoadingBrands')}</p>;

  return (
    <div className="brand-page">
      <header className="page-header">
        <h1>{t('guitarBrands')}</h1>
        <LanguageSwitcher />
      </header>
      
      <div className="brands-grid">
        {data.findAllBrands.map(brand => (
          <BrandCard key={brand.id} brand={brand} />
        ))}
      </div>
    </div>
  );
};

export default BrandPage;