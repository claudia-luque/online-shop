import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';
import { Card, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, CardBody, CardFooter } from '@chakra-ui/react'

// muestra el resumen del producto
const Item = ({id, name, img, price}) => {

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
        <Heading size='md'color="#1F0F53">{name}</Heading>
        <Text color="black" fontWeight="bold" fontSize='2xl'>${price}</Text>
    </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
    <ButtonGroup spacing='2'>
        <Button variant='solid' bg='#FFDB99' _hover={{bg: '#e7a937'}}>
        <Link to={`/product/${id}`} > Ver detalle</Link>
        </Button>
    </ButtonGroup>
    </CardFooter>
    </Card>
)
}

export default Item