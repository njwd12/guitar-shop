// src/components/GuitarCard.jsx
import React from 'react';
import { useTranslation } from '../../utils/i18n';

import './GuitarCard.css';

const GuitarCard = ({ guitar, onClick }) => {
  const { t } = useTranslation();

  return (
    <div className="guitar-card" onClick={onClick}>
      <div className="guitar-image-container">
        <img src={guitar.image} alt={guitar.name} className="guitar-image" />
      </div>
      <div className="guitar-info">
        <h3 className="guitar-name">{guitar.name}</h3>
        <div className="guitar-details">
          <span className="guitar-price">${guitar.price.toLocaleString()}</span>
          <span className="guitar-type">{guitar.type}</span>
        </div>
      </div>
    </div>
  );
};

export default GuitarCard;