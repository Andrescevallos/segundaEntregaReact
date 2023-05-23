import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, marca, img}) => {


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
                <Link to={ `/detail/${id}` } className='detailButton'>Detalle</Link>
              </div>
              
          </div>
      </div>
    </div>
  </div>

)}

export default Item