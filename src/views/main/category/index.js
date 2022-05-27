import React, { useCallback, useEffect, useState } from "react";

import CategoryHeader from "./categoryHeader";
import CategoryTitle from "./categoryTitle";
import CategoryList from "./categoryList";

import axios from "axios";

const Category = () =>{

    const [categoryTitle,setCategoryTitle] = useState([])
    const [categoryItems,setCategoryItems] = useState([])
    const [categoryId,setCategoryId] = useState(-1)
    const [blockId,setBlockId] = useState(0)

    const updateCategoryId = useCallback(( index, block )=>{
          setCategoryId( index )
          setBlockId(block)
    },[])

    useEffect( ()=>{
      async function fetchData(){
        const { data } = await  axios({
          url:"http://127.0.0.1:8000/category/title",
          method:"get",
        })
       // console.log( data )
        setCategoryTitle(el => [...data])
      }
      fetchData()
      async function fetchCategoryList(){
        const { data } = await axios({
          url:"http://127.0.0.1:8000/category/list",
          method:"get",
        })
        console.log(data)
        setCategoryItems(el => [...data])
      }
      fetchCategoryList()
    },[])


    return(
        <div className="category-view">
          <CategoryHeader/>
          <CategoryTitle categoryTitle={categoryTitle} categoryId={categoryId} updateCategoryId={updateCategoryId}/>
          <CategoryList categoryItems={categoryItems} categoryId={categoryId} blockId={blockId}/>
        </div>
    )
}

export default Category