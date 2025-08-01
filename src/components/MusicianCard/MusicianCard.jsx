// src/components/MusicianCard.jsx
import React from 'react';
import { useTranslation } from '../../utils/i18n';

import './MusicianCard.css';

const MusicianCard = ({ musician }) => {
  const { t } = useTranslation();

  return (
    <div className="musician-card">
      <div className="musician-image-container">
        <img 
          src={musician.musicianImage} 
          alt={musician.name} 
          className="musician-image" 
        />
      </div>
      <div className="musician-info">
        <h4 className="musician-name">{musician.name}</h4>
        <p className="musician-bands">{musician.bands.join(', ')}</p>
      </div>
    </div>
  );
};

export default MusicianCard;