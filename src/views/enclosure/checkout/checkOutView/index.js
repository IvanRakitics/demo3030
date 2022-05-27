import React from "react";

import './style.css'
import RightBtn from "../../../../components/right-btn";

const CheckOutView = ( props ) =>{

    const { address, itemdetails, amount, updateAddress, selectAddress } = props 
  
    console.log(itemdetails)

    return<div id="check-out-view">
        <div className="check-out-address">
            <div className="address-box" onClick={selectAddress}>
                <div className="address-consigee">
                    <p>
                        <span>{address ? address.consignee : ''}</span>
                        <span>{address ? address.phone : ''}</span>
                    </p>
                </div>
                <div className="address">
                    <p>{address ? address.county : ''} {address ? address.details_addresss : ''}</p>
                </div>
            </div>
            <RightBtn onClickHandle={updateAddress}/>
        </div>
        <div className="item-box">
            <ul>
                {
                    itemdetails && itemdetails.length ?
                    itemdetails.map( el =>(
                        <li className="item-list border-bottom" key={el.id}>
                            <div className="img">
                                <img src={el.cart_img} alt=""></img>
                            </div>
                            <div className="title"><p><span>{el.title} {el.product_list}</span></p></div>
                            <div className="price">
                                <strong>{el.rate ? Number(el.rate).toFixed(2) : 0.00}</strong>
                            </div>
                        </li>
                    ))
                    :''
                }
            </ul>
        </div>
        <div className="logistics-box">
            <ul>
                <li className="logistics-list justify-space-between align-center ui-flex">
                    <strong>运费</strong>
                    <div className="context"><span>包邮</span></div>
                </li>
                <li className="grap-line"></li>
                <li className="logistics-list justify-space-between align-center ui-flex">
                    <strong>电子普通发票</strong>
                    <div className="context">
                        <span>个人</span>
                        <i className="iconfont icon-down"></i>
                    </div>
                </li>
                <li className="grap-line"></li>
                <li className="logistics-list justify-space-between align-center ui-flex">
                    <strong>优惠卷</strong>
                    <div className="context">
                        <span>无可用</span>
                        <i className="iconfont icon-down"></i>
                    </div>
                </li>
            </ul>
        </div>
        <div className="logistics-total">
            <ul>
                <li>
                    <p><strong>商品价格：</strong><span>{ amount ? Number(amount).toFixed(2) : 0.00}</span></p>
                </li>
                <li>
                    <p><strong>配送费用：</strong><span>0.00</span></p>
                </li>
            </ul>
        </div>
    </div>
}

export default CheckOutView