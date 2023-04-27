import { Button, Container, Textarea, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'

const TextInput = ({extractKeywords}) => {
    const [text, setText] = useState()
    const toast=useToast()
    const submitText=()=>{
        if(text===''){
            toast({
                title: 'Text field is empty.',
                description: "Please enter some text to extract keywords.",
                status: 'error',
                duration: 5000,
                isClosable: false,
              })
        }else{
          extractKeywords(text)      
          }

    }
  return (
    <Container w={'3xl'}>
         <Textarea
         bg='black'
            value={text}
            marginTop={6}
            color={'white'}
            onChange={e=>setText(e.target.value)}
            height='200'
            
          />
          <Button
            color={'white'}
            bg={'blue'}
            marginTop={3}
            width={'100%'}
            _hover={{bg:'blue.700'}}
            onClick={submitText}
          > Extract keywords</Button>
    </Container>
  )
}

export default TextInput