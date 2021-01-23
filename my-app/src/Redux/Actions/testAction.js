
import { INCREMENT, DECREMENT } from '../Types/test';


    export const increaseCounter = () => {

        return (dispatch) =>{
            dispatch({
                type: INCREMENT
               });

        };

    };

    export const decreaseCounter = () => {

        return (dispatch) =>{
            dispatch({
                type: DECREMENT
               });

        };

    };