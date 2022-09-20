import { Flex, ListItem, Stack, UnorderedList } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BsSun, BsThreeDots } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdOutlineShoppingBag } from 'react-icons/md';
import Sidebar from './Sidebar';
import { MenuDrop } from './MenuDrop';


const Navbar = () => {
    const lastScroll = 0;
    const isScrolled = false;
   
  function controlNavbar () {
    const topHeader = document.querySelector(".topheader");
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const scrollDirection = currentScroll < lastScroll;
    const shouldToggle = isScrolled && scrollDirection;
    isScrolled = currentScroll > 100;
    topHeader.classList.toggle("active", shouldToggle);
    lastScroll = currentScroll;
  }

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar );
  }, [])
  

  return (
    <Stack className='topheader' minH={['30px','30px','30px','50px']} zIndex={1} w='100%' display='flex' flexDirection='row' align='center' justify='space-between'>

      <Flex as='nav'>

        <Sidebar />

        <UnorderedList display={['none', 'none', 'none', 'none', 'flex']} alignItems='center' ml={['60px', '80px', '70px', '140px']} fontSize='0.75em' fontWeight='bold' justifyContent='space-between' w={['35vw', '55vw', '55vw', '43vw',]} listStyleType='none' >
          <ListItem display={'flex'} alignItems='center' cursor={'pointer'}>
            DEMOS <MenuDrop />
          </ListItem>
          <ListItem display={'flex'} alignItems='center' cursor={'pointer'}>
            FEATURES <MenuDrop />
          </ListItem>
          <ListItem display={'flex'} alignItems='center' cursor={'pointer'}>
            POST <MenuDrop />
          </ListItem>
          <ListItem display={'flex'} alignItems='center' cursor={'pointer'}>
            CATEGORIES <MenuDrop />
          </ListItem>
          <ListItem display={'flex'} alignItems='center' cursor={'pointer'}>
            SHOP <MenuDrop />
          </ListItem>
          <ListItem display={'flex'} alignItems='center' cursor={'pointer'}>
            BUY NOW <MenuDrop />
          </ListItem>
          <ListItem display={'flex'} alignItems='center' cursor={'pointer'}>
            <BsThreeDots fontSize={'1.8em'} />
          </ListItem>
        </UnorderedList>
      </Flex>

      <Flex  >
        <UnorderedList listStyleType='none' display='flex' justifyContent='space-between' alignItems='center' mt='-2' w={['70px', '80px', '90px', '90px', '160px']} >
          <ListItem display={['none', 'none', 'none', 'none', 'flex']} alignItems='center' fontWeight={'bold'} fontSize={'0.9em'} cursor='pointer'>Follow <MenuDrop fontSize={'1.7em'} /></ListItem>
          <ListItem cursor='pointer'><MdOutlineShoppingBag fontSize={'1.3em'} /></ListItem>
          <ListItem cursor='pointer'><AiOutlineSearch fontSize={'1.3em'} /></ListItem>
          <ListItem cursor='pointer'><BsSun fontSize={'1em'} /></ListItem>
        </UnorderedList>

      </Flex>
    </Stack>
  )
}

export default Navbar