/**
 * require dependencies
 */
import express from 'express';
import bodyParser from 'body-parser';
import _ from 'lodash';
import gravatar from 'gravatar';
//import  ObjectID  from 'mongodb';
import colors from 'colors';
import bcrypt from 'bcryptjs';
import passport from 'passport';

import Subscribe from '../Models/Subscribe.js';
import SubscribeValidator from '../Validators/ComingSoon/SubscribeValidator.js';
import ContactValidator from '../Validators/ComingSoon/ContactValidator.js';
import Contact from '../Models/Contact.js';

const router = express.Router();
router.use(bodyParser.json());

/**
 @route   GET comingSoon/test
 @desc    test post route
 @access  Public
*/
router.get('/', async (req, res) => {
   const subscribes = await Subscribe.find({});
   res.json(subscribes);
});

/**
 @route   POST comingSoon/addSubscribe
 @desc    addSubscribe post route
 @access  Public
*/
router.post('/addSubscribe', async (req, res) => {
   // Create a subscribe
   const subscribe = new Subscribe({
      email: req.body.email,
   });

   // Check Validation
   const { errors, isValid } = SubscribeValidator(subscribe);
   if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
   }
   console.log(subscribe.email);
   //search the email tin the database
   Subscribe.find({ email: subscribe.email })
      .then(data => {
         if (data.length !== 0) {
            errors.email = 'You are already subscribed with this email';
            return res.status(400).json(errors);
         } else {
            // Save a subscribe in the database
            subscribe
               .save(subscribe)
               .then(data => {
                  res.send(data);
               })
               .catch(err => {
                  res.status(500).send({
                     message:
                        err.message ||
                        'Some error occurred while saving this email.',
                  });
               });
         }
      })
      .catch(err => {
         res.status(500).send({
            message:
               err.message ||
               'Some error occurred while searching email in database.',
         });
      });
});

/**
 @route   POST comingSoon/contact
 @desc    contact post route
 @access  Public
*/
router.post('/addContact', async (req, res) => {
   // Create a contact
   const contact = new Contact({
      name: req.body.contact.name,
      subject: req.body.contact.subject,
      message: req.body.contact.message,
      email: req.body.contact.email,
   });

   // Check Validation
   const { errors, isValid } = ContactValidator(contact);

   if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
   }

   // Save a contact in the database
   contact
      .save(contact)
      .then(data => {
         res.send(data);
      })
      .catch(err => {
         res.status(500).send(
            {
               errore:
                  err.message ||
                  'Some error occurred while adding the contact.',
            }.red
         );
      });
});

export default router;
