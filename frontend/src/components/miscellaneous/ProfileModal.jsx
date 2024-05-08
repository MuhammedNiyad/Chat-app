import { ViewIcon } from '@chakra-ui/icons'
import { Button, IconButton, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'

const ProfileModal = ({user, children}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    {children ? (<span onClick={onOpen}>{children}</span>)
    : (<IconButton className='flex' icon={<ViewIcon/>} onClick={onOpen}/>)}
    <Modal size='lg' isOpen={isOpen} onClose={onClose} isCentered> 
        <ModalOverlay />
        <ModalContent className='h-[410px]'>
          <ModalHeader className='text-[40px] font-["Work", "sans"] flex justify-center'>{user.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody className='flex flex-col justify-between items-center'>
              <Image className='rounded-full ' boxSize="150px" src={user.pic} alt={user.name}/>
              <Text className='text-2xl md:text-3xl font-["Work", "sans"]'>Email : {user.email}</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ProfileModal