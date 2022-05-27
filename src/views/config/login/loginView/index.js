import React, { useState } from "react";
import axios from "axios";
import classNames from "classnames";

import validatorInput from "../../../../utils/validator";

import "./style.css"

const LoginView = (props) =>{

    const { loginHandle } = props

    const [uname,setUname] = useState("18502743855")
    const [upassword,setUpassword] = useState("zhou123456")
    const [tarErrors,setTarErrors] = useState({})
    
    async function loginCheckEvent(){

        var { isValid, errors } = validatorInput({
            uname, upassword
        })
        console.log(isValid)
        if(isValid){
            console.log(errors)
            setTarErrors(errors)
        }else{
            const { data, status } = await axios({
                url:"http://127.0.0.1:8000/login/check",
                method:"post",
                headers:{
                    "Content-Type":"application/json;charset=utf-8",
                    "Accept":"application/json"
                },
                data:{
                    uname:"ivan",
                    uphone:uname,
                    upassword:upassword
                }
            })
            console.log(data)
            if( status === 200 && data.check ){
                
                let user = {
                    token:data.token,
                    nick:data.nick,
                    id:data.id
                }
                setTarErrors({})
                loginHandle( user )
            }   
        }
    }

    const uNameChangeHandle = (e) =>{
        const { value } = e.target
        setUname( value )
    }

    const uPasswordChangeHandle = (e) =>{
        const { value } = e.target
        setUpassword( value )
    }

    function onSubmitHandle(e){
        e.preventDefault()
        loginCheckEvent()
    }

    return (

            <div id="login-container">
                <form onSubmit={onSubmitHandle}>
                    <div className={classNames('input-container',{'input-container-error':tarErrors.uname})}>
                        <i className=" iconfont icon-tablet"/>
                        <input
                            type="text"
                            placeholder="用户名/手机号"
                            value={uname}
                            onChange={uNameChangeHandle}
                        />
                    </div>
                    <div className={classNames('phone-container',{'input-container-error':tarErrors.upassword})}>
                        <i className="iconfont icon-key"/>
                        
                        <input 
                        type="text" 
                        placeholder="输入验证码"
                        value={upassword}
                        onChange={uPasswordChangeHandle}
                        />
                       <button>发送验证码</button>
                    </div>
                    <button className="btn-login"  onClick={onSubmitHandle}>登录</button>
                </form>
            </div>
    )
}

export default LoginView