import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCity } from './../actions/cityActions';
import { v4 as uuidv4 } from 'uuid';

class AddBar extends Component {
  state = {
    id: "",
    name: ""
  };

  // componentDidMount = () => {
  //   const storedCities = JSON.parse(localStorage.getItem('cities'));
  //   if(storedCities){
  //     storedCities.forEach(oneCity => {
  //     this.props.addCity(oneCity)
  //     });
  //   };
  // };

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
    addCity: (newCity) => { dispatch(addCity(newCity)) }
  };
};

export default connect(null, mapDispatchToProps)(AddBar);

