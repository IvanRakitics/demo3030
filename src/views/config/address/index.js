import React, {useCallback, useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import PubHeader from "../../../components/PubHeader";
import BottomBtn from "../../../components/BottomBtn";
import AddressList from "./addressList";

import axios from 'axios'

import './style.css'

const Address = () =>{


    const { user } = useSelector(state => state.login)
    console.log( user )

    const Navigate = useNavigate()
    const location = useLocation()

    const [list,setList] = useState([])

    useEffect(()=>{
        if( !user.token || !user.nick ){
          Navigate("/login")
        }else{
            axios.get('http://127.0.0.1:8000/address/list',{params:{user:user.id}}).then(res=>{
                const { data } = res
                setList(el => data)
            })
        }
    },[])

    function onClickHandle(){
        console.log('a')
        Navigate("/address/update",{
            state:{
                type:"insert"
            }
        })
    }

    const onSelectHandle = useCallback((address_id)=>{      
        const { state } = location
        if( state && state.type === "checkout"){
            let obj = {"id":state.id, "address":address_id }
            let events = { "type": "update_address" }
            axios.post("http://127.0.0.1:8000/order/events", { "events": events, "data":obj } ).then(res=>{
                const { code } = res.data 
                if(code === 500){
                   Navigate(-1)
                }
            })
        }
    },[location])

    return(<div id="address-box">
         <PubHeader title={"收货地址"}/>
         <BottomBtn title={"添加收货地址"} onClickHandle={onClickHandle}>
             <i className="insert-icon">+ </i>
         </BottomBtn>
         <div id="address-list">
             <AddressList 
             data={list}
             onSelectHandle={onSelectHandle}/>
         </div>
    </div>)
}

export default Address