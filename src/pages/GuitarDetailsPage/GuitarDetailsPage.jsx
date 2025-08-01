// src/pages/GuitarDetailsPage.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useTranslation } from '../../utils/i18n';
import { FIND_UNIQUE_MODEL } from '../../constants';
import Tabs from '../../components/Tabs/Tabs';
import MusicianCard from '../../components/MusicianCard/MusicianCard';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import BackButton from '../../components/BackButton/BackButton';
import './GuitarDetailsPage.css';

const GuitarDetailsPage = () => {
  const { t } = useTranslation();
  const { brandId, modelId } = useParams();
  const navigate = useNavigate();
  const [visibleMusicians, setVisibleMusicians] = useState(2);
  
  const { loading, error, data } = useQuery(FIND_UNIQUE_MODEL, {
    variables: { brandId, modelId }
  });
  
  const showMoreMusicians = () => {
    setVisibleMusicians(prev => prev + 2);
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <p className="error-message">{t('errorLoadingGuitar')}</p>;

  const guitar = data?.findUniqueModel;
  
  const tabs = [
    {
      label: t('specs'),
      content: (
        <div className="specs-content">
          <div className="specs-grid">
            <div className="spec-item">
              <span className="spec-label">{t('bodyWood')}</span>
              <span className="spec-value">{guitar.specs.bodyWood || '-'}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">{t('neckWood')}</span>
              <span className="spec-value">{guitar.specs.neckWood || '-'}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">{t('fingerboardWood')}</span>
              <span className="spec-value">{guitar.specs.fingerboardWood || '-'}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">{t('pickups')}</span>
              <span className="spec-value">{guitar.specs.pickups || '-'}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">{t('tuners')}</span>
              <span className="spec-value">{guitar.specs.tuners || '-'}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">{t('scaleLength')}</span>
              <span className="spec-value">{guitar.specs.scaleLength || '-'}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">{t('bridge')}</span>
              <span className="spec-value">{guitar.specs.bridge || '-'}</span>
            </div>
          </div>
        </div>
      )
    },
    {
      label: t('musicians'),
      content: (
        <div className="musicians-content">
          <div className="musicians-list">
            {guitar.musicians.slice(0, visibleMusicians).map((musician, index) => (
              <MusicianCard key={index} musician={musician} />
            ))}
          </div>
          {visibleMusicians < guitar.musicians.length && (
            <button onClick={showMoreMusicians} className="show-more-button">
              {t('showMore')}
            </button>
          )}
        </div>
      )
    }
  ];

  return (
    <div className="guitar-details-page">
      <BackButton />
      
      <div className="guitar-header">
        <div className="guitar-image-container">
          <img src={guitar.image} alt={guitar.name} className="guitar-image" />
        </div>
        
        <div className="guitar-info">
          <h1>{guitar.name}</h1>
          <div className="price-type">
            <span className="price">${guitar.price.toLocaleString()}</span>
            <span className="type-badge">{guitar.type}</span>
          </div>
          <p className="description">{guitar.description}</p>
        </div>
      </div>
      
      <Tabs tabs={tabs} />
    </div>
  );
};

export default GuitarDetailsPage;