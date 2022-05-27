import React from "react";
import classNames from "classnames";

import './style.css'
import RightBtn from "../../../../components/right-btn";

const AddressView = ( props ) =>{

    const { data, number, onClickHandle, onSelectHandle } = props

    return(
    <div id="address-view">
        <ul className={classNames({'address-top-border':number !== 0})} onClick={()=>{onSelectHandle(data.id)}}>
            <li className="li-identity">
                <span className="consignee">{data.consignee}</span>
                <span className="phone">{data.phone}</span>
                { data.defaultaddress ? <em>默认</em> : ''}
            </li>
            <li className="li-address"><p>{data.county}</p><p>{data.details_addresss}</p></li>
        </ul>
        <RightBtn onClickHandle={onClickHandle}/>
    </div>)
}

export default AddressView