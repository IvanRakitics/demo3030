import React, { useCallback, useEffect, useState } from "react";
import CityHeader from "../../../components/PubHeader/index"
import Curcity from "./curCity";
import CityList from "./CityList";
import { useNavigate } from "react-router-dom";
import { useSelector  } from "react-redux";
import { useDispatch } from "react-redux";


import { changeCity } from "../../../redux/actions/city";

import axios from 'axios'


const City = () =>{
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const cityName = useSelector(state => state.city.city.name)
     
    const onCityChange = useCallback((tarCity)=>{
        dispatch(changeCity(tarCity))
        navigate('/main/home',{state:{
            tarCity
        }})
    },[])

    const [data,setData] = useState({citys:[]})
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/citys').then((res)=>{
            const { data } = res
            setData( {citys:data} )
        }).catch((error)=>{
            console.log(error)
        })
        
    },[])
    return (
        <div>
            <CityHeader title={"城市选择"}/>
            <Curcity city = { cityName }/>
            {
            data.citys.length > 0 ?
            <CityList 
                data = { data }
                onCityChange = { onCityChange }
            />
            : null
            }
        </div>
    )
}

export default City