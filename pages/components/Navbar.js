import { Flex, ListItem, Stack, UnorderedList } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BsSun,BsThreeDots } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdKeyboardArrowDown,MdOutlineShoppingBag } from 'react-icons/md';
import Sidebar from './Sidebar';


const Navbar = () => {
  const [show, setShow] = useState(true)
  const controlNavbar = () => {
      if (window.scrollY > 100) {
          setShow(false)
      } else {
          setShow(true)
      }
  }

  useEffect(() => {
      window.addEventListener('scroll', controlNavbar)
      return () => {
          window.removeEventListener('scroll', controlNavbar)
      }
  }, [])
  return (
    <Stack w='100%' display='flex' flexDirection='row' align='center' justify='space-between'>
      
      
        <Flex as='nav'>
        
        <Sidebar />

          <UnorderedList display={['none','none','none','none','flex']}  alignItems='center' ml={['60px','80px', '70px','140px']} fontSize='0.75em' fontWeight='bold' justifyContent='space-between' w={['35vw','55vw','55vw','43vw',]} listStyleType='none' >
            <ListItem display={'flex'} alignItems='center' cursor={'pointer'}>DEMOS <MdKeyboardArrowDown fontSize={'2em'}/></ListItem>
            <ListItem display={'flex'} alignItems='center' cursor={'pointer'}>FEATURES <MdKeyboardArrowDown fontSize={'2em'}/></ListItem>
            <ListItem display={'flex'} alignItems='center' cursor={'pointer'}>POST <MdKeyboardArrowDown fontSize={'2em'}/></ListItem>
            <ListItem display={'flex'} alignItems='center' cursor={'pointer'}>CATEGORIES <MdKeyboardArrowDown fontSize={'2em'}/></ListItem>
            <ListItem display={'flex'} alignItems='center' cursor={'pointer'}>SHOP <MdKeyboardArrowDown fontSize={'2em'}/></ListItem>
            <ListItem display={'flex'} alignItems='center' cursor={'pointer'}>BUY NOW <MdKeyboardArrowDown fontSize={'2em'}/></ListItem>
            <ListItem display={'flex'} alignItems='center' cursor={'pointer'}><BsThreeDots fontSize={'1.8em'}/></ListItem>
          </UnorderedList>
        </Flex>
      
      <Flex  >
        <UnorderedList listStyleType='none' display='flex' justifyContent='space-between' alignItems='center' mt='-2' w={['70px', '80px','90px','90px','160px']} >
        <ListItem display={['none','none','none','none','flex']} alignItems='center' fontWeight={'bold'} fontSize={'0.9em'} cursor='pointer'>Follow <MdKeyboardArrowDown fontSize={'1.7em'}/></ListItem>
        <ListItem cursor='pointer'><MdOutlineShoppingBag fontSize={'1.3em'}/></ListItem>
        <ListItem cursor='pointer'><AiOutlineSearch fontSize={'1.3em'}/></ListItem>
        <ListItem cursor='pointer'><BsSun fontSize={'1em'}/></ListItem>
        </UnorderedList>
       
      </Flex>
    </Stack>
  )
}

export default Navbar