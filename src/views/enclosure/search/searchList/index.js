import React from "react";

import SearchView from "../searchView";



const SearchList = ( props ) =>{

    const { items } = props

    return(
        <>
            {
                items.length > 0 ?
                <SearchView items = {items}/>
                : ''
            }
            
        </>
    )
}

export default SearchList