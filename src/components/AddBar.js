import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCity, addCurrentCity } from './../actions/cityActions';
import { v4 as uuidv4 } from 'uuid';
import { getWeatherByName, getWeatherByCoordinates} from './../apiService'

class AddBar extends Component {
  state = {
    id: "",
    name: ""
  };

  componentDidMount = () => {
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

const mapDispatchToProps = (dispatch) => {
  return {
    addCity: async (city) => {
      let data = await getWeatherByName(city.name);
      console.log(data)
      dispatch(addCity({
      country: data.sys.country, 
      temp: data.main.temp,
      hum: data.main.humidity,
      press: data.main.pressure,
      feel: data.main.feels_like,
      ...city
      }));
    },
    addCurrentCity: async (lat, lon) => { 
      let data = await getWeatherByCoordinates(lat, lon);
      dispatch(addCurrentCity({ 
        name: data.name,
        country: data.sys.country, 
        temp: data.main.temp,
        hum: data.main.humidity,
        press: data.main.pressure,
        feel: data.main.feels_like,
      }));
    }
  };
};

export default connect(null, mapDispatchToProps)(AddBar);


// const mapStateToProps = (state) => {
//   return {
//     cities: state.cities,
//   };
// };

