import Validator from 'validator';
import isEmpty from './is-empty.js';

function ContactValidator(data) {
   let errors = {};

   data.email = !isEmpty(data.email) ? data.email : '';
   data.name = !isEmpty(data.name) ? data.name : '';
   data.subject = !isEmpty(data.subject) ? data.subject : '';
   data.message = !isEmpty(data.message) ? data.message : '';

   if (!Validator.isEmail(data.email) || Validator.isEmpty(data.email)) {
      errors.email = 'Please enter a valid email';
   }

   if (
      Validator.isEmpty(data.name) ||
      !Validator.isLength(data.name, { min: 4, max: 20 })
   ) {
      errors.name = 'Please enter at least 4 chars';
   }

   if (
      Validator.isEmpty(data.subject) ||
      !Validator.isLength(data.subject, { min: 8, max: 30 })
   ) {
      errors.subject = 'Please enter at least 8 chars of subject';
   }

   if (Validator.isEmpty(data.message)) {
      errors.message = 'Please write something for us';
   }

   return {
      errors,
      isValid: isEmpty(errors),
   };
}
export default ContactValidator;
