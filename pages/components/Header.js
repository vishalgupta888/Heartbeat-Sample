import { Button, Flex, Box, HStack, Stack, Text, Icon } from '@chakra-ui/react'
import { FaFacebook } from 'react-icons/fa';
import { BsPinterest } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { AiOutlineTwitter, AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai';

const Header = () => {
  return (
    <>
      <Stack display='flex' align='center' justify='space-between' h={['1.2em', '1.2em', '1.2em', '1.2em', '6.1em',]} direction='row' >

        <Flex >
          <HStack display={['none', 'none', 'none', 'none', 'flex']} >
            <FaFacebook cursor='pointer' />
            <AiOutlineTwitter cursor='pointer' />
            <AiOutlineInstagram cursor='pointer' />
            <BsPinterest cursor='pointer' />
            <AiFillYoutube cursor='pointer' />
          </HStack>
        </Flex>
        <Flex>
          <Text fontSize={['0.8em', '1.1em', '1.2em', '1.4em', '1.7em']} fontWeight='bold' cursor='pointer' pt={['12', '12', '12', '12', 0]} letterSpacing={2} >HEARTBEAT</Text>
        </Flex>
        <Flex>
          <Button display={['none','none','none','none','flex']} role="group" position="relative" overflow="hidden" width={105} height={37} borderRadius='none'>
            <Icon
              as={MdOutlineEmail}
              position="absolute"
              transition="top 0.2s ease-out"
              top={10}
              _groupHover={{ top: 3 }}
            />
            <Text
              fontSize={12}
              position="absolute"
              transition="top 0.2s ease-out"
              top={3}
              _groupHover={{ top: -10 }}
            >
              SUBSCRIBE
            </Text>
          </Button>
        </Flex>
      </Stack>
    </>
  )
}

export default Header