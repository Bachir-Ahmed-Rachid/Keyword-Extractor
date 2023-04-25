import React, { useState } from 'react'
import { Box ,Container,SimpleGrid,Grid,GridItem, Flex } from '@chakra-ui/react'
import Header from './components/header';
import Footer from './components/footer'
import TextInput from './components/textInput';
import KeywordsModal from './components/keywordsModal';
const App = () => {
  const [loading, setLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [keywords, setKeywords] = useState(false)
  const extractKeywords=async(text)=>{
    setLoading(true)
    setIsOpen(true)
    const option={
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        Authorization:`Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
      },
      body:JSON.stringify({
        "model": "text-davinci-003",
        "prompt": `Extract keywords from this text.Make the first letter of each word uppercase and separate with commas \n\n ${text} `,
        "max_tokens": 60,
        "temperature": 0.5,
        "presence_penalty":2

      })
    }
    const response=await fetch(import.meta.env.VITE_OPENAI_API_URL,option)
    const json= await response.json()
    const data=json.choices[0].text.trim()
    console.log(data)
    setKeywords(data)
    setLoading(false)
}
const onClose=()=>{
  setIsOpen(false)

}
  return (

    <Box  bg='black' w='100%' h={'100vh'} p={4} color='white' paddingTop={130}>

        <Flex flexDirection={'column'} alignItems={'center'} height={'100%'}>
        <Header/>
        <TextInput extractKeywords={extractKeywords}/>
        <Footer/>
        </Flex>
        <KeywordsModal onClose={onClose} loading={loading} keywords={keywords} isOpen={isOpen}/>
    </Box>

  )
}

export default App