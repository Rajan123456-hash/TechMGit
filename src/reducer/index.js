import {combineReducers} from "redux";
import incrDecre from "./incredecre.js";
import uselist from "./userlist.js"


const rootReducer=combineReducers({
    uselist,incrDecre
})

export default rootReducer;
