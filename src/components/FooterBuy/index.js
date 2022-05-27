import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./style.css"

const FooterBuy = ( props ) =>{

    const { onClickHandleLeft, onClickHandleRight, user } = props

    const Navigate = useNavigate()

    function  onButtonClickLeft(e){
         e.preventDefault()
         if( user.token && user.nick){
            onClickHandleLeft()
         }else{
            Navigate("/login")
         }
    }

    function  onButtonClickRight(e){
        e.preventDefault()
        if( user.token && user.nick){
            onClickHandleRight()
        }else{
           Navigate("/login")
        }
   }

    return (<footer className="footer-buttom">
        <div className="collection-box">
            <div className="link-box">
                <ul>
                    <li className="char-box">
                        <Link to="/main/home">
                            <i className="iconfont icon-home-buy"></i>
                            <span>首页</span>
                        </Link>
                    </li>
                    <li className="char-box">
                        <Link to="/main/home">
                            <i className="iconfont icon-service-buy"></i>
                            <span>客服</span>
                        </Link>
                    </li>
                    <li className="char-box">
                        <Link to="/main/service">
                            <i className="iconfont icon-cart-buy"></i>
                            <span>购物车</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="action-box">
                   <div className="action-button">
                        <a className="action-left" href="/#" onClick={ onButtonClickLeft } >加入购物车</a>
                        <a className="action-right" href="/#" onClick={ onButtonClickRight } >立即购买</a>
                  </div>
            </div>
        </div>
    </footer>)
}

export default FooterBuy