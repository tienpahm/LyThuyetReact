import {combineReducers} from "redux";
import FakeBookReducer from "./FakeBookReducer";
const rootReducer = combineReducers({
  //store  tổng của ứng dụng
  FakeBookReducer,
});

export default rootReducer;
