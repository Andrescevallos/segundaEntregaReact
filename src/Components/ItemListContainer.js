import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import Funkos from "../Funkos.json"
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

    const [array, setArray] = useState([])

const {marca} = useParams()




    useEffect(() =>{
        const efect = new Promise((res, rej) =>{
            setTimeout(() => {
                res(Funkos)            
            }, 2000);
        })
    
       efect.then((res) =>{
           if(marca){
            setArray(res.filter((item)=> item.marca === marca))
           }else{
            setArray(res)
           }
        })
        .catch((error)=>{
            console.log(error)
        })
    
    },[marca]) 
console.log(array)
 
  return (
    <ItemList Funkos={array}/>
  )
}

export default ItemListContainer