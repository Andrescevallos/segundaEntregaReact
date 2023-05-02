import React from 'react'
import Item from './Item'

const ItemList = ({Funkos}) => {



  return (
     <div className='carts'>
     {Funkos.map (funk => <Item key={funk.id} {...funk}  />)}
     </div>
  )}


export default ItemList