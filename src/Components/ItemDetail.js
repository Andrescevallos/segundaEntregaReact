import React from 'react'

const ItemDetail = ({id, nombre, precio, marca, img}) => {
  return (
    <div>
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
          </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default ItemDetail