import React from 'react'
import { NavLink } from 'react-router-dom'

const Item = (id, nombre, precio, marca, img) => {


  return ( 
  <div>
    <div className='cart'>
      <div>
          <img className='imgCart' src={img} alt="..."/>
          <div className='ordButton'>
              <div>
                <h5>{nombre}</h5>
                <p>Precio:{precio}</p>
                <p>Marca: {marca}</p>
              </div>
              <NavLink to={ '/detail/ ${id}' } className='detailButton'>Detalle</NavLink>
          </div>
      </div>
    </div>
  </div>

)}

export default Item