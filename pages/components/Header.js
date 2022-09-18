import {  Button, Flex,VStack, HStack, Stack, Text } from '@chakra-ui/react'
import { FaFacebook } from 'react-icons/fa';
import { BsPinterest } from 'react-icons/bs';
import { AiOutlineTwitter, AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai';
import Navbar from './Navbar';

const Header = () => {
    return (
        <>
        <Stack display='flex' align='center' justify='space-between' h={['1.2em','1.2em','1.2em','1.2em','6.1em',]} direction='row' >

            <Flex >
                <HStack display={['none','none','none','none','flex']} >
                    <FaFacebook cursor='pointer' />
                    <AiOutlineTwitter cursor='pointer' />
                    <AiOutlineInstagram cursor='pointer' />
                    <BsPinterest cursor='pointer' />
                    <AiFillYoutube cursor='pointer' />
                </HStack>
            </Flex>
            <Flex>
                <Text fontSize={['0.8em','1.1em','1.2em','1.4em','1.7em']} fontWeight='bold' cursor='pointer'  pt={['12','12','12','12',0]} letterSpacing={2} >HEARTBEAT</Text>
            </Flex>
            <Flex>
                <Button display={['none','none','none','none','flex']} borderRadius='none' h='2.8em' background='#474747' colorScheme='white' letterSpacing={1.2} fontSize='0.7em'>Subscribe</Button>
            </Flex>


        </Stack>
        <Navbar/>
        </>
    )
}

export default Header