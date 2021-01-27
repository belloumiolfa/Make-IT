/**
 * require dependencies
 */
import mongoose from 'mongoose';
import validator from 'validator';
const Schema = mongoose.Schema;

// Create Schema
const ContactSchema = new mongoose.Schema({
   name: { type: String, required: true },
   subject: { type: String, required: true },
   message: { type: String, required: true },
   email: {
      type: String,
      required: true,
      validate: {
         validator: validator.isEmail,
         message: 'Is not a valid email',
      },
   },
});

var Contact = mongoose.model('Contact', ContactSchema);

export default Contact;
