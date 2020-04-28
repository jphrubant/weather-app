import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCity } from './../actions/cityActions';

class OneCity extends Component {
  handleDelete = (id) => {
    this.props.deleteCity(id)
  }

  render() {
    return(
      <div>
        {this.props.cities.length === 0 ? (
          <div>You have no saved cities.</div>
        ) : ( this.props.cities.map(oneCity => {
          let city = oneCity.name
          let cappedCity = city.charAt(0).toUpperCase() + city.slice(1)
         return(
            <div key={oneCity.id}>
              <div>City: {cappedCity}</div>
              <button onClick={() => {this.handleDelete(oneCity.id)}}>DELETE</button>
            </div>);
       })
      )}
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    cities: state.cities
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCity: (id) => { dispatch(deleteCity(id)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OneCity);

