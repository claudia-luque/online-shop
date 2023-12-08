import React, { useState } from 'react'
import useCounter from '../../hooks/useCounter'
import { Box, Button, Heading } from '@chakra-ui/react'

const ItemCount = ({initialValue, stock, onAdd}) => {
    const {count, increment, decrement} = useCounter(initialValue, stock)

return (
    <Box>
       <Button colorScheme='blue' onClick={increment}>+</Button>
       <Heading>{count}</Heading>
       <Button colorScheme='blue' onClick={decrement}>-</Button>
       <Button onClick={() => onAdd(count)}>Add to Cart</Button>
    </Box>
)
}

export default ItemCount