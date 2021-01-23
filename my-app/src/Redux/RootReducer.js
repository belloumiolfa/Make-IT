import { combineReducers } from "redux";
   
//import reducers
import testReducer from "./Reducers/testReducer";

const RootReducer = combineReducers({
   test: testReducer
 });

export default RootReducer;