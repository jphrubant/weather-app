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
        <h1>OneCity component</h1>
        {this.props.cities.map(oneCity => {
          return(
          <div key={oneCity.id}>
            <div>City: {oneCity.name}</div>
            <button onClick={() => {this.handleDelete(oneCity.id)}}>DELETE</button>
          </div>
          )
        })}  
      </div>
    )
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
