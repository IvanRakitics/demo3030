import React, { useEffect, useState } from "react";

import axios from "axios";

import ServiceView from "../serviceView";

import './style.css'

const ServiceList = ( props ) =>{

    const { user } = props

    const [cartList,setCartList] = useState([])

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/cart/list",{
            params:{
                token : user.token || '',
                userid : user.id || 0
            }
        }).then(res=>{
            const { data, status } = res
            console.log( status )
            if(status === 200 ){
                if(data.code === 500){
                    const { items } = data
                    console.log( items )
                    setCartList( el => [...items])
                }
            }
        }).catch((error)=>{
            console.log(error)
        })
    },[])
   

    return (
    <div id="cart-list">
        <ul>
        {
          cartList.length > 0  ?
          (
            <div>
                {
                    cartList.map((el,index)=>{
                        return (
                        <li key={index}>
                           <ServiceView cartList={el}/>
                        </li>
                        )
                    })
                }
            </div>
          ):''  
        }
        </ul>
    </div>
    )
}

export default ServiceList