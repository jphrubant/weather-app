const initState = {
  cities: [],
  loadingCities: false
}

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_CITY':
     
      let cities = [...state.cities, action.newCity]
      localStorage.setItem('cities', JSON.stringify(cities)) 
      return{
        ...state, cities, loadingCities: false
      }

    case 'DELETE_CITY':
      let newCities = state.cities.filter(city => {
        return action.id !== city.id;
      });
      localStorage.setItem('cities', JSON.stringify(newCities)) 
      return{
        ...state, cities: newCities
      };

    // case 'LOADING_CITIES':
    //    console.log('initState', initState)
    //   return{
    //     ...state, loadingCities: true
    //   };
    

    default:  
      return state;
  };
};

export default rootReducer;