import React, { useContext, useState } from 'react'
import { contexto } from './CustomProvider'
import { Link } from 'react-router-dom'
import CarritoItem from './CarritoItem'
import funko from '../Funkos'

const CarritoList = () => {

    const {carrito, precioFinal, clear } = useContext(contexto)


    const limpiarCarrito = () =>{
        clear()
    }

    if(carrito.length === 0){
        return (
                <div className='empty'>
                    <span>No hay Productos en el carrito</span>
                    <Link className='linkEmpty' to="/" >Ir a Home</Link>
                </div>
                
  )}  
    return(
        <>
            {
                carrito.map(funk => <CarritoItem key={funk.id} {...funk} />)
            }
            <div className='divClear'>
                <button className='btnClear' onClick={limpiarCarrito}>Vaciar Carrito</button>
                <span className='textClear'>Total compra: ${precioFinal()}</span>
                <Link className='btnClear' to={"/Confirmar"} >Ultimo pasito</Link>


            </div>
        </>
        
    )
}

export default CarritoList