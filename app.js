/* requiring a bunch of stuff */

const bodyParser=require('body-parser');
const cors= require('cors');
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const logger = require('morgan');
const app = express();

/* setting port & listen */

const PORT = process.env.PORT || 3001;
app.listen(PORT, function(){
  console.log(`listening on port ${PORT}`);
});


/* setting static file */
app.use('/static', express.static(path.join(__dirname, 'public')));
/* setting up cors */
app.use(cors());
/* setting up logger */
app.use(logger('dev'));
/* setting up body parser */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/*setting up index routes*/

app.get('/', function(req,res){
  res.sendFile(__dirname + '/public/index.html');
});

/*gyms api route*/

const gymRoutes = require('./routes/gymRoutes');
app.use('/api/gyms',gymRoutes);


/*handling 404 errors*/

app.get('*', function(req,res){
  res.status(404).send({message:'this is not working'})
})