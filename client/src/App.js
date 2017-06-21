import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import AddGymForm from './components/AddGymForm';
import GymList from './components/GymList';
 
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      gyms: [],
      inputCompanyValue: '',
      inputLogoValue:'',
      inputStreetValue:'',
      inputCityValue:'',
      inputStateValue:'',
      inputZipValue:'',
      inputCountryValue:'',
    }
    this.handleInputCompanyChange = this.handleInputCompanyChange.bind(this);
    this.handleInputLogoChange = this.handleInputLogoChange.bind(this);
    this.handleInputStreetChange = this.handleInputStreetChange.bind(this);
    this.handleInputCityChange = this.handleInputCityChange.bind(this);
    this.handleInputStateChange = this.handleInputStateChange.bind(this);
    this.handleInputZipChange = this.handleInputZipChange.bind(this);
    this.handleInputCountryChange = this.handleInputCountryChange.bind(this);
    this.handleGymSubmit = this.handleGymSubmit.bind(this);
  }


componentDidMount() 
{
  fetch('https://gymlistings.herokuapp.com/api/gyms')
  .then((response)=> {
    console.log(response);
    return response.json()
  })
  .then((responseJson)=>{
    this.setState((prevState)=> {
      return {
        gyms: responseJson.data.gyms,
      }
    });
  });
}

handleInputCompanyChange(event)
{
  this.setState({inputCompanyValue: event.target.value});
}

handleInputLogoChange(event)
{
  this.setState({inputLogoValue: event.target.value});
}

handleInputStreetChange(event)
{
  this.setState({inputStreetValue: event.target.value});
}

handleInputCityChange(event)
{
  this.setState({inputCityValue: event.target.value});
}

handleInputStateChange(event)
{
  this.setState({inputStateValue: event.target.value});
}

handleInputZipChange(event)
{
  this.setState({inputZipValue: event.target.value});
}
handleInputCountryChange(event)
{
  this.setState({inputCountryValue: event.target.value});
}
 
handleGymSubmit(event)
{
  event.preventDefault();


  fetch('https://gymlistings.herokuapp.com/api/gyms', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      company: event.target.company_name.value,
      logo: event.target.logo.value,
      street_address: event.target.street_address.value,
      city: event.target.city.value,
      state: event.target.state.value,
      zip:  event.target.zip_code.value,
      country: event.target.country.value
    }),
  })
  .then((response)=>{
    return response.json()
  })
  .then((responseJson)=>{
    if (responseJson.gyms.id != undefined){
    const newGym = {
      company: responseJson.data.gyms.company_name,
      logo: responseJson.data.gyms.logo,
      street_address: responseJson.data.gyms.street_address,
      city: responseJson.data.gyms.city,
      state: responseJson.data.gyms.state,
      zip:  responseJson.data.gyms.zip_code,
      country: responseJson.data.gyms.country,
    }
  this.setState((prevState)=>{
    return {
    gyms: prevState.gyms.concat(newGym),
    }
  })
    } else {
      console.log('error');
    }
  })
}
      
render() 
{
return(
   <Router>
      <div className="App">
        <Header />
        <AddGymForm 
        handleInputCompanyChange={this.handleInputCompanyChange}
        handleInputLogoChange={this.handleInputLogoChange}
        handleInputStreetChange={this.handleInputStreetChange}
        handleInputCityChange={this.handleInputCityChange}
        handleInputStateChange={this.handleInputStateChange}
        handleInputZipChange={this.handleInputZipChange}
        handleInputCountryChange={this.handleInputCountryChange}
        />
        <GymList gyms = {this.state.gyms} />
        <Footer />
        </div>
         </Router>
)
}     
} 


export default App;






