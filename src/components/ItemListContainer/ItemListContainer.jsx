import React, { useEffect, useState } from 'react'
import { getProductByCategory, getProducts } from '../../data/asyncMock'
import ItemList from '../ItemList/ItemList'
import { Spinner, Box, Flex, Heading } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import LoaderComponent from '../LoaderComponent/LoaderComponent'

// Contenedor de los productos
// Traer la data,guardarla en un estado y pasarla a su hijo ItemList
const ItemListContainer = ({title}) => {
    const [data, setData] = new useState([])
    const {categoryId} = useParams()
    const [isLoading, setIsLoading] = useState(true) // estado para la img loading
    
    useEffect(() => {
        setIsLoading(true)
        if(categoryId) {
            getProductByCategory(categoryId)
                .then((prod) => setData(prod))
                .catch((err) => console.log(err))
                .finally(() => setIsLoading(false))
        } else {
            getProducts().then((prod) => {
            setData(prod)
            }).catch(err => console.log("Error en la promesa que actualiza los datos"))
            .finally(() => setIsLoading(false))
        }    
    }, [categoryId]) // cada vez que cambie el parametro se va a renderizar
    
    return (
        <Flex direction={'column'} justify={'center'}  align={'center'} m={4}>
            <Box>
            <Heading>{title}</Heading>
            <Heading>{categoryId && categoryId}</Heading>
            </Box>
            <LoaderComponent loading={isLoading}/>
            {!isLoading && <ItemList data={data} title={title} /> }
        </Flex>
      ) 
}

export default ItemListContainer