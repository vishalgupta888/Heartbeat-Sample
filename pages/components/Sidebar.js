import {Stack } from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdKeyboardArrowDown  } from 'react-icons/md';
import { BsThreeDots  } from 'react-icons/bs';

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    UnorderedList,
    ListItem
  } from '@chakra-ui/react'
import { useRef } from 'react';



const Sidebar = () => {
const { isOpen, onOpen, onClose } = useDisclosure()
const btnRef = useRef()
  

  return (
      <Stack>
      <GiHamburgerMenu fontSize='1.4em' cursor={'pointer'} ref={btnRef} onClick={onOpen}/>
      <Drawer
        isOpen={isOpen}
        placement='left'
        blockScrollOnMount={false}
        size='xs'
        onClose={onClose}
        >
        <DrawerOverlay/>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader >HEARTBEAT</DrawerHeader>

          <DrawerBody>
          <UnorderedList direction='column' spacing='4' listStyleType='none' >
            <ListItem display={'flex'} alignItems='center' cursor={'pointer'}>DEMOS <MdKeyboardArrowDown fontSize={'2em'}/></ListItem>
            <ListItem display={'flex'} alignItems='center' cursor={'pointer'}>FEATURES <MdKeyboardArrowDown fontSize={'2em'}/></ListItem>
            <ListItem display={'flex'} alignItems='center' cursor={'pointer'}>POST <MdKeyboardArrowDown fontSize={'2em'}/></ListItem>
            <ListItem display={'flex'} alignItems='center' cursor={'pointer'}>CATEGORIES <MdKeyboardArrowDown fontSize={'2em'}/></ListItem>
            <ListItem display={'flex'} alignItems='center' cursor={'pointer'}>SHOP <MdKeyboardArrowDown fontSize={'2em'}/></ListItem>
            <ListItem display={'flex'} alignItems='center' cursor={'pointer'}>BUY NOW <MdKeyboardArrowDown fontSize={'2em'}/></ListItem>
            <ListItem display={'flex'} alignItems='center' cursor={'pointer'}><BsThreeDots fontSize={'1.8em'}/></ListItem>
          </UnorderedList>
          </DrawerBody>

          <DrawerFooter>
            
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      </Stack>
    
  )
}

export default Sidebar
