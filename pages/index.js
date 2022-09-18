import {Box,  Flex } from "@chakra-ui/react";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";


export default function Home() {
  return (
    <Flex display='flex' justify='center'   >
      <Box as="div" w={['85vw','85vw','85vw','85vw','75vw']} h='300vh' >
      <Header/>
      <ImageSlider/> 
      </Box>
    </Flex>
  )
}
