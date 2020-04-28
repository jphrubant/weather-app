const initState = {
  cities: []
}

const getWeather = cityArray => {
  cityArray.forEach(oneCity => {    
       console.log(oneCity.name)
  fetch(`api.openweathermap.org/data/2.5/weather?q=${oneCity.name}&appid=${process.env.API_KEY}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log('summat went wrond'))
  });
};

const setItemLocalStorage = (item) => {
  localStorage.setItem('cities', JSON.stringify(item)) 
}

const removeItemLocalStorage = (item) => {
    localStorage.removeItem(item) 
  }


const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_CITY':
      let cities = [...state.cities, action.newCity]
      getWeather(cities)
      setItemLocalStorage(cities)
      return{
        ...state, cities
      }

    case 'DELETE_CITY':
      let newCities = state.cities.filter(city => {
        return action.id !== city.id;
      });
      return{
        ...state, cities: newCities
      };

    default:  
      return state;
  }
}

export default rootReducer;