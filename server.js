/**
 * require dependencies
 */
const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');

const cors = require('cors');
//const authentificate = require("./authentificate");

/**
 * create port
 */
const port = 3001;
var app = express();

/**
 * use dependencies
 */
app.use(cors());
/**
 * Body parser middleware
 */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname));

/**
 * Passport middleware
 */

app.use(passport.initialize());

/**
 * Passport Config
 */
require('./passport')(passport);

/**
 * connect with front
 */
const corsOptions = {
  origin: 'http://localhost:3000',
};
app.use(cors(corsOptions));

/**
 * user controllers
 */
const user = require('./Controllers/UserControllers');
app.use('/user', user);

/**
 * server request
 */
app.get('/', (req, res) => {
  res.send('-- Hello from server -- ');
});

/**
 * listen port
 */
app.listen(port, () => {
  console.log(`-- Started on port ${port} --`);
});
