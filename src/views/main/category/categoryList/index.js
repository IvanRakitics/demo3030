import React, { useEffect } from "react";

import CategoryView from "./categoryView";
import "./style.css"

const CategoryList = ( props ) =>{

   const { categoryItems, blockId } = props

   useEffect(()=>{
       if(document.querySelector(`#category-list-${blockId}`)){
          document.querySelector(`#category-list-${blockId}`).scrollIntoView()
       }
   },[blockId])
   return(
        <div id="category-list">
            <div className="swiper-category-list"> 
                {categoryItems.length > 0 ? 
                    categoryItems.map((el, index) => (
                        <div id={`category-list-${el.block_id}`} key={index}>
                            {
                                el.details.length > 0 ?
                                el.details.map(item => (<div key={item.id} className="category-list">
                                    <CategoryView data={item}/>
                                </div>))
                                :''
                            }
                        </div>
                    ))
                : ''}
            </div>
        </div>
    )
}

export default CategoryList