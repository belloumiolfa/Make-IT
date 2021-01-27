import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';

import Subscribe from './Models/Subscribe.js';
import Contact from './Models/Contact.js';
import connectDB from './config.js';

dotenv.config();
connectDB();
const emails = [
   {
      email: 'email31@gmail.com',
   },
   {
      email: 'dfhd@gmail.com',
   },
   {
      email: 'sdfhdr@gmail.com',
   },
   {
      email: 'gdrfd@gmail.com',
   },
];
const importData = async () => {
   try {
      await Subscribe.insertMany(emails);
   } catch (error) {
      console.error(`${error}`.red);
      process.exit();
   }
};
// run it on server
if (process.argv[2] === '-d') {
   importData();
}
