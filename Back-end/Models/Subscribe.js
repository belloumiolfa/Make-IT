/**
 * require dependencies
 */
import mongoose from 'mongoose';
import validator from 'validator';

const Schema = mongoose.Schema;

// Create Schema
const SubscribeSchema = new mongoose.Schema(
   {
      email: {
         type: String,
         validate: {
            validator: validator.isEmail,
         },
      },
   },
   {
      timestamps: true,
   }
);

var Subscribe = mongoose.model('Subscribe', SubscribeSchema);

export default Subscribe;
