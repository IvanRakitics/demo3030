import React from "react";
import { useDispatch } from "react-redux";

import * as  loginActions from "../../../redux/actions/login";

import LoginView from "./loginView";

const Login = () =>{

    const dispatch = useDispatch()

    function loginHandle(user){
        dispatch(loginActions.setLogin(user))
        window.history.back()
    }

    return (<>
              <LoginView loginHandle={loginHandle}/>
        </>)
}

export default Login