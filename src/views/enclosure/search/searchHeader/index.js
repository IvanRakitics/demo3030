import React from "react";
import { useNavigate } from "react-router-dom";

import TopInput from '../../../../components/TopInput/index'

import "./style.css"

const SearchHeader = () =>{

    const Navigate = useNavigate()

    return(
        <div id="search-header" className="clear-fix">
            <span className="back-icon" onClick={()=>Navigate(-1)}>
                <i className="back-icon iconfont icon-back"></i>
            </span>
            <div className="input-container-search">
                <i className="iconfont icon-search"></i>
                <TopInput/>
            </div>
        </div>
    )
}

export default SearchHeader