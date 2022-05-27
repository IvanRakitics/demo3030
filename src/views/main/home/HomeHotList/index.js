import React, { useEffect , useState } from "react";

import HomeHotView from "../HomeHotView";

import axios from "axios";

const HomeHotList = () =>{

    const [views,setViews] = useState([])
    const [hot,setHot] = useState([])

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/hot1/").then((res)=>{
            const { data } = res
            if( data ) setViews( data )
        })
    },[])
    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/hot2/").then((res)=>{
            const { data } = res
            if( data ) setHot( data )
        })
    },[])
    return (
        <div>
            {
                views.length > 0 ?
                <HomeHotView data = {views} title = {"热门商品"}/>:
                null
            }
            {
                hot.length > 0 ?
                <HomeHotView data = {hot} title = {"新品推荐"}/>:
                null
            }
        </div>
    )
}

export default HomeHotList