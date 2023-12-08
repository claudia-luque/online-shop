import React from 'react'
import pageNotFound from '../../assets/pageNotFound.jpg'
import { Box, Center, Image } from '@chakra-ui/react';

const PageNotFound = () => {
  return (
    <div>
        <Center>
            <Box>
                <img src={pageNotFound} width={'40%'} height="100" alt='pageNotFound'/>
            </Box>
        </Center>
    </div>
  )
}

export default PageNotFound