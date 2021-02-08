import React, { useState } from 'react';
import { useInput } from '../../../Utils/FakeData/Hooks/useInput';
import { reduxForm, Field } from 'redux-form';
import CominSoonServices from '../../../Services/ComingSoonServices';

function ContactForm() {
   const [errors, setErrors] = useState({});
   const [loading, setLoading] = useState(false);
   const [sentMessage, setSentMessage] = useState();
   const { value: valueName, bind: bindName, reset: resetName } = useInput('');
   const { value: valueEmail, bind: bindEmail, reset: resetEmail } = useInput(
      ''
   );
   const {
      value: valueSubject,
      bind: bindSubject,
      reset: resetSubject,
   } = useInput('');
   const {
      value: valueMessage,
      bind: bindMessage,
      reset: resetMessage,
   } = useInput('');

   const cleanForm = () => {
      resetName();
      resetEmail();
      resetSubject();
      resetMessage();
      setErrors({});
   };

   const handleSubmit = event => {
      event.preventDefault();
      let contact = {
         name: valueName,
         email: valueEmail,
         subject: valueSubject,
         message: valueMessage,
      };
      setLoading(true);
      CominSoonServices.contact(contact).then(
         res => {
            setLoading(false);
            setSentMessage('Your message has been sent. Thank you!');
            // handle success notifications
            cleanForm();
         },
         errors => {
            setLoading(false);
            setErrors(errors.response.data);
            console.log(errors);
         }
      );
   };

   return (
      <div className='row  justify-content-center'>
         <div className='col-lg-10'>
            <form className='php-email-form' onSubmit={handleSubmit}>
               <div className='form-row'>
                  <div className='col-md-6 form-group'>
                     <input
                        {...bindName}
                        type='text'
                        className='form-control'
                        id='name'
                        placeholder='Your Name'
                     />
                     {errors.name && (
                        <div className='validate'>{errors.name}</div>
                     )}
                  </div>
                  <div className='col-md-6 form-group'>
                     <input
                        {...bindEmail}
                        type='email'
                        className='form-control'
                        id='email'
                        placeholder='Your Email'
                     />
                     {errors.email && (
                        <div className='validate'>{errors.email}</div>
                     )}{' '}
                  </div>
               </div>
               <div className='form-group'>
                  <input
                     {...bindSubject}
                     type='text'
                     className='form-control'
                     id='subject'
                     placeholder='Subject'
                  />
                  {errors.subject && (
                     <div className='validate'>{errors.subject}</div>
                  )}{' '}
               </div>
               <div className='form-group'>
                  <textarea
                     {...bindMessage}
                     className='form-control'
                     rows='5'
                     placeholder='Message'
                  ></textarea>
                  {errors.message && (
                     <div className='validate'>{errors.message}</div>
                  )}
               </div>
               <div className='mb-3'>
                  {loading && <div className='loading'>Loading</div>}
                  {sentMessage && (
                     <div className='sent-message'>{sentMessage}</div>
                  )}
               </div>
               <div className='text-center'>
                  <button type='submit'>Send Message</button>
               </div>
            </form>
         </div>
      </div>
   );
}
export default reduxForm({ form: 'contactForm' })(ContactForm);
