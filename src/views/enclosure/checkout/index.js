import React, { useEffect, useState, useCallback } from "react";
import PubHeader from "../../../components/PubHeader";
import CheckBottomNav from "./checkBottomNav";
import CheckOutView from "./checkOutView";

import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CheckOut = () =>{

    let { id } = useParams()
    const { user } = useSelector(state => state.login)
    const Navigate = useNavigate()

    const [data,setData] = useState({})
    const [address,setAddress] = useState({})
    const [itemDetails,setItemDetails] = useState([])

    useEffect(()=>{
        axios({
            url:"http://127.0.0.1:8000/order/checkout",
            method:"get",
            params:{ "id": id }
         }).then(res=>{
             console.log(res.data)
             setData(el => res.data)
             setAddress(obj => res.data.address )
             setItemDetails(arr => res.data.item_details )
         })
    },[id])

    const updateSalesOrder = useCallback(()=>{
         let events = { "type": "update" }
         let details = itemDetails.map( obj =>{
             return {"id": obj.id, "item": obj.item, "product": obj.product_id, "quantity": obj.quantity, "rate": obj.rate}
         })
         let obj = {"id": data.id, "address": address, "user": user.id, "status": 3, "amount": data.amount, "details":details}
         console.log( "obj", obj )
        axios.post("http://127.0.0.1:8000/order/events", { "events": events, "data":obj } ).then(res=>{
            console.log( res.data )
            const { code } = res.data
            if( code === 500 ){
                Navigate('/main')
            }
        })
     },[itemDetails,user,data,address])

     const updateAddress = useCallback(()=>{
        Navigate("/address/update",{state:{
            type: "update",
            data: address
        }})
     },[address])

     const selectAddress = useCallback(()=>{
        Navigate("/shipping/address",{state:{
            "type": "checkout",
            "id": id
        }})
     },[id])

    return(<div>
        <PubHeader title={"用户结算"}/>
        <CheckBottomNav 
        data = {data}
        onClickHandle = {updateSalesOrder}
        />
        <CheckOutView 
        address={address}
        itemdetails = {itemDetails}
        amount = {data.amount}
        updateAddress = { updateAddress } 
        selectAddress = { selectAddress } 
        />
    </div>)    
}

export default CheckOut