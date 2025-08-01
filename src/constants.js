// src/constants.js
import { gql } from '@apollo/client';

export const FIND_ALL_BRANDS = gql`
  query findAllBrands {
    findAllBrands {
      id
      name
      origin
      image
    }
  }
`;

export const FIND_UNIQUE_BRAND = gql`
  query findUniqueBrand($id: ID!) {
    findUniqueBrand(id: $id) {
      name
    }
  }
`;

export const FIND_BRAND_MODELS = gql`
  query findBrandModels($id: ID!, $sortBy: sortBy!) {
    findBrandModels(id: $id, sortBy: $sortBy) {
      id
      name
      type
      image
      price
    }
  }
`;

export const FIND_UNIQUE_MODEL = gql`
  query findUniqueModel($brandId: ID!, $modelId: ID!) {
    findUniqueModel(brandId: $brandId, modelId: $modelId) {
      id
      name
      type
      image
      description
      price
      specs {
        bodyWood
        neckWood
        fingerboardWood
        pickups
        tuners
        scaleLength
        bridge
      }
      musicians {
        name
        musicianImage
        bands
      }
    }
  }
`;