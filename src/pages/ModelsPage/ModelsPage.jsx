// src/pages/ModelsPage.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useTranslation } from '../../utils/i18n';   // ← Точно!
import { FIND_BRAND_MODELS, FIND_UNIQUE_BRAND } from '../../constants';
import GuitarCard from '../../components/GuitarCard/GuitarCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import FilterBar from '../../components/FilterBar/FilterBar';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import BackButton from '../../components/BackButton/BackButton';
import './ModelsPage.css';

const ModelsPage = () => {
  const { t } = useTranslation();
  const { brandId } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  
  const { data: brandData } = useQuery(FIND_UNIQUE_BRAND, {
    variables: { id: brandId }
  });
  
  const { loading, error, data } = useQuery(FIND_BRAND_MODELS, {
    variables: { 
      id: brandId,
      sortBy: { field: 'name', order: 'ASC' }
    }
  });

  const filteredModels = data?.findBrandModels.filter(model => {
    const matchesSearch = model.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'all' || model.type === typeFilter;
    return matchesSearch && matchesType;
  });

  if (loading) return <LoadingSpinner />;
  if (error) return <p className="error-message">{t('errorLoadingModels')}</p>;

  return (
    <div className="models-page">
      <header className="page-header">
        <BackButton />
        <h1>{brandData?.findUniqueBrand.name} {t('models')}</h1>
      </header>
      
      <div className="controls">
        <SearchBar 
          value={searchTerm} 
          onChange={setSearchTerm} 
          placeholder={t('searchModels')} 
        />
        <FilterBar value={typeFilter} onChange={setTypeFilter} />
      </div>
      
      <div className="models-grid">
        {filteredModels?.map(model => (
          <GuitarCard 
            key={model.id} 
            guitar={model}
            onClick={() => navigate(`/guitar/${brandId}/${model.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default ModelsPage;