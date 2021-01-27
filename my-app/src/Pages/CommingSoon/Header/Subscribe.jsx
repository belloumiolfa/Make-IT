import React, { useState } from 'react';
import CominSoonServices from '../../../Services/ComingSoonServices';
import { useInput } from '../../../Utils/FakeData/Hooks/useInput';

function Subscribe() {
   const { value: valueEmail, bind: bindEmail, reset: resetEmail } = useInput(
      ''
   );
   const [errors, setErrors] = useState({});
   const [loading, setLoading] = useState(false);
   const [sentMessage, setSentMessage] = useState();

   const cleanForm = () => {
      //resetEmail();
      setSentMessage('');
      setErrors({});
   };
   const addSubscribe = event => {
      event.preventDefault();
      let email = valueEmail;
      setLoading(true);

      CominSoonServices.addSubscribe(email).then(
         res => {
            setLoading(false);
            setSentMessage('Your notification request was sent. Thank you!');
            // handle success notifications
         },
         errors => {
            setLoading(false);
            setErrors(errors.response.data);
         }
      );
      cleanForm();
   };

   return (
      <div className='subscribe'>
         <h4>Being the first to know always feels great...</h4>
         <form>
            <div className='subscribe-form'>
               <input {...bindEmail} type='email' name='email' />
               <input type='submit' onClick={event => addSubscribe(event)} />
            </div>
            {errors.email && (
               <div className='error-message'>{errors.email}</div>
            )}
            <div className='mt-2'>
               {loading && <div className='loading'>Loading</div>}
               {sentMessage && (
                  <div className='sent-message'>{sentMessage}</div>
               )}
            </div>
         </form>
      </div>
   );
}

export default Subscribe;
