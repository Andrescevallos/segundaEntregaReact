import React, { useContext, useEffect, useState } from 'react'
import { contexto } from './CustomProvider'
import { Link } from 'react-router-dom'
import CarritoItem from './CarritoItem'
import { imgNec } from '../Utils'

const CarritoList = () => {

    const {carrito, precioFinal, clear } = useContext(contexto)

    const [imagen, setImagen] = useState([])    

useEffect(() =>{
    imgNec()
    .then((res) =>{
        setImagen(res)
        console.log(imagen)
    })
})

    const limpiarCarrito = () =>{
        clear()
    }


    if(carrito.length === 0){
        return (
                <div className='empty'>
                    <span>No hay Productos</span>
                    <Link to="/" >Ir a Home</Link>

                    <div className='carts'>

                </div>
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