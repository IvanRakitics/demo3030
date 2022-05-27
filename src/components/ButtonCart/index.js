import React from "react";

import "./style.css"

const ButtonCart = ( props ) =>{
    const { increaseHandle, decreaseHandle, count} = props 
    return (
    <div className="common-button-box">
        <div className="box-left" onClick={increaseHandle}>
            <i className="iconfont icon-line"></i>
        </div>
        <span>{count}</span>
        <div className="box-right" onClick={decreaseHandle}>
            <i className="iconfont icon-Cross"></i>
        </div>
    </div>)
}

export default ButtonCart