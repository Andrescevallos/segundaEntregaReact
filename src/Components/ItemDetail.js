import React, { useContext, useRef, useState } from 'react'
import Contador from './Contador'
import { Link } from 'react-router-dom'
import { contexto } from './CustomProvider'

const ItemDetail = (array) => {


  const { agregarAlCarrito } = useContext(contexto)

  const [terminar, setTerminar] = useState(false)




  const onAdd = (cantidad) =>{
    setTerminar(true)
    agregarAlCarrito(array, cantidad)
  }
  return (
      <div className='detail'>
        <div className='divImg'>

          <img className='imgDetail' src={array.img} alt="..."/>          
        </div>

        <div className='divDesc'>
          <div className='textDetail'>
            <p>Nombre: {array.nombre}</p>
            <p>Precio:{array.precio}</p>
            <p>Marca: {array.marca}</p>
          </div> 

          <div className='desc'>
            <span > {array.desc} </span>
          </div>
          
          <div className='btnTerm'>
                {
                  terminar 
                  ? <div className='linkFin'>
                      <Link to={"/CarritoList"}  > Filalizar compra</Link>
                      <Link to={"/"}  > Continuar comprando</Link>
                    </div> 
                    
                  : <Contador  initial = {1} stock = {10} onAdd ={onAdd}  />
                  
                }
          </div>
        </div>
      </div>
  )
}

export default ItemDetail