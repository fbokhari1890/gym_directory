import React, { Component } from 'react';
import Gym from './Gym.js';

class GymList extends Component {
  render() {
    return (
      <ul classID = "gym-list">
      {this.props.gyms.map((gym)=>{
        return (
          <Gym key = {gym.id} gym = {gym} />
        )
      })}
      </ul>
    );
  }
}

export default GymList

