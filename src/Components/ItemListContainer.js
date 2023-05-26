import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { getProductos } from "../Utils";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'



const ItemListContainer = () => {

const [array, setArray] = useState([])

const {marca} = useParams()


    useEffect(() =>{
        getProductos()
        .then((res) =>{
            if(marca){
                setArray(res.filter((item)=> item.marca === marca))
               }else{
                setArray(res)
               }
    })

    
    },[marca]) 

    // console.table(array)
    if(array.length=== 0){
      return(
        <div className='cargando'>
            <p>Cargando...</p>
        </div>
      )
    }
 
  return (
    <div className="main">    
      <ItemList  Funkos={array}/>
      <a className='flecha' href='#flecha'><FontAwesomeIcon className='fontFlecha' icon={faArrowUp} /></a>


  </div>
  )
}

export default ItemListContainer


