export const addCity = (newCity) => {
  return {
   type: 'ADD_CITY', newCity
  };
};

export const deleteCity = (id) => {
  return {
   type: 'DELETE_CITY', id
  };
};

export const loadingCities = () => {
  return {
   type: 'LOADING_CITIES'
  };
};

export const inputError = () => {
  return {
   type: 'INPUT_ERROR'
  };
};