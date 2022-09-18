import { Flex,  Text } from "@chakra-ui/react";
import SimpleImageSlider from "react-simple-image-slider";


const images = [
    { url: "https://authentictheme.com/heartbeat/wp-content/uploads/sites/3/2017/10/cropped-authentic-demo-image-00026-1536x863.jpg" },
    { url: "https://authentictheme.com/heartbeat/wp-content/uploads/sites/3/2017/10/authentic-demo-image-00012-1536x1024.jpg" },
    { url: "https://authentictheme.com/heartbeat/wp-content/uploads/sites/3/2017/10/authentic-demo-image-00021-1536x1024.jpg" }
];

const ImageSlider = () => {
  return (
    <Flex pos='relative' _hover={{ cursor:'pointer',bg: "#CCCCCC"}}   mt='55px' overflow='hidden' >
      <SimpleImageSlider
        width={1280}
        height={504}
        images={images}
        showBullets={false}
        showNavs={false}
        autoPlay={true}
        autoPlayDelay={5}
        loop
      />

      <Text position='absolute' left='8' bottom='120px' color='white'  z-index='1' background='transparent' fontSize='0.8em' >Style</Text>
      <Text position='absolute' left='8' bottom='60px' color='white'  z-index='1' background='transparent' fontSize='30px' >The 5 Best Dog Breeds For Small Apartments</Text>
      <Text position='absolute' left='8' bottom='25px' color='white'  z-index='1' background='transparent' fontSize='0.9em' >Vishal Gupta</Text>
    </Flex>
  );
}

export default ImageSlider