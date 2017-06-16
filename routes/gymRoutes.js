const express = require('express');
const gymsController = require('../controller/gymsController');

const gymRoutes = express.Router();

gymRoutes.get('/', gymsController.index);
gymRoutes.get('/:id', gymsController.show);
gymRoutes.post('/', gymsController.create);
gymRoutes.put('/:id', gymsController.update);
gymRoutes.delete('/:id', gymsController.destroy);


module.exports = gymRoutes;



