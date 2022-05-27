import React from "react";
import {  useNavigate } from "react-router-dom";
import './style.css'

const StickyHeader = ( props ) =>{
    const Navigate = useNavigate()

    return(
        <header id="common-sticky-header">
            {/* //window.history.back() */}
            <span className="back-icon" onClick={()=>Navigate(-1)}>
                <i className="back-icon iconfont icon-back"></i>
            </span>
        </header>
    )
}

export default StickyHeader