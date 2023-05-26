import React, { useContext } from 'react'
import { contexto } from './CustomProvider'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

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
          <button className='eliminar' onClick={remove} ><FontAwesomeIcon className='iconTrash' icon={faTrash} beat /></button>
      </div>
      <hr></hr>
    </div>
  ) 
}

export default Carrito