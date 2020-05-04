import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCurrentCity, addCity, loadingCities } from './../actions/cityActions';
import { getWeatherByName, getWeatherByCoordinates} from './../apiService'

class AddBar extends Component {
  state = {
    name: ""
  };

  componentDidMount = () => {
    this.props.loadingCities()
    navigator.geolocation.getCurrentPosition(this.showLocation)
    const storedCities = JSON.parse(localStorage.getItem('cities'));
    if(storedCities){
      storedCities.forEach(oneCity => this.props.addCity(oneCity));
    }
  };

  showLocation = (position) => {
    this.props.addCurrentCity(position.coords.latitude, position.coords.longitude)
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.addCity({name: this.state.name})
    this.setState({name: ""});
  };

  render() {
    return (
      <div className="navbar">

          <div className="logo">
            <h1>Weather App</h1>
          </div>

          <div className="input-form">
            <form onSubmit={this.handleFormSubmit}>
              <input
                placeholder="Enter city name"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <button type="submit">Add</button>
            </form>
            
          </div>
      </div>
    );
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCity: async (city) => {
      let data = await getWeatherByName(city.name);
      if(data.cod === "404" || data.cod === "400" ){
        console.log("input error")
      } else {
        dispatch(addCity({
        id: data.sys.id,
        name: data.name,
        country: data.sys.country, 
        temp: data.main.temp,
        hum: data.main.humidity,
        press: data.main.pressure,
        feel: data.main.feels_like,
        iconId: parseInt(data.weather[0].icon)
        }));
      }
    },
    addCurrentCity: async (lat, lon) => { 
      let data = await getWeatherByCoordinates(lat, lon);
      dispatch(addCurrentCity({ 
        id: data.sys.id,
        name: data.name,
        country: data.sys.country, 
        temp: data.main.temp,
        hum: data.main.humidity,
        press: data.main.pressure,
        feel: data.main.feels_like,
        iconId: parseInt(data.weather[0].icon)
      }));
    },
    loadingCities: () => {dispatch(loadingCities())},
  };
};

export default connect(null, mapDispatchToProps)(AddBar);

