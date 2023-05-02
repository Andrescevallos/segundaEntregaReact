import React from 'react'
import { NavLink } from 'react-router-dom'

const ItemList = ({Funkos}) => {
  

  return (
    <div className='carts'>
      {Funkos.map(Funkos =>{
        return(
        <div className='cart'>
          <div>
              <img className='imgCart' src={Funkos.img} alt="..."/>
              <div className='ordButton'>
                  <div>
                    <h5>{Funkos.nombre}</h5>
                    <p>Precio:{Funkos.precio}</p>
                    <p>Marca: {Funkos.marca}</p>
                  </div>
                  <NavLink to={"/detail/" + Funkos.id} className='detailButton'>Detalle</NavLink>
              </div>
          </div>
      </div>
        )

      })}
    </div>
  )}


export default ItemList