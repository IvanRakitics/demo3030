import React, { useCallback, useEffect, useState } from 'react'

import axios from "axios";

import SearchList from './searchList'
import SearchHeader from './searchHeader'
import LearnMore from '../../../components/LearnMore'



const Search = () =>{

    const startIndex = { value : 0 }

    const [items,setItems] = useState([])
    const [exitMore,setExitMore] = useState(true)


    function loadMoreHandle(){

            axios.get("http://127.0.0.1:8000/items/",
            {
                params:{
                    startindex:startIndex.value,
                    items_length:2
                }
            }
            ).then((res)=>{
                const { data } = res
                if( data ){                
                    let exitMore = data.exit_more || false
                    let houseList = data.house_list || []

                    startIndex.value = Math.max.apply(Math,houseList.map(el=>Number(el.id)))

                    setItems( pre =>[...pre,...houseList])
                    setExitMore( exitMore )
                } 
            })
    }
    //加载记录之后执行加载图片数据
    useEffect(()=>{
        loadMoreHandle()
        return ()=>{  setItems([]) }
    },[])

    const onLoadMore = useCallback(()=>{
        return loadMoreHandle()
    },[])
    return(
        <div>

            <SearchHeader/>
            <SearchList items = {items}/>
            {
                exitMore ?
                <LearnMore onLoadMore = { onLoadMore } /> :
                ''
            }
            
        </div>
    )
}

export default Search