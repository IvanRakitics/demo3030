import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import './style.css'

const Mine = () =>{

    const { user } = useSelector(state => state.login)
    console.log( user )

    return(
        <div>
          <header className="hd">
            <div className="hd-img">
               <img src="https://m.mi.com/static/img/avatar.76a75b8f17.png" alt=""/>
            </div>
            <div className="hd-name">
              <a href="/login">登录/注册</a>
            </div>
          </header>
          <div className="mine-order iconfont">
            <div className="order-cite">我的订单</div>
            <div className="order-all">全部订单</div>
          </div>
          <div className="b2">
            <ul className="mine-service justify-space-between align-center">
              <li className="service-box">
                <div className="service-icon">
                  <i className="iconfont icon-qianbao"></i>
                </div>
                <div className="service-title">
                  <span>待付款</span> 
                </div>
              </li>
              <li className="service-box">
              <div className="service-icon">
                  <i className="iconfont icon-wuliu"></i>
                </div>
                <div className="service-title">
                  <span>待收货</span> 
                </div>
              </li>
              <li className="service-box">
              <div className="service-icon">
                  <i className="iconfont icon-weixiu"></i>
                </div>
                <div className="service-title">
                  <span>退换修</span> 
                </div>
              </li>
            </ul>
          </div>
          <div className="mine-line">
            <ul>
              <li className="line-add">
                <i className="iconfont icon-dizhi"></i>
                <Link to="/shipping/address">地址</Link>
              </li>
              <li className="line-set">
                <i className="iconfont icon-setup_fill"></i>
                <a href="/main">设置</a>
              </li>
            </ul>
          </div>
          <div className="mine-line">

          </div>
        </div>
    )
}

export default Mine