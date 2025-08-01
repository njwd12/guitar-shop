// src/components/BrandCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '../../utils/i18n';


import './BrandCard.css';

const BrandCard = ({ brand }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="brand-card" onClick={() => navigate(`/brand/${brand.id}`)}>
      <div className="brand-image-container">
        <img src={brand.image} alt={brand.name} className="brand-image" />
      </div>
      <div className="brand-info">
        <h3 className="brand-name">{brand.name}</h3>
        <p className="brand-origin">{brand.origin}</p>
      </div>
    </div>
  );
};

export default BrandCard;