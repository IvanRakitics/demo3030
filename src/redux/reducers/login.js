import { OUT_LOGIN, SET_LOGIN } from "../constants";

const stateInfos = {
    user:{
        token:"",
        nick:"",
        id:""
    }
}

let defaultState = localStorage.getItem("state") ? JSON.parse(localStorage.getItem("state")) : stateInfos

export default function( state = defaultState, action){
    const { type, data } = action
    switch(type){
        case SET_LOGIN:
            localStorage.setItem("state",JSON.stringify({ user: data.user }))
            return { user: data.user };
        case OUT_LOGIN:
            return { use:{}};
        default:
            return state
    }
}