import React, { useContext } from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { contexto } from './CustomProvider'


const CartWidget = () => {

  const {cantTotal} = useContext(contexto)

  return (
    <div className='cartW'>
        <Link to= {"/CarritoList"} ><FontAwesomeIcon className='iconCarrito' icon={faCartShopping} /></Link>
        <p className='textCartW'>{cantTotal()}</p>
    </div>
  )
}
export default CartWidget