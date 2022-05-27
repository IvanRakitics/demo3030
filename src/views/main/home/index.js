import React from "react";

import TopNav from "../../../components/TopNav";
import Banner from "../../../components/Banner";
import HomeHotList from "./HomeHotList";

import { useSelector } from "react-redux";

const Home = () =>{

    const city = useSelector(state => state.city.city.name)

    return(
        <div>
           <TopNav city = { city }/>
           <Banner/>
           <HomeHotList/>
        </div>
    )
}

export default Home