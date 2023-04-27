import { Box, Flex, Image ,Text} from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/openai.png'
const Footer = () => {
  return (
    <Box marginTop="auto" >
        <Flex justifyContent="center"  alignItems={'center'}>
            <Image src={logo} marginRight={1}/>
            <Text>Powered by open ai</Text>
        </Flex>
    </Box>
  )
}

export default Footer