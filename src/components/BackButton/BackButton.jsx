// src/components/BackButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '../../utils/i18n';

import './BackButton.css';

const BackButton = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <button className="back-button" onClick={() => navigate(-1)}>
      ← {t('back')}
    </button>
  );
};

export default BackButton;