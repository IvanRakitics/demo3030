import React from "react";

import "./style.css"

const Curcity = ( props ) =>{

    const { city } = props

    return(
    <div id="cur-city">
          <h2>当前城市:{city}</h2> 
    </div>
    )
}

export default Curcity