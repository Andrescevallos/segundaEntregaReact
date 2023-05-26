import React, { useState } from 'react'
import { createContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
        toast('Funko Añadido al Carrito!', {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }

    const clear = () => { 
        setCarrito ([]) 
        toast('No hay productos en el carrito :(', {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            }); 
    }

    const eliminarDelCarrito = (id) =>{
        setCarrito(carrito.filter(funko => funko.id !== id))  
        toast('Funko eliminado!', {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
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
        <ToastContainer />
    </Provider>
  )
}

export default CustomProvider