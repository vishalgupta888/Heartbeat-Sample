import {Box,  Flex } from "@chakra-ui/react";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <Flex display='flex' justify='center'   >
      <Box as="div" w={['85vw','85vw','85vw','85vw','75vw']} h='200vh' >
      <Header/>
      <Navbar/>
      <ImageSlider/> 
      </Box>
    </Flex>
  )
}
