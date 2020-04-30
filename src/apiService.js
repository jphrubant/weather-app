export function getWeatherByName(cityName) {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=386f48e9b4f556fe6dbba90687169881`)
      .then(response => response.json())
      .catch(err => console.log(err, 'summat went wrong - name not found'))
  };

export function getWeatherByCoordinates(lat, long) {
  return fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=386f48e9b4f556fe6dbba90687169881`)
    .then(response => response.json())
    .catch(err => console.log(err, 'summat went wrong - coordinates not found'))
};
