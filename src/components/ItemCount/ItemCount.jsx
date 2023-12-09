import React, { useState } from 'react'
import useCounter from '../../hooks/useCounter'
import { Box, Button, Heading } from '@chakra-ui/react'

const ItemCount = ({initialValue, stock, onAdd}) => {
    const {count, increment, decrement} = useCounter(initialValue, stock)

return (
    <Box display="inline-flex" alignItems="center">
       <Button backgroundColor='#1F0F53' _hover={{ backgroundColor: '#2d0f8d', }} color="white"  onClick={increment} marginRight="2">+</Button>
       <Heading marginRight="2">{count}</Heading>
       <Button backgroundColor='#1F0F53' _hover={{ backgroundColor: '#2d0f8d', }} color="white" onClick={decrement} marginRight="2">-</Button>
       <Button backgroundColor='#FFDB99' _hover={{backgroundColor: '#e7a937'}} onClick={() => onAdd(count)}>Add to Cart</Button>
    </Box>
)}

export default ItemCount