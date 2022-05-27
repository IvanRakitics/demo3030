import { INIT_CITY, CHANGE_CITY } from "../constants";

const defaultState = {
    "city":{
        "name":"北京"
    }
}

const city = ( state = defaultState, action ) =>{
    switch(action.type){
         case INIT_CITY:
            
            Object.assign(state,{"city": { "name": action.data.name }})
            return state
         case CHANGE_CITY:
            Object.assign(state,{"city": { "name": action.data.name }})
            return state
        default:
            return state
    }
}

export default city