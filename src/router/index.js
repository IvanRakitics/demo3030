import React from "react";
import {BrowserRouter as Router,Routes,Route ,Navigate} from "react-router-dom";


import Home from "../views/main/home";
import Service from "../views/main/service";
import Mine from "../views/main/mine";
import City from "../views/enclosure/city/index";
import Search from "../views/enclosure/search/index";
import Details from "../views/enclosure/details";
import Login from "../views/config/login";
import Category from "../views/main/category/index"
import Address from "../views/config/address";
import AddressUpdate from "../views/config/updateAddress";
import CheckOut from "../views/enclosure/checkout";

import ButtomNav from "../components/BottomNav";


const MyRouter = () =>{

    return(
        <Router>
            <Routes>
                <Route path="/city" element={<City/>}></Route>
                <Route path="/search" element={<Search/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/shipping/address" element={<Address/>}></Route>
                <Route path="/address/update" element={<AddressUpdate/>}></Route>
                <Route path="/checkout/:id" element={<CheckOut/>}></Route>
                <Route path="/details/:id" element={<Details/>}></Route>
                <Route path="/main" element={<ButtomNav/>}>
                    <Route path="mine" element={<Mine/>}></Route>
                    <Route path="category" element={<Category/>}></Route>
                    <Route path="service" element={<Service/>}></Route>
                    <Route path="home" element={<Home/>}></Route>
                    <Route index element={<Home/>}></Route>
                </Route>
                <Route path="*" element={<Navigate to="/main" />} />
            </Routes>
        </Router>
    )
}

export default MyRouter