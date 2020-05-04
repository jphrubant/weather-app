export function getWeatherByName(cityName) {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3f4b891079045d352173506efa88c064`)
    .then(response => response.json())
    .catch(err => console.log(err, 'summat went wrong - name not found'));
  };

export function getWeatherByCoordinates(lat, lon) {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3f4b891079045d352173506efa88c064`)
    .then(response => response.json())
    .catch(err => console.log(err, 'summat went wrong - coordinates not found'))
};
