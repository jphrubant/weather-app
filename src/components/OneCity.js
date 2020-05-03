import React, { Component } from 'react';
import WeatherIcon from './WeatherIcon.js';
import { connect } from 'react-redux';
import { deleteCity } from './../actions/cityActions';

class OneCity extends Component {
  render() {
    return(
      <div className="one-city-div">

        {this.props.cityShown && this.props.geolocalised === true ? (
              <div className="city-shown">
                City already displayed
              </div>
            ) : (null)}

        {this.props.loading ? (
          <div className="message"><h1>LOADING...</h1></div>
          ) : (null)}

        {this.props.cities.length === 0 ? (
        <div className="message">You have no saved cities</div>
        ) : ( this.props.cities.map(oneCity => {
          let cappedCity = oneCity.name.charAt(0).toUpperCase() + oneCity.name.slice(1)
          return(
            <div className="city-card" key={oneCity.id}>

              <button className="remove-button" onClick={() => {this.props.deleteCity(oneCity.id)}}>X</button>
             
              <div>
                <p className="city-name">{cappedCity}, {oneCity.country}</p>
                <p>Temperature: {Math.floor(oneCity.temp - 273.15)}°C</p>
                <p>Humidity: {oneCity.hum}%</p>
                <p>Pressure: {oneCity.press} hpa</p>
                <p>Feels like: {Math.ceil(oneCity.feel - 273.15)}°C</p>
              </div>
              
              <div>
                <WeatherIcon iconId={oneCity.iconId} />
              </div>

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
    loading: state.loading,
    cityShown : state.cityShown,
    geolocalised: state.geolocalised
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCity: (id) => {dispatch(deleteCity(id))},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OneCity);

