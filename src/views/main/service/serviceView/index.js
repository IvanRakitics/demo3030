import React, { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import "./style.css"

import ButtonCart from "../../../../components/ButtonCart";
import axios from "axios";

const ServiceView = ( props ) =>{

    const { cartList } = props
    const { product_name } = cartList

    const [checked,setChecked] = useState(cartList.cancel_flag)
    const [deleteFlag,setDeleteFlag] = useState(cartList.delete_flag)
    const [count,setCount] = useState(cartList.count)

    function onClickHandle(e){
        let _flag = checked ? 0 : 1
        updateCartItem(count,_flag,deleteFlag)
    }
    function onDeleteClickHandle(e){
        let _flag = deleteFlag ? 0 : 1
        updateCartItem(count,checked,_flag)
    }
    function increaseHandle(){
        let _count = count - 1
        if(count - 1 > 0){
            updateCartItem( _count , checked, deleteFlag)
        }
    }

    function decreaseHandle(){
        let _count = count + 1
        updateCartItem( _count , checked, deleteFlag)
    }

    async function updateCartItem( count, cancel_flag= 0, delete_flag= 0 ){
        
        const { data, status} = await axios({
            url:"http://127.0.0.1:8000/cart/update",
            method:"post",
            headers:{
                "Content-Type":"application/json;charset=utf-8",
                "Accept":"application/json"
            },
            data:{
                 label:cartList.product_id,
                 count:count,
                 user:cartList.user_id,
                 item:cartList.goods_id,
                 cancel_flag:cancel_flag,
                 delete_flag:delete_flag
            }
          })
          console.log(status)
        if( data.code === 500 && status === 200 ){
            setCount(count)
           // console.log(cancel_flag)
            setChecked(cancel_flag)
            setDeleteFlag(delete_flag)
        } 
    }

    return (
        <>{
        !deleteFlag?
        <div className="cart-box">
            <div className="cart-box-left">
                <div className="cart-box-input">
                    <div className={classNames("input-check-box",{"checked-box":!checked})} onClick={onClickHandle}/>
                </div>
                 <div className="cart-box-img">
                    <Link to={`/details/${cartList.goods_id}`}>
                        <img src={cartList.img} alt=""/>
                    </Link>
                 </div>
            </div>
            <div className="cart-box-right">
                <div className="cart-details-title">
                    <span>{cartList.goods_name}</span>
                    {
                        product_name.length > 0 ? 
                            product_name.map((el,index)=>
                            <span key={index}>{el}</span>
                            )
                        :''
                    }
                </div>
                <div className="cart-details-price">
                    售价：{cartList.price} 元
                </div>
                <div className="cart-details-handle">
                    <div className="handle-box" >
                        <ButtonCart increaseHandle={increaseHandle}  decreaseHandle={decreaseHandle} count={count}/>
                    </div>
                    <div className="delete-box" onClick={onDeleteClickHandle}>
                        <i className="iconfont icon-delete"></i>
                    </div>
                </div>
            </div>            
        </div>
        : <></>}
    </>
    )
}

export default ServiceView