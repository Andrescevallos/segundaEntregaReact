import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Funkos from "../Funkos.json"
import ItemList from './ItemList'



const ItemDetailContainer = () => {

      
  return (
      <div>
        <ItemList  />

      </div>
  )
}

export default ItemDetailContainer