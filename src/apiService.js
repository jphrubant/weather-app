export function getWeather(cityName) {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=386f48e9b4f556fe6dbba90687169881`)
      .then(response => response.json())
      .catch(err => console.log('summat went wrong'))
  };