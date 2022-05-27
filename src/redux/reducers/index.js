import { combineReducers } from "redux";
import city from "./city";
import login from "./login";

const rootReducer = combineReducers({
    city,login
})

export default rootReducer