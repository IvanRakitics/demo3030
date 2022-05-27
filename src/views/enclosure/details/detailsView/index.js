import React, { useEffect , useState } from "react";
import { Swiper, Toast } from 'antd-mobile'

import FooterBuy from "../../../../components/FooterBuy";
import BuyStyle from "../../buyStyle";

import axios from "axios";

import "./style.css"
import { useSelector } from "react-redux";

const DetailsView = ( props ) =>{

    const { itemId } = props

    const login = useSelector(state => state.login)

    console.log(login)

    const [flagShow,setFlagShow] = useState(false)
    const [itemImgs,setItemImgs] = useState([])
    const [itemData,setItemData] = useState({})
    const [handleType,setHandleType] = useState('')

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/item/details",{
            params:{
                items_id:itemId
            }
        }).then(res=>{
            const { data } = res
            console.log( data )
            setItemImgs( pre => data.item_imgs || [])
            setItemData( pre => data || {})
        })
        return ()=>{ 
            setItemImgs([])
            setItemData({})
        }
    },[])

    function changeBuyStyleShow(){
        setFlagShow(!flagShow)
    }

    function onClickHandleLeft(){
        changeBuyStyleShow()
        setHandleType("cart")
    }

    function onClickHandleRight(){
        changeBuyStyleShow()
        setHandleType("checkout")
    }
    return(
        <div id="item-details">
            <FooterBuy onClickHandleLeft = { onClickHandleLeft }  onClickHandleRight = { onClickHandleRight }  user = {login.user}/>
            <BuyStyle 
            flagShow = { flagShow } 
            user = {login.user} 
            productList={itemData.product_list}  
            cartImg={itemData.cart_img}
            data={itemData}
            itemid={itemId}
            closeClickHandle={changeBuyStyleShow}
            handleType={handleType}/>
            {
              itemImgs.length > 0 ?
              <div className='item-swiper-box'>
                <Swiper
                autoplay
                loop
                defaultIndex={0}
                >
                    {
                        itemImgs.map((el, index) => (
                            <Swiper.Item key={index}>
                                <div
                                className="content-box"
                                onClick={() => {
                                    Toast.show(`你点击了卡片 ${index + 1}`)
                                }}
                                >
                                <img src={el.item_img} alt=""/>
                                </div>
                            </Swiper.Item>
                        ))
                    }
               </Swiper>
               </div>
               : ''
            }
            <div className="top-price">
                <div className="float-left">
                      <h3><span className="title">预售价</span>
                      <span className="money-char">￥</span>
                      <span className="number">{ itemData.price }</span></h3>
                </div>
            </div>
            <div className="detials-title">
                {itemData.title}
            </div>
            <div className="pro-troduct">
                {
                    itemData.item_introducts && itemData.item_introducts.length > 0 ?
                    (
                        <ul>
                            {
                            itemData.item_introducts.map((el,index)=>(
                                <li key={index}>
                                    {el.item_introduct}
                                </li>
                            ))
                            }
                        </ul>
                    )
                    :''
                }
            </div>
        
        </div>
    )
}

export default DetailsView