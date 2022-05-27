import React from "react";

import Item from "./item";

const SearchView = ( props ) =>{

    const { items } = props

    return(
        <div>
            {items.map( ( el, index )=>(
                <Item key={ index } data = {el}/>
            ))}
        </div>
    )
}

export default SearchView