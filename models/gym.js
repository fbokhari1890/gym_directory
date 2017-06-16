const db = require('../db/config.js');

const Gym = {};


Gym.findAll = () => {
  return db.query(
  
    `SELECT * FROM gyms`
  );
};

  Gym.findById = (id) => {
    return db.oneOrNone(
      `
      SELECT * FROM gyms
      WHERE id = 1`,
      [id]

    );
  };

Gym.create = (gym) => {
    return db.one(
      `
      INSERT INTO gyms (company_name, logo, street_address, city, state, zip_code, country)
      VALUES ($1, $2, $3, $4, $5, $6, $7)

      RETURNING *`,
      [gym.company_name, gym.logo, gym.street_address, gym.city, gym.state, gym.zip_code, gym.country]
    );
  };

  Gym.update = (gym, id) => {
    return db.one(
      `
      UPDATE gyms SET
      company_name = $1
      logo = $2
      street_address = $3
      city = $4
      state = $5
      zip_code = $6
      country = $7
    `,
  [gym.company_name, gym.logo, gym.street_address, gym.city, gym.state, gym.zip_code, gym.country]

    );
  };

  Gym.destroy = id => {
    return db.none(
      `
      DELETE FROM gyms
      WHERE id = $1
      `, [id]
    );
  };

module.exports= Gym;



