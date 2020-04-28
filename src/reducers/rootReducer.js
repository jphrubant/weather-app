const initState = {
  cities: [
    {id: 1, name: 'Paris'},
    {id: 2, name: 'Prague'},
    {id: 3, name: 'London'},
    {id: 4, name: 'Barcelona'}
  ]
}

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_CITY':
      let cities = [...state.cities, action.newCity]
      console.log(cities)
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