import React from "react";
import './index.css'
import { NavLink , Outlet} from "react-router-dom";

const ButtomNav = ( ) =>{
  
   const Navs = {
       "home":{
           name:"主页",
           path:"/home",
           icon:"iconfont icon-home"
       },
       "shop":{
           name:"分类",
           path:"/main/category",
           icon:"iconfont icon-marks"
       },
         "service":{
           name:"购物车",
           path:"/main/service",
           icon:"iconfont icon-cart"
       },
         "mine":{
            name:"我的",
            path:"/main/mine",
            icon:"iconfont icon-service"
        },

   }
    
 

    return (
    <>
    <Outlet/>
    <div className="nav-footer">
      <ul className="clear-fix">
           { Object.keys(Navs).map((key)=>{
              return(
                  <li key={key}>
                      
                     <NavLink  to={Navs[key].path} >
                        <div className="">
                          <i className={Navs[key].icon}></i>
                          <span>{ Navs[key].name }</span>
                        </div>
                    </NavLink>
                  </li>
                )
           })}
     </ul>
    </div>
    </>
  )
}

export default ButtomNav