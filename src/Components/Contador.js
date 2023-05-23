import React, { useState } from 'react'

const Contador = ({initial, stock, onAdd} ) => {

    const [contador, setContador] = useState (initial)

    const restar = () =>{
        setContador(contador - 1)
    }

    const sumar = () =>{
        setContador(contador + 1)
    }



  return (
    <div>
        
        <div className='aaaaa'>
            <button className='sumarRestar' disabled={ contador <= 1} onClick={restar}>Restar</button>
            <span className='conta'>{contador}</span>
            <button className='sumarRestar' disabled={contador >= stock } onClick={sumar}>Sumar</button>
        </div>
        <div className='finalizar'>
           <button className='btnFin' disabled={stock = 0} onClick={() => onAdd(contador)}>Agregar al carrito</button> 
        </div>
    
    </div>
  )
}

export default Contador