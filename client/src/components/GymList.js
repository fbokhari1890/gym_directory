import React, { Component } from 'react';
import Gym from './Gym';

class GymList extends Component {
   constructor (props){
     super(props);
     this.state = ({
       gyms: [],
     })
     this.handleGymDelete.bind(this);
     this.handleGymEdit.bind(this);

   }

   
  componentDidMount(){
    this.fetchAllGyms()
  }

fetchAllGyms() {
    fetch('https://gymlistings.herokuapp.com/api/gyms')
      .then((response) => {
        return response.json()
      })
      .then((responseJson) => {
        this.setState({
          gyms: responseJson.data.gyms,
        })
      })
      .catch((error) =>{
        console.log('fetchGyms error', error)
      })
    
  }


handleGymEdit(event){
  event.preventDefault();
  fetch(`https://gymlistings.herokuapp.com/api/gyms/${event.target.id.value}`,{
  method: 'PUT',
  header: {'Content-type': 'application/json'},
  body: JSON.stringify({
    company_name: event.target.company_name.value,
    logo: event.target.logo.value,
    street_address: event.target.street_address.value,
    city: event.target.city.value,
    state: event.target.state.value,
    zip_code: event.target.zip_code.value,
    country: event.target.country.value,
}),  
})
 .then((response)=>{
   this.fetchAllGyms();
  })
}
}

handleGymDelete = (id) =>{
  fetch(`https://gymlistings.herokuapp.com/api/gyms/${id}`, {
    method: 'DELETE',
})
  .then((response)=>{
    if(response.status === 200){
      this.fetchAllGyms();
    }
  })
}

render = () => {
return(
  <ul className = 'gym-list'>
    return(
      {this.props.gym.map((gym)=> {
        return (
        <Gym
          key = {gym.id}
          gym = {gym}
          handleGymDelete={this.props.handleGymDelete}
          handleGymEdit={this.props.handleGymEdit} />
      )
    })}
    </ul>
    );
}

export default GymList;

