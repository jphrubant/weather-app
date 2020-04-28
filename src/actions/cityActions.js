export const deleteCity = (id) => {
  return {
   type: 'DELETE_CITY', id
  };
};

export const addCity = (newCity) => {
  return {
   type: 'ADD_CITY', newCity
  };
};