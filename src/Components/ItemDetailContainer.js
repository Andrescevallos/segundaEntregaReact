import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Funkos from "..Funkos.json/"
import ItemDetail from './ItemDetail'



const ItemDetailContainer = () => {

  const [array, setArray] = useState(null)

  const {itemId} = useParams()

  const buscar = (funkId) =>{
    new Promise((res) =>{
      setTimeout(() => {
          res(Funkos.find(funk=> funk.id === funkId))            
      }, 500);
  })
    
  }
  
  useEffect(() =>{

      buscar(Funkos.id)
          .then((res) =>{
                  setArray(res)
              }
          )
          .catch((error)=>{
              console.log(error)
          },[itemId])
      
      }) 

      
  return (
      <div>
        <ItemDetail {...array}  />

      </div>
  )
}

export default ItemDetailContainer