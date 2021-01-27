import Validator from 'validator';
import isEmpty from './is-empty.js';

function SubscribeValidator(data) {
   let errors = {};

   data.email = !isEmpty(data.email) ? data.email : '';

   if (!Validator.isEmail(data.email)) {
      errors.email = 'Please enter a valid email';
   }
   if (Validator.isEmpty(data.email)) {
      errors.email = 'Email can not be empty ';
   }
   return {
      errors,
      isValid: isEmpty(errors),
   };
}
export default SubscribeValidator;
