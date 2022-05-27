import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import './style.css'



const TopInput = ( ) =>{

    const [keyword,setKeyword] = useState('')
    const location = useLocation()

    //页面跳转之后，输入框数据赋值 来源页面输入框数据
    useEffect(()=>{
          const { state } = location
          if( state ){
            setKeyword( state.keyword )
          }
    },[])

    const navigate = useNavigate()
    

    function onInputChange(e){
        const { value } = e.target
        setKeyword( value )
    } 
   
    function onKeydownChange(e){
            const { keyCode } = e
            if( keyCode === 13 && keyword.trim().length !== 0 ){
                navigate('/search',{
                    state:{ keyword }
                })
            }
    }
    return(
            <input 
            className='top-input' 
            type="text"
            value={keyword}
            onChange={onInputChange}
            onKeyUp={onKeydownChange}
            />
    )
}

export default TopInput