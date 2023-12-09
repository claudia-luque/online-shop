import React from 'react'
import { Card, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, CardBody, CardFooter } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react'

const ItemDetail = ({category, description, img, name, price, id, stock}) => {
    const [quantity, setQuantity] = useState(0)

    const onAdd = (quantity) => {
        setQuantity(quantity)
        console.log(`Agregaste ${quantity} productos`)
    }

  return (
    <Card maxW='sm' >
    <CardBody>
    <Image
        src={img}
        alt={name}
        borderRadius='lg'
        boxSize='100%'
        objectFit='cover' 
        h='400px' 
    />
    <Stack mt='6' spacing='3'>
        <Heading size='md'>{name}</Heading>
        <Text color='black' fontSize='2x1'>{description}</Text>
        <Text color="black" fontWeight="bold" fontSize='2xl'>${price}</Text>
    </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
        {quantity > 0 ? 
            <Link to={`/cart`}><Button ackgroundColor='#FFDB99' _hover={{backgroundColor: '#e7a937'}}>Ir al carrito</Button></Link> : 
            <ItemCount initialValue={1} stock={stock} onAdd={onAdd}/>}
    </CardFooter>
    </Card>
  )
}

export default ItemDetail