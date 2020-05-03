export function getWeatherByName(cityName) {
  return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3f4b891079045d352173506efa88c064`)
    .then(response => response.json())
    .catch(err => {
      console.log(err, 'summat went wrong - name not found')
    })
  };

export function getWeatherByCoordinates(lat, long) {
  return fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=3f4b891079045d352173506efa88c064`)
    .then(response => response.json())
    .catch(err => console.log(err, 'summat went wrong - coordinates not found'))
};
