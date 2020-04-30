import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCity, addCurrentCity } from './../actions/cityActions'; //, loadingCities
import { v4 as uuidv4 } from 'uuid';
import { getWeatherByName, getWeatherByCoordinates} from './../apiService'

class AddBar extends Component {
  state = {
    id: "",
    name: "",
  };

  componentDidMount = () => {
    this.getLocation()
    const storedCities = JSON.parse(localStorage.getItem('cities'));
    if(storedCities) {
      storedCities.forEach(oneCity => {
      addCity(oneCity) //this.props
      });
    };
  };

  getLocation = () => {
    navigator.geolocation.getCurrentPosition(showLocation)
    let currentCity;
    async function showLocation(position) {
      let data = await getWeatherByCoordinates(position.coords.latitude, position.coords.longitude)
      console.log('data', data)
      currentCity = {
        name: data.name,
        country: data.sys.country, 
        temp: data.main.temp,
        hum: data.main.hum,
        press: data.main.pressure,
        feel: data.main.feels_like,
      }
      console.log('currentCity', currentCity)
      addCurrentCity(currentCity)
    }
  
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const newId = uuidv4();
    const newCity = {
      id: newId,
      name: this.state.name.toLowerCase()
    };
    this.props.addCity(newCity);
    this.setState({id: "", name: ""});
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>City:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <button type="submit">Add City</button>
        </form>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    cities: state.cities,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCity: async (city) => {
      let weatherData = await getWeatherByName(city.name);
      dispatch(addCity({
      country: weatherData.sys.country, 
      temp: weatherData.main.temp,
      hum: weatherData.main.hum,
      press: weatherData.main.pressure,
      feel: weatherData.main.feels_like,
      ...city
      }))
    },
    addCurrentCity: (currentCity) => { dispatch({type: 'ADD_CURRENT_CITY', currentCity}) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBar);

