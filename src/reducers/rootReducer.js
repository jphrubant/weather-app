const initState = {
  cities: [],
  loading: false
}

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_CITY':
      let cities = [...state.cities, action.newCity]
      localStorage.setItem('cities', JSON.stringify(cities)) 
      return{
        ...state, cities, loading: false
      }

    case 'ADD_CURRENT_CITY':
      let allCities = [...state.cities, action.currentCity]
      console.log('ALLCITIES', allCities)
      localStorage.setItem('cities', JSON.stringify(allCities)) 
      return{
        ...state, cities: allCities, loading: false
      }

    case 'DELETE_CITY':
      let newCities = state.cities.filter(city => {
        return action.id !== city.id;
      });
      localStorage.setItem('cities', JSON.stringify(newCities)) 
      return{
        ...state, cities: newCities
      };

    case 'LOADING_CITIES':
       console.log('initState', initState)
      return{
        ...state, loading: true
      };
  
    default:  
      return state;
  };
};

export default rootReducer;