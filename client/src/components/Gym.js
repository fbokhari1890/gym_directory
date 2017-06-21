import React, { Component } from 'react';

class Gym extends Component {
  
  render () {
    return (
      <li className = 'gym'>
      <h1> {this.props.gym.company_name} </h1>
      <img src = {this.props.gym.logo} alt = 'company logo' />
      <p> {this.props.gym.street_address} </p>
      <p> {this.props.gym.city} </p>
      <p> {this.props.gym.state}</p>
      <p> {this.props.gym.zip_code}</p>
      <p> {this.props.gym.country}</p>
      </li>

    ); 
  }
}

export default Gym;

