import React from "react";

import TopInput from "../../../../components/TopInput";
import "./style.css"

const CategoryHeader = () =>{
    return(
        <div id="category-header">
            <div className="app-header">
                <i className="iconfont icon-search"></i>
                <TopInput/>
            </div>
        </div>
    )
}

export default CategoryHeader