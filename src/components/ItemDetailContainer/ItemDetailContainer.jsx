import React, { useEffect, useState } from 'react'
import { getProductById } from '../../data/asyncMock'
import { useParams } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react'
import ItemDetail from '../ItemDetail/ItemDetail';

// Obtiene la informacion de un producto
const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]) // inicializando con un objet vacio
    const [isLoading, setIsLoading] = useState(true)
    // Access the parameters from the current route
    const {itemId} = useParams()

    useEffect(() => {
        setIsLoading(true)
        getProductById(itemId).then((prod) => {
            setProduct(prod)
        }).catch((err) => console.log(err)).finally(() => setIsLoading(false))
    }, [itemId])

  return (
    <div>
        {isLoading ? <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
            /> : <ItemDetail {...product}/> }
    </div>
  )
}

export default ItemDetailContainer