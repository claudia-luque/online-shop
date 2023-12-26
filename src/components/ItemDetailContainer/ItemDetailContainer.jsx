import React, { useEffect, useState } from 'react'
import { getProductById } from '../../data/asyncMock'
import { useParams } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react'
import ItemDetail from '../ItemDetail/ItemDetail';
import LoaderComponent from '../LoaderComponent/LoaderComponent'

// Obtiene la informacion de un producto
const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]) // inicializando con un objet vacio
    const [isLoading, setIsLoading] = useState(true)
    // Access the parameters from the current route
    const {itemId} = useParams()
    console.log("here")
    useEffect(() => {
        setIsLoading(true)
        getProductById(itemId).then((prod) => {
            setProduct(prod)
        }).catch((err) => console.log(err)).finally(() => setIsLoading(false))
    }, [itemId])

  return (
    <div>
        {isLoading ? <LoaderComponent loading={isLoading}/>
        : <ItemDetail {...product}/> }
    </div>
  )
}

export default ItemDetailContainer