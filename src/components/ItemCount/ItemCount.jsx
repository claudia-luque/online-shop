import React, { useState } from 'react'
import useCounter from '../../hooks/useCounter'
import { Box, Button, Heading } from '@chakra-ui/react'

const ItemCount = ({initial, stock}) => {
    const {count, increment, decrement} = useCounter(initial, stock)

return (
    <Box>
       <Button colorScheme='blue' onClick={increment}>+</Button>
       <Heading>{count}</Heading>
       <Button colorScheme='blue' onClick={decrement}>-</Button>
    </Box>
)
}

export default ItemCount