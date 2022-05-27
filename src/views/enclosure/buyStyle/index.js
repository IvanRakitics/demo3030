import axios from "axios";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import StyleView from "./StyleView/index";

//import axios from "axios";

const BuyStyle = ( props ) =>{

    const { flagShow, productList, user, itemid, data, closeClickHandle, handleType} = props

    const Navigate = useNavigate()

    const sendCartInfo = useCallback((labelList,count)=>{

        axios.post("http://127.0.0.1:8000/cart/update",{
            label:labelList,
            count:count,
            user:user.id,
            item:itemid,
            cancel_flag:0,
            delete_flag:0
        }).then(res=>{
            console.log( res.data )
            const { code } = res.data
            if( code === 500 ){
                Navigate('/main/service')
            }
        })

    },[user,itemid])


    const createSalesOrder = useCallback((events, obj)=>{
        
        obj.user = user.id
        obj.status = 1
        console.log( obj )
        axios.post("http://127.0.0.1:8000/order/events", { "events": events, "data":obj } ).then(res=>{
            console.log( res.data )
            const { code, item } = res.data
            if( code === 500 ){
                Navigate(`/checkout/${ item.id }`)
            }
        })
    },[])

    return(
        <>
        {
            flagShow ? <StyleView 
            productList={Object.keys(productList).map((key)=>productList[key])}
            sendCartInfo={sendCartInfo}
            createSalesOrder= {createSalesOrder}
            data={data}
            itemid={itemid}
            closeClickHandle ={closeClickHandle}
            handleType = {handleType}
            /> :''
        }
        </>
      )
}

export default BuyStyle