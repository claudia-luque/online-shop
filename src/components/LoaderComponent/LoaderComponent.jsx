import React from 'react'
import { Spinner, Box, Text } from '@chakra-ui/react'

const LoaderComponent = ({loading}) => {
    if (loading) {
        console.log("Loading")
        return (
            <Box>
                <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
                />
                <Text>Loading...</Text> 
            </Box>
          )
    }

    return null

  
}

export default LoaderComponent