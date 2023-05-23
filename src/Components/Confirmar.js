import React, { useContext,  useRef } from 'react'
import { contexto  } from './CustomProvider'
import { guardarVentas } from '../Utils'
import {serverTimestamp} from 'firebase/firestore'
import Swal from 'sweetalert2'
import { text } from '@fortawesome/fontawesome-svg-core'

const Confirmar = () => {

    const  {carrito, precioFinal, cantTotal}  = useContext( contexto )

    const nameRef = useRef()
    const apellidoRef = useRef()
    const numeroRef = useRef()
    const emailRef = useRef()


    const Finalizar = (e) =>{

        
        e.preventDefault()

        const nombre = nameRef.current.value
        const apellido = apellidoRef.current.value
        const numero = numeroRef.current.value
        const email = emailRef.current.value

        const venta ={ 
            user : {nombre,
                 apellido,
                  numero,
                   email  },
            Total : `$${precioFinal()}`,
            cantidad : cantTotal(),
            fecha : serverTimestamp() ,
            productos : {carrito}
        }
            


            console.log(carrito)
            console.log(venta)
 

        guardarVentas(venta)
            .then((id) =>{
                console.log("id de la venta: " +   id)
                Swal.fire(
                    {
                        icon: 'success',
                        title: 'Compra realizada con exito',
                        text: `Tu comproprobante es ${id}`
                    }
                )
            })

            console.log(venta.id)



}




return (
        <div>
        <form  className='ordInput'>
            <div className='ordInput'>
                <label>Nombre</label>
                <input ref={nameRef} type='text' /> 
            </div>

            <div className='ordInput'>
                <label>Apellido</label>
                <input ref={apellidoRef} type='text'/> 
            </div>

            <div className='ordInput'>
                <label>Telefono</label>
                <input ref={numeroRef} type='text'/> 
            </div>

            <div className='ordInput'>
                <label>Email</label>
                <input ref={emailRef} type='email'/> 
            </div>

            <button onClick={Finalizar} className='btnFinalizar'>Finalizar compra</button>
        </form>

        </div>
)
}

export default Confirmar

