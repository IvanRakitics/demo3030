import React from "react";

import "./style.css"

const CityList = ( props ) =>{

    const { data:{citys} , onCityChange } = props

    return(
    <div className="city-list-container">
        <h3>热门城市</h3>
            <ul className="clear-float">
                {citys.map((el,index,array)=>{
                    return(<li key={index} onClick={()=>{ onCityChange(el.name) }}>
                        <span>{el.name}</span>
                    </li> )
                })}
            </ul>
    </div>
    )
}

export default CityList