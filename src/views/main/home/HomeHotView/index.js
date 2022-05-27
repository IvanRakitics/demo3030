import React from "react";

import './style.css'

const HomeHotView = (props) =>{
      const { data } = props
      return(
         // <div>{ JSON.stringify(data) }</div>
          <div className="hotproduct">
              <h3>{ props.title }</h3>
              <div className="hot-container">
                  <ul className="claer-fix">
                      {
                          data.map((el,i)=>{
                              return (
                              <li key={el.id}>
                                  <a href={el.link}>
                                      <img src={el.img} alt=""/>
                                      <span>{el.title}</span>
                                  </a>
                              </li>
                              )
                          })
                      }
                  </ul>
              </div>
          </div>
      )
}

export default HomeHotView