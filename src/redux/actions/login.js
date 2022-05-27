import { SET_LOGIN, OUT_LOGIN } from "../constants";

export function setLogin(user){
    return{
        type:SET_LOGIN,
        data:{
            user
        }
    }
}

export function outlogin(user){
    return{
        type:OUT_LOGIN,
        data:{}
    }
}