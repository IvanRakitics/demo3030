import React from "react";
import classNames from "classnames";


import "./style.css"

const CategoryTitle = ( props ) =>{

    const {  categoryTitle, categoryId, updateCategoryId } = props

    function onClickHandle( index, block_id ){
        updateCategoryId(index, block_id)
    }

    return(
        <div id="category-title">
            {
            categoryTitle.length > 0 ? 
            <ul className="list-ul">
                {categoryTitle.map(el =>(
                    <li key={el.block_id} onClick={()=>{onClickHandle(el.category_id, el.block_id)}} className={classNames({"list-navbar":el.category_id !== categoryId, "nav-select":el.category_id === categoryId})}>
                        <span>{el.category_name}</span>
                    </li>
                ))}
            </ul>
            :''}
            
        </div>
    )
}

export default CategoryTitle