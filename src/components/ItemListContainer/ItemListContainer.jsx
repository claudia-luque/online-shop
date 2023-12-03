import React, { useEffect, useState } from 'react'
import { getProducts } from '../../data/asyncMock'
import ItemList from '../ItemList/ItemList'

// Contenedor de los productos
// Traer la data,guardarla en un estado y pasarla a su hijo ItemList
const ItemListContainer = ({title}) => {
    const [data, setData] = new useState([])

    useEffect(() => {
        getProducts().then((prod) => {
            setData(prod)
        }).catch(err => console.log("Error en la promesa que actualiza los datos")) // review this to handle errors better
    }, []) // se deja vacio porque queremos que se renderize solo una vez
    
    return (
        <div>
            <span>{title}</span>
            <ItemList data={data}/>
        </div>
      ) 
}

export default ItemListContainer