// src/components/FilterBar.jsx
import React from 'react';
import { useTranslation } from '../../utils/i18n';

import './FilterBar.css';

const FilterBar = ({ value, onChange }) => {
  const { t } = useTranslation();
  const types = ['all', 'electric', 'acoustic', 'bass'];

  return (
    <div className="filter-bar">
      {types.map(type => (
        <button
          key={type}
          className={`filter-chip ${value === type ? 'active' : ''}`}
          onClick={() => onChange(type)}
        >
          {t(type)}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;