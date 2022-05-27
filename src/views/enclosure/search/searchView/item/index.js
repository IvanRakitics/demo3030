import React from "react";

import { Link } from "react-router-dom";

import "./style.css"


const Item = ( props ) =>{

    const { data } = props

    return(
        <div className="list-item">
            <Link to={`/details/${data.id}`}>
                <img src = {data.img} alt=""/>
                <div className="mask">
                    <div className="left">
                        <p>{data.title}</p>
                        <p>{data.housetype}</p>
                    </div>
                    <div className="right">
                        <div className="btn">
                            {data.renttype}
                        </div>
                        <h3>{data.price}<span>元</span></h3>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Item