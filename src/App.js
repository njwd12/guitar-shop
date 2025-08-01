// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { I18nProvider } from './utils/i18n';
import client from './apolloClient';
import BrandPage from './pages/BrandPage/BrandPage';
import ModelsPage from './pages/ModelsPage/ModelsPage';
import GuitarDetailsPage from './pages/GuitarDetailsPage/GuitarDetailsPage';
import './styles/App.css';


function App() {
  return (
    <ApolloProvider client={client}>
      <I18nProvider>
        <Router>
          <div className="app">
            <Routes>
              <Route path="/" element={<BrandPage />} />
              <Route path="/brand/:brandId" element={<ModelsPage />} />
              <Route path="/guitar/:brandId/:modelId" element={<GuitarDetailsPage />} />
            </Routes>
          </div>
        </Router>
      </I18nProvider>
    </ApolloProvider>
  );
}

export default App;