import React from 'react'
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import image from '../assets/light-bulb.svg'
const Header = () => {
  return (
    <>
  
      <Image  boxSize='150px' src={image} alt='lamp' marginBottom='1rem'/>
      <Heading marginBottom='1rem'>Ai keyword extractor</Heading>
      <Text fontSize={25} textAlign={'center'}>
        Past in your text below and we will extract keywords for you
      </Text>
     
     
    </>
  )
}

export default Header