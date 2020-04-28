import React from 'react';
import { connect } from 'react-redux';

function OneCity(props) {
  return (
  <div>
   <h1>OneCity component</h1>
      {props.cities.map(oneCity => {
      return(
       <div key={oneCity.id}>City: {oneCity.name}</div>
      )
      })}  
    </div>
    )
}

const mapStateToProps = (state) => {
  return {
    cities: state.cities
  }
}

export default connect(mapStateToProps)(OneCity)
