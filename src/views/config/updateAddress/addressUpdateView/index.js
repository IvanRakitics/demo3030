import React, { useEffect, useState } from "react";
import { Switch } from 'antd-mobile'
import { useLocation } from "react-router-dom";

import './style.css'

import PubHeader from "../../../../components/PubHeader";
import ComBtn from "../../../../components/ComBtn";

const AddressUpdateView = ( props) =>{

    const { updateAddress } = props

    const location = useLocation()

    const [addressId,setAddressId] = useState('')
    const [handleType,setHandleType] = useState('')
    const [user,setUser] = useState('')
    const [phone,setPhone] = useState('')
    const [county,setCounty] = useState('')
    const [addressDetails,setAddressDetails] = useState('')
    const [checked,setChecked] = useState(false)

    useEffect(()=>{
        const { state } = location;
        setHandleType(state.type || '')
        if( state && state.type === "update" && state.data){
            const { data } = state
            console.log( data )
            setAddressId(data.id || 0)
            setUser( data.consignee || '' )
            setPhone(data.phone || '')
            setCounty(data.county || '')
            setAddressDetails(data.details_addresss || '')
            setChecked(Boolean( data.defaultaddress || false))
        }
    },[])

    function onClickHandle(){
        let data = {
            phone,county,addressDetails
        }
        data.consignee = user
        data.type = handleType
        data.id = addressId
        data.defaultaddress = checked
        updateAddress(data)
    }

    return (
    <>
    <PubHeader title={handleType === "update" ? "修改收货地址" : "添加收货地址"}/>
    <div id="address-update">
        <ul>
            <li className="li-box">
                <div className="li-title align-center"><span>收件人</span></div>
                <input 
                type="text" 
                className="li-context input-small" 
                placeholder="名称"
                value={user}
                onChange={(e)=>{ setUser(e.target.value) }}>
                </input>
            </li>
            <li className="li-box">
                <div className="li-title align-center"><span>手机号码</span></div>
                <input 
                type="text" 
                className="li-context input-small" 
                placeholder="手机号"
                value={phone}
                onChange={(e)=>{ setPhone(e.target.value) }}> 
                </input>
            </li>
            <li className="li-box">
                <div className="li-title align-center"><span>所在地区</span></div>
                <input 
                type="text" 
                className="li-context input-small" 
                placeholder="省、市、区"
                value={county}
                onChange={(e)=>{ setCounty(e.target.value) }}>
                </input>
            </li>
            <li className="li-box">
                <div className="li-title"><span>详细地址</span></div>
                <textarea 
                type="text" 
                className="li-context input-large code" 
                placeholder="小区楼栋、乡村名称"
                value={addressDetails}
                onChange={(e)=>{ setAddressDetails(e.target.value) }}>
                </textarea>
            </li>
        </ul>
        <div className="default-set">
            <div><span>设置默认收货地址</span></div>
            <Switch
            style={{
                '--checked-color': '#ff7310',
                '--height': '21px',
                '--width': '35px',
              }}
            checked={checked}
            onChange={checked => {
                setChecked(checked)
            }}
            />
        </div>
        <ComBtn title={"保存"} onClickHandle={onClickHandle}/>

    </div>
    </>)
}

export default AddressUpdateView