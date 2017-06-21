const Gym = require('../models/gym');

const gymsController = {};

gymsController.index = (req,res) => {
  Gym.findAll()
  .then(gyms =>{
    res.json({
      message:'ok',
      data: {gyms},
    });
  })
  .catch(err=>{
    console.log(err);
    res.status(400).json({ message: '400',err});
    });
};

gymsController.show = (req,res)=> {
  Gym.findById(req.params.id)
  .then(gym => {
    res.json({
      message: 'ok',
      data: {gym},
    });
  })
  .catch(err=>{
    res.status(400).json({message: '400', err});
  });
};

gymsController.create = (req, res) => {
  Gym.create({
    company_name: req.body.company_name,
    logo: req.body.logo,
    company_id: req.body.company_id,
    street_address: req.body.street_address,
    city: req.body.city,
    state: req.body.state,
    zip_code: req.body.zip_code,
    country: req.body.country,
  })
  .then(gym=>{
    res.json({message:'ok', data: { gym}});
  })
  .catch(err => {
    console.log(err);
    res.status(400).json({message: '400', err});
  });
};
 
gymsController.update = (req,res) => {
  Gym.update({
    company_name: req.body.company_name,
    logo: req.body.logo,
    company_id: req.body.company_id,
    street_address: req.body.street_address,
    city: req.body.city,
    state: req.body.state,
    zip_code: req.body.zip_code,
    country: req.body.country,
  }, req.params.id)
    .then(gym => {
      res.json({
        message: 'ok',
        data: { gym },
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
      });
  };

  gymsController.destroy = (req,res) => {
    Gym.destroy(req.params.id)
    .then(() => {
      res.redirect('/gyms');
    })
    .catch(err => {
      res.status(400).json(err);
    })
  }



module.exports = gymsController;





// fetch from DB
// .then(respnose) => {
//   return response.json()
// })
// .then(json => {
//   let address = json.street + ' ' + json.city + ' '+ etc....;
//   fetch(from www.google.api/${jsondata})
//   .then (response){
//     return response.json()
//   }
//   .then(json) => {
//     res.json({
//       message: oksy,
//       location: json
//     })
//   }
// })
//  fetchAllGym() {
//     fetch('https://calm-earth-66639.herokuapp.com/api/gyms')
//       .then((response) => {
//         return response.json()
//       })
//       .then((responseJson) => {
//         this.setState({
//           gyms: responseJson.data.gyms,
//         });
//         console.log('in fetchAllGyms function', responseJson)
//       }).catch((error) =>{
//         console.log('fetchGyms error', error)
//       })
//   }
