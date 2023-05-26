import { db } from  './firebase'
import { Query, addDoc, collection, getDocs, where } from 'firebase/firestore'

export const getProductos =  () =>{

    const productosCollection = collection (db, "Productos")

    return  getDocs(productosCollection) 
                .then((respuesta) =>{

                const arrayDeDocumentos = respuesta.docs

                const resultado = arrayDeDocumentos.map((documento) =>{
                    const id = documento.id                    
                    const data = documento.data()
                    data.id = id
                    return data
                })

                return resultado
            })

            .catch((error) =>{
                console.log("Hubo un error pidiendo los productos")
            })

        
    }





export const guardarVentas = (venta) =>{
    const ventasCollection = collection(db, "Ventas")
    return  addDoc(ventasCollection, venta)
    .then((res) =>{
        return res.id
    })
    .catch((error)=>{
        console.log(error)
    })
} 


