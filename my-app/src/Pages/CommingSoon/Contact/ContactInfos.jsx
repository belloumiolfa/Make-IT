import React from 'react';

function ContactInfos() {
   return (
      <div className='row justify-content-center'>
         <div className='col-lg-10'>
            <div className='info-wrap'>
               <div className='row'>
                  <div className='col-lg-4 info'>
                     <i className='icofont-google-map'></i>
                     <h4>Location:</h4>
                     <p>Tunisia</p>
                  </div>

                  <div className='col-lg-4 info mt-4 mt-lg-0'>
                     <i className='icofont-envelope'></i>
                     <h4>Email:</h4>
                     <p>cf.makeit@gmail.com</p>
                  </div>

                  <div className='col-lg-4 info mt-4 mt-lg-0'>
                     <i className='icofont-phone'></i>
                     <h4>Call:</h4>
                     <p>+216 52 182 334</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
export default ContactInfos;
