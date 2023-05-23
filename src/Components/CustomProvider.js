import React, { useState } from 'react'
import { createContext } from "react";
export const contexto = createContext()
const { Provider } = contexto


const CustomProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])

    const agregarAlCarrito = (item, cantidad) =>{
        let  nuevo
        let  encontrado = carrito.find(funko => funko.id === item.id)
        if(encontrado){
            encontrado.cantidad += cantidad   
            nuevo = [...carrito]        
        }
        else{
            nuevo = [...carrito, {...item , cantidad: cantidad}]    
        } 
        setCarrito(nuevo)
    }

    const clear = () => { 
        setCarrito ([])  
    }

    const eliminarDelCarrito = (id) =>{
        setCarrito(carrito.filter(funko => funko.id !== id))  
    }
 
    const precioFinal = () =>{
         return carrito.reduce((a, valor) => a + valor.cantidad + valor.precio, 0)          
    }

    const cantTotal = () =>{ 
        return carrito.reduce((a, valor) => a + valor.cantidad, 0)
    } 

   
        
    // }
    return (
    <Provider value = {{
        clear,
        eliminarDelCarrito,
        agregarAlCarrito,
        carrito,
        precioFinal,
        cantTotal

}
    } >
        {children}
    </Provider>
  )
}

export default CustomProvider