import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCity } from './../actions/cityActions';
import { v4 as uuidv4 } from 'uuid';

 class AddBar extends Component {
    state = {
      name: ""
    };

    handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value})
    };

    handleFormSubmit = (e) => {
      e.preventDefault();
      const newId = uuidv4();
      const newCity = {
        name: this.state.name,
        id: newId
      }
      this.props.addCity(newCity)
      this.setState({name: ""})
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
    addCity: (newCity) => { dispatch(addCity(newCity)) }
  }
}

export default connect(null, mapDispatchToProps)(AddBar)

