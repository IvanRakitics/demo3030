import React, { useEffect, useRef } from 'react'

import './style.css'

const LearnMore = ( props ) =>{

    const { onLoadMore } = props

    const more = useRef();
    let timer = null;

    useEffect(()=>{

        const winHeight = document.documentElement.clientHeight;

        function scrollEvent(){
            if( more.current ){
                if( winHeight > more.current.getBoundingClientRect().top  ){
                      if( !timer ){
                           timer = setTimeout(()=>{
                                onLoadMore()
                                timer = null
                           },300)
                      }
                }
            }
        }

        window.addEventListener("scroll",scrollEvent)
        return ()=>{
            console.log("clear")
            window.removeEventListener("scroll",scrollEvent)
            clearTimeout(timer)
        }
    },[])

    return(<div className='load' ref ={more}>
           加载更多···
    </div>)
}

export default LearnMore