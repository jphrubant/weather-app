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
    if(storedCities) {
      storedCities.forEach(oneCity => {
      this.props.addCity(oneCity)
      });
    };
  };

  showLocation = (position) => {
    this.props.addCurrentCity(position.coords.latitude, position.coords.longitude)
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const newCity = {
      name: this.state.name
    };
    this.props.addCity(newCity)
    this.setState({name: ""});
  };

  render() {
    return (
      <div className="navbar">
          <div className="logo">
            <h1>Weather App</h1>
          </div>

          {this.props.cityShown && this.props.geolocalised === true ? (
              <div className="city-shown">
                City<br></br> already<br></br> displayed
              </div>
            ) : (null)}

          <div className="input-form">
            <form onSubmit={this.handleFormSubmit}>
              <input
                placeholder="Enter city name"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </form>
            <button type="submit">Add</button>

          </div>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    cityShown: state.cityShown,
    geolocalised: state.geolocalised
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
        country: data.sys.country, 
        temp: data.main.temp,
        hum: data.main.humidity,
        press: data.main.pressure,
        feel: data.main.feels_like,
        iconId: parseInt(data.weather[0].icon),
        ...city
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
        iconId: parseInt(data.weather[0].icon),
        ...data
      }));
    },
    loadingCities: () => {dispatch(loadingCities())},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBar);

