import React, { useEffect, useState } from 'react'
import { Swiper, Toast } from 'antd-mobile'

import axios from 'axios'

import  './style.css'



const Banner = () => {
  
  const [pictures,setPicture] = useState([])


  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/pictures').then((res)=>{
         const { data } = res
         setPicture(data)
    }).catch((error)=>{
         console.log(error)
    })
  },[])
 
  return (
    <>
  {
    pictures.length > 0 ?
    <div className='swiper-box'>
       <Swiper
       autoplay
       loop
       defaultIndex={0}
       >
       {
          
          pictures.map((item, index) => (
              <Swiper.Item key={item.id}>
                <div
                  className="content"
                  onClick={() => {
                    Toast.show(`你点击了卡片 ${index + 1}`)
                  }}
                >
                  <img src={item.img} alt="" className='img-box'/>
                </div>
              </Swiper.Item>
            ))
     }
       </Swiper>
    </div>:
    null
  }
  </>
  )
    
}
export default Banner