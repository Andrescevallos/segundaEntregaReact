import React from 'react'

const Item = (Funkos) => {


  return (
    <div>
      {Funkos.map(Funkos =>{
        return(
        <div className='cart'>
          <div>
              <img className='imgCart' src={Funkos.img} alt="..."/>
              <div className='ordButton'>
                  <div>
                    <h5>{Funkos.nombre}</h5>
                    <p>Precio:{Funkos.precio}</p>
                    <p>Marca: {Funkos.marca}</p>
                  </div>
              </div>
          </div>
      </div>
        )

      })}
    </div>
  )
}

export default Item