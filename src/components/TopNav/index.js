import React from "react"

import { Link } from "react-router-dom"

import './style.css'

import TopInput from "../TopInput"

const TopNav = ( props ) =>{
    const { city } = props



    
    return(
        <div id="home-header" >
             <div className="home-header-left">
                 <Link to={"/city"}>
                    <span>{ city }</span>
                    <i className="iconfont icon-down"></i> 
                </Link>
            </div>
            <div className="home-header-right">
                <div className="home-header-input">
                     <div className="search-container">
                        <i className="iconfont icon-search"></i>
                        <TopInput/>
                    </div> 
                </div>
                
                <div className="home-header-icon">
                    <i className="iconfont icon-car"></i>
                </div>  
            </div>
        </div>
    )
}

export default TopNav