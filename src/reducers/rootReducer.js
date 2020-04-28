const initState = {
  cities: []
}

const setLocalStorage = (item) => {
    localStorage.setItem('cities', JSON.stringify(item))
}

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_CITY':
      let cities = [...state.cities, action.newCity]
      setLocalStorage(cities)
        return{
        ...state, cities
        }  

    case 'DELETE_CITY':
      let newCities = state.cities.filter(city => {
        return action.id !== city.id
        });
        return{
        ...state, cities: newCities
        }

    default:  
      return state;
  }
}

export default rootReducer;