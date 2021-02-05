/**
 * require dependencies
 */
import _ from 'lodash';
import express from 'express';
import bodyParser from 'body-parser';
import colors from 'colors';

//import  passport from 'passport';

import connectDB from './config.js';

import cors from 'cors';
//import  authentificate from"./authentificate";
import dotenv from 'dotenv';
import router from './Controllers/CSoonControllers.js';

dotenv.config();
connectDB();
const port = process.env.PORT;
var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(express.static(__dirname));
/**
 * Passport middleware
app.use(passport.initialize());*/
/**
 * Passport Config
require('./passport')(passport);*/

/**
 * connect with front
 */
const corsOptions = {
   origin: 'http://localhost:3000',
};
app.use(cors(corsOptions));

app.use('/comingSoon', router);

app.get('/', (req, res) => {
   res.send('-- Hello from server -- ');
});
app.listen(port, () => {
   console.log(
      `-- Started in ${process.env.NODE_ENV} mode on port ${port} --`.yellow
         .bold
   );
});
