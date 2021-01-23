import React from 'react';
import { increaseCounter, decreaseCounter } from '../Redux/Actions/testAction';
import { connect } from 'react-redux';

function TestComponentForRedux(props) {
   return (
      <div>
         {console.log(props)}
         <div>Count:{props.count}</div>
         <button onClick={props.increaseCounter}>Increase Count</button>

         <button onClick={props.decreaseCounter}>Decrease Count</button>
      </div>
   );
}
//state
const mapToProps = state => ({
   count: state.test.count,
});
//actions
const mapDispatchToProps = {
   increaseCounter,

   decreaseCounter,
};
export default connect(mapToProps, mapDispatchToProps)(TestComponentForRedux);
