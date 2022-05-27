import React from "react";
import {  useNavigate } from "react-router-dom";
import './style.css'

const PubHeader = ( props ) =>{
    const Navigate = useNavigate()

    return(
        <div id="common-header">
            {/* //window.history.back() */}
            <span className="back-icon" onClick={()=>Navigate(-1)}>
                <i className="back-icon iconfont icon-back"></i>
            </span>
            <h1>{ props.title }</h1>
        </div>
    )
}

export default PubHeader