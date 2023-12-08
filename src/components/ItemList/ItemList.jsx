import React from 'react'
import Item from '../Item/Item'
import { Box, Flex } from '@chakra-ui/react'

const ItemList = ({data}) => {

  return (
    <Flex flexWrap="wrap" justifyContent="space-around">
        {
         data.map((product) => (
            <Box key={product.id}>
                <Item {...product}/>
            </Box>
         ))
        }
    </Flex>
  )
}

export default ItemList