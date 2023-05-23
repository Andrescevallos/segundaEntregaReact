import React, { useContext } from 'react'
import { contexto } from './CustomProvider'


const Carrito = (funko) => {

  const { eliminarDelCarrito } = useContext(contexto)

  const remove = () =>{
    eliminarDelCarrito(funko.id)
  }


  return (
    <div className='carritoCart'>
        <div className='carritoOrd'>
          <img src= {funko.img} className="imgFunkosCarrito" alt="..." />
          <div className='divCarrito'>
            <p  className='textTitulo'>Nombre</p>
            <span className='textCarrito'>{funko.nombre}</span>
          </div>
          <div className='divCarrito'>
            <p>Precio</p>
            <span className='textCarrito'>{funko.precio}</span>
          </div>
          <div className='divCarrito'>
            <p>Cantidad</p>
            <span className='textCarrito'>{funko.cantidad} </span>
          </div>
          <div className='divCarrito'>
            <p>Total {funko.nombre}</p>
            <span className='textCarrito'> {funko.cantidad * funko.precio}</span>
          </div>     
          <button onClick={remove} >Eliminar</button>
      </div>
      <hr></hr>
    </div>
  ) 
}

export default Carrito