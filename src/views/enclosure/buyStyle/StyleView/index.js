import React, { useEffect, useState } from "react";

import "./style.css";

import Product from "../Product";
import ButtonCart from "../../../../components/ButtonCart";


const StyleView = ( props ) =>{

    const { itemid, productList,sendCartInfo, data, closeClickHandle, createSalesOrder, handleType} = props

    console.log(data)
    
    const [count,setCount] = useState(1)
    const [labelList,setLabelList] = useState([])

    function onClickHandle(){
        let labelStr = labelList.join("|")
        if( handleType === "cart" ){
            sendCartInfo(labelStr,count)
        }else if( handleType === "checkout" ){
            let events = { "type": "create" }
            let obj = {}
            obj.amount = Number(count) * Number(data.price)
            let details = []
            details.push( {"item": itemid, "product": labelStr, "quantity": count, "rate": data.price} )
            obj.details = details
            createSalesOrder( events, obj )
        }
    }

    function updateLabelLise(index,value){
        labelList[index] = value
        setLabelList([...labelList])
    }

    useEffect(()=>{
        let _labelList = productList.map(el => el.label_list[0].id)
        setLabelList(_labelList)
    },[productList])

    function increaseHandle(){
        if( count -1 > 0 ){
            setCount(count-1)
        }
    }

    return(
        <div>
            <div className="ui-mask"></div>
            <div className="pop-mask">
                <i className="iconfont pro-close" onClick={closeClickHandle}></i>
                <div className="pro-info">
                    <div className="pro-img">
                        <img src={data.cart_img} alt=""></img>
                    </div>
                    <div className="pro-desc">
                        <div className="pro-price">
                            <span className="pro-price-cur">￥{data.price}</span>
                            {
                                String(data.originalprice).trim().length > 0 ? <span className="pro-price-origin">￥{data.originalprice}</span> : ''
                            }
                        </div>
                        <div className="pro-name">
                            <span>{data.title}</span>
                        </div>
                    </div>
                </div>
                {
                    productList && productList.length > 0 ? <>{
                        productList.map((el,index)=>{
                            return(<div key={el.id}>
                                <Product title={el.title} label={el.label_list} updateLabelLise={(value)=>updateLabelLise(index,value)}/>
                            </div>)
                        })
                     }</> : ''
                }
                <div className="pro-detials">
                    <div className="pro-quantity">
                        <span>购买数量</span>
                    </div>
                    <div className="pro-calc">
                        <ButtonCart increaseHandle={ increaseHandle }  decreaseHandle={ ()=>{setCount(count+1) }}  count={count}/>
                    </div>
                </div>
                <div className="pro-button">
                    <div className="action-pro-box" onClick={onClickHandle}>
                        <div className="buy-btn">确定</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StyleView