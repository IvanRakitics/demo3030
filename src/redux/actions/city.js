import { INIT_CITY, CHANGE_CITY } from "../constants"

export function initCity(cityName){
    return {type:INIT_CITY,data:{
        name:cityName
    }}
}
export function changeCity(cityName){
    return {type:CHANGE_CITY,data:{
        name:cityName
    }}
}