import React from "react";

import './style.css'

const BottomAddress = ( props ) =>{ 

    const { address } = props

    return (<div className="info-tips">配送至：{address.county}{address.details_addresss}</div>)
}

const CheckBottomNav = ( props ) =>{

    const { data, onClickHandle } = props

    return(
        <div id="check-Bottom-Nav">
           { data.address ?
            <BottomAddress address={data.address}/>
            : ''}
            <div className="check-bottom">
                <div className="ui-box ui-calc"><span>共{data.quantity ? Number(data.quantity) : 0}件 合计: <b>{ data.amount ? Number(data.amount).toFixed(2) : 0.00}</b></span></div>
                <div className="ui-box check-btn" onClick={onClickHandle}>付款</div>
            </div>
       </div>)
}

export default CheckBottomNav