export const addCity = (newCity) => {
  return {
   type: 'ADD_CITY', newCity
  };
};

export const addCurrentCity = (currentCity) => {
  console.log('currentCity from action center', currentCity)
  return {
   type: 'ADD_CURRENT_CITY', currentCity
  };
};

export const deleteCity = (id) => {
  return {
   type: 'DELETE_CITY', id
  };
};

// export const loadingCities = () => {
//   return {
//    type: 'LOADING_CITIES'
//   };
// };

