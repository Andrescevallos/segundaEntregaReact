import React, { useEffect, useState } from 'react'
import Item from './Item'
import { useParams } from 'react-router-dom'
import Funkos from "../Funkos.json"



const ItemDetailContainer = () => {

  const [array, setArray] = useState([])

  const {id} = useParams()
  
  
  
      useEffect(() =>{
          const efect = new Promise((res, rej) =>{
              setTimeout(() => {
                  res(Funkos)            
              }, 2000);
          })
      
          .then((res) =>{
              if(id){
                  setArray(res.filter((item) => item.id === id))
              } else{
                  setArray(res)
              }
          })
          .catch((error)=>{
              console.log(error)
          },[])
      
      }) 
      
  return (
      <div>
        <Item Funkos= {array} />

      </div>
  )
}

export default ItemDetailContainer