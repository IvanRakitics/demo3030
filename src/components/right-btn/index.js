import React from "react";
import './style.css'

const RightBtn = ( props ) =>{
    const {onClickHandle} = props

    return(
        <div id="right-btn" onClick={onClickHandle}>
            <i className="right-icon"></i>
        </div>
    )
}

export default RightBtn