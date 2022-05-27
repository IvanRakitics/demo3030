import React from "react";
import { useNavigate } from "react-router-dom";

import AddressView from "../addressView";

const AddressList = ( props ) =>{

    const { data, onSelectHandle } = props

    const Navigate = useNavigate()

    function updataAddress( index ){
        let item = data.find(el => el.id === index)
        if(item){
            console.log(item)
            Navigate("/address/update",{state:{
                type:"update",
                data:item
            }})
        }
    }

    return (<div>
        {data.length ? 
        data.map((el,index)=><AddressView 
                             data={el} 
                             key={el.id} 
                             number={index} 
                             onClickHandle={()=>{updataAddress(el.id)}}
                             onSelectHandle={onSelectHandle}
                             />)
        :''}
    </div>)
}

export default AddressList