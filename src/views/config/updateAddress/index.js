import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddressUpdateView from "./addressUpdateView";

import axios from 'axios'

import './style.css'

const AddressUpdate = () =>{



    const { user } = useSelector(state => state.login)
    console.log( user )

    const Navigate = useNavigate()


    useEffect(()=>{

        if( !user.token || !user.nick ){
          Navigate("/login")
        }
    },[])



    async function updateAddress( {id, type, county, addressDetails, phone, consignee, defaultaddress} ){
        console.log(county)
        const { data, status } = await axios({
            url:"http://127.0.0.1:8000/address/update",
            method:"post",
            headers:{
                "Content-Type":"application/json;charset=utf-8",
                "Accept":"application/json"
            },
            data:{
                id:id,
                type:type,
                user:user.id,
                province:'0',
                city:'0',
                county:county,
                details_addresss:addressDetails,
                phone:phone,
                consignee:consignee,
                defaultaddress:Number(defaultaddress)
            }
        })
        console.log(data,status)
        if( status === 200 && data.code === 500 ){
            Navigate(-1)
        }
    }

    return(<div id="address-update-box">
       <AddressUpdateView updateAddress={updateAddress}/>
    </div>)
}

export default AddressUpdate