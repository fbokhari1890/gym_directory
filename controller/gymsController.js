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
