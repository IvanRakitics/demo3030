import classNames from "classnames";
import React, { useState } from "react";


import './style.css'

const Product = ( props ) =>{

    const { title, label, updateLabelLise } = props
    const [tarSelect,setTarselect] = useState(0)

    function onClickHandle(index,value){
        updateLabelLise(value)
        setTarselect(index)
    }

    return(<div>
        <div className="pro-label-title">
            <p>{title}</p>
        </div>
        <div className="pro-label-name">
            {
                label && label.length > 0 ?
                label.map((el,index)=>
                    <span 
                    key={el.id} 
                    className={classNames({'select-box':tarSelect===index})}
                    onClick={()=>{onClickHandle(index,el.id)}}>{el.label}</span>
                ):''
            }
        </div>
    </div>)
}

export default Product