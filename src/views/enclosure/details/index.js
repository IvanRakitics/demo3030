import React from "react";
import { useParams } from "react-router-dom";

import DetailsView from "./detailsView";
import StickyHeader from "../../../components/StickyHeader/index"



const Details = () =>{
    const params = useParams()

    
    return (<div id="details-box">
        <StickyHeader/>
        <DetailsView itemId = {params.id}/>

    </div>)
}

export default Details