const initState = {
  cities: [],
  loading: false,
  cityShown: false,
  geolocalised: true
}

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_CURRENT_CITY':
      if(state.cities.find(({id}) => id === action.newCity.id)){
        return {
          ...state, geolocalised: true
        }
      } else {
        let cities = [...state.cities, action.newCity]
        localStorage.setItem('cities', JSON.stringify(cities))
        return{
          ...state, cities, loading: false, cityShown: false
        }
      }

    case 'ADD_CITY':
      if(state.cities.find(({id}) => id === action.newCity.id)){
        return {
          ...state, cityShown: true
        }
      } else {
        let cities = [...state.cities, action.newCity]
        localStorage.setItem('cities', JSON.stringify(cities))
        return{
          ...state, cities, loading: false, cityShown: false
        }
      }
    
    case 'DELETE_CITY':
      let newCities = state.cities.filter(city => {
        return action.id !== city.id;
      });
      localStorage.setItem('cities', JSON.stringify(newCities)) 
      return{
        ...state, cities: newCities, cityShown: false
      };

    case 'LOADING_CITIES':
      return{
        ...state, loading: true
      };
  
    default:  
      return state;
  };
};

export default rootReducer;