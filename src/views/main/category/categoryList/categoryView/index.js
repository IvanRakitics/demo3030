import React from "react";

import './style.css'

const CategoryView = ( props ) =>{
    const { data } = props
    if(data.view_type === "cells_auto_fill"){
        const { items } = data
        return(<div className="cell-top-fill">
              {
                  items.length > 0 ? 
                  items.map(el=> <img alt="" src={el.img} key={el.id}/>)
                  : ''
              }
        </div>)
    }else if( data.view_type === "category_title"){
        const { items } = data
        return (<div>
            {
                  items.length > 0 ? 
                  items.map(el=> <div className="category_title" key={el.id}><span>{el.category_title}</span></div>)
                  : ''
              }
        </div>)
    }else if( data.view_type === "category_group" && data.expand){
        const { items } = data
        return(
            <div>
                {items.length > 0 ? 
                items.map(el=><div key={el.id} className="category_group_expand">
                    <a className="exposure-item" href={`/details/${el.item_id}`}>
                        <img src={el.img} alt=""/>
                        <div className="pro-right">
                            <div className="pro-right-title">{el.product.title}</div>
                            <div className="pro-right-price"><span>￥</span>{el.product.price}</div>
                        </div>
                    </a>
                </div>)
                :''}
            </div>
        )
    }else if( data.view_type === "category_group" && !data.expand){
        const { items } = data
        return(
            <div>
                {
                    items.length > 0 ? 
                    <ul className="category_group">
                        {items.map(el =><li key={el.id} className="product">
                            {/* <a href="#"> */}
                                <div className="img">
                                    <img src={el.img} alt=""/>
                                </div>
                                <div className="bottom-title">
                                    {el.category_title}
                                </div>
                            {/* </a> */}
                        </li>)}
                    </ul>
                    : ''
                }
            </div>
        )
    }
}

export default CategoryView