import React from 'react'
import Item from './Item'

const ItemList = ({Funkos}) => {



  return (
     <div>
     {Funkos.map (funk => <Item key={funk.id} {...funk}  />)}
     </div>
  )}


export default ItemList