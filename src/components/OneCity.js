import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCity, loadingCities } from './../actions/cityActions';

class OneCity extends Component {
  handleDelete = (id) => {
    this.props.deleteCity(id)
  }

  render() {
    return(
      <div className="one-city-div">
        {this.props.loading ? (<div className="message"><h1>LOADING...</h1></div>) : (null)}
        {this.props.cities.length === 0 ? (
        <div className="message">You have no saved cities</div>
        ) : ( this.props.cities.map(oneCity => {
          let city = oneCity.name
          let cappedCity = city.charAt(0).toUpperCase() + city.slice(1)
         return(
            <div className="city-card" key={oneCity.id}>
              <button className="remove-button" onClick={() => {this.handleDelete(oneCity.id)}}>X</button>
              <p className="city-name">{cappedCity}, {oneCity.country}</p>
              <p>Temperature: {Math.floor(oneCity.temp - 273.15)}°C</p>
              <p>Humidity: {oneCity.hum}%</p>
              <p>Pressure: {oneCity.press} hpa</p>
              <p>Feels like: {Math.floor(oneCity.feel - 273.15)}°C</p>
  
            </div>);
        })
      )}
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    cities: state.cities,
    loading: state.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCity: (id) => { dispatch(deleteCity(id)) },
    loadingCities: () => {dispatch(loadingCities())}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OneCity);

