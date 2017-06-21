import React, { Component } from 'react';

class AddGymForm extends Component {
  render() {
    return (
    <form 
     className = 'addForm'
     onSubmit = {this.props.handleGymSubmit} >
     <input 
     type = 'text'
     value = {this.props.inputCompanyChange} 
     name = 'Company'
     placeholder = 'Company Name'
     onChange = {this.props.handleInputCompanyChange}
     />
     <br/>

    <input 
     type = 'text'
     value = {this.props.inputLogoChange} 
     name = 'Company'
     placeholder = 'Company Name'
     onChange = {this.props.handleInputLogoChange}
     />
     <br/>


       <input 
     type = 'text'
     value = {this.props.inputStreetChange} 
     name = 'Company'
     placeholder = 'Company Name'
     onChange = {this.props.handleInputStreetChange}
     />
     <br/>

       <input 
     type = 'text'
     value = {this.props.inputCityChange} 
     name = 'Company'
     placeholder = 'Company Name'
     onChange = {this.props.handleInputCityChange}
     />
     <br/>

       <input 
     type = 'text'
     value = {this.props.inputStateChange} 
     name = 'Company'
     placeholder = 'Company Name'
     onChange = {this.props.handleInputStateChange}
     />
     <br/>

       <input 
     type = 'text'
     value = {this.props.inputZipChange} 
     name = 'Company'
     placeholder = 'Company Name'
     onChange = {this.props.handleInputZipChange}
     />
     <br/>
  
   <input 
     type = 'text'
     value = {this.props.inputCountryChange} 
     name = 'Company'
     placeholder = 'Company Name'
     onChange = {this.props.handleInputCountryChange}
     />
     <br/>


  <button>Add A Gym!</button>



     </form>
     );
  }
}
 

export default AddGymForm;


