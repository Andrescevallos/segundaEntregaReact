import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import Funkos from "../Funkos.json"
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

    const [array, setArray] = useState([])

const params = useParams()

console.log(params)


    useEffect(() =>{
        const efect = new Promise((res, rej) =>{
            setTimeout(() => {
                res(Funkos)            
            }, 2000);
        })
    
        .then((res) =>{
            setArray(res)
        })
        .catch((error)=>{
            console.log(error)
        })
    
    },[]) 

 
  return (
    <ItemList Funkos={array}/>
  )
}

export default ItemListContainer