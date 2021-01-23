import React from 'react';
import moment from 'moment';

function CountDownTime({ countdown }) {
   return (
      <div className='countdown d-flex justify-content-center'>
         <div>
            <h3>{countdown.days}</h3>
            <h4>Days</h4>
         </div>
         <div>
            <h3>{countdown.hours}</h3>
            <h4>Hours</h4>
         </div>
         <div>
            <h3>{countdown.mins}</h3>
            <h4>Minutes</h4>
         </div>
         <div>
            <h3>{countdown.secs}</h3>
            <h4>Seconds</h4>
         </div>
      </div>
   );
}
export default CountDownTime;
