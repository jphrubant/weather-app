export const addCurrentCity = (newCity) => {
  return {
   type: 'ADD_CURRENT_CITY', newCity
  };
};

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
