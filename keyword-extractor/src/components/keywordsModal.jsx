import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text,
    Spinner,
    Flex,
  } from '@chakra-ui/react'
const KeywordsModal = ({isOpen,keywords,loading,onClose}) => {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
    <ModalContent>
      <ModalHeader>Keywords</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        {loading?(
            <Flex justifyContent={'center'} alignItems={'center'}>
                <Spinner />
            </Flex>
        ):(
        <Text>{keywords}</Text>
        )}
      </ModalBody>
      <ModalFooter>
        <Button onClick={onClose}>Close</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
  )
}

export default KeywordsModal