import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import PubHeader from "../../../components/PubHeader/index"
import ServiceList from "./serviceList";

const Service = () =>{
   
    const { user } = useSelector(state => state.login)
    console.log( user )

    const Navigate = useNavigate()

    useEffect(()=>{
        if( !user.token || !user.nick ){
          Navigate("/login")
        }
    },[])

    return(
        <div>
          <PubHeader title={"购物车"}/>
          <ServiceList user={user} />
        </div>
    )
}

export default Service