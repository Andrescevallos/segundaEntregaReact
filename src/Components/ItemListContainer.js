import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { getProductos } from "../Utils";



const ItemListContainer = () => {

const [array, setArray] = useState([])

const {marca} = useParams()


    useEffect(() =>{
        getProductos()
        .then((res) =>{
            if(marca){
                setArray(res.filter((item)=> item.marca === marca))
               }else{
                setArray(res)
               }
    })

    
    },[marca]) 

    // console.table(array)
    
 
  return (
    <div className="main">    
      <ItemList  Funkos={array}/>
  </div>
  )
}

export default ItemListContainer


