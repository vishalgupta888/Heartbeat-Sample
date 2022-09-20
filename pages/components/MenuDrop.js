import {
    Box,
    MenuButton,
    MenuItem,
    MenuList,
    MenuDivider,
    useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Menu } from "@chakra-ui/react";
import { MdKeyboardArrowDown } from 'react-icons/md';



export const MenuDrop = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box>
            <Menu isOpen={isOpen} onClose={onClose}>
                <MenuButton
                    ml='3px'
                    fontSize={'25px'}
                    onMouseOver={onOpen}
                    onMouseOut={onClose}
                ><MdKeyboardArrowDown />
                </MenuButton>
                <MenuList onMouseOver={onOpen} onMouseOut={onClose} bgColor='black' color='white' borderRadius={'none'} border={'none'}>
                    <MenuItem>Authentic</MenuItem>
                    <MenuItem>HeartBeat</MenuItem>
                    <MenuItem>The Luxymag</MenuItem>
                    <MenuItem>Viewport</MenuItem>
                    <MenuItem>Modest Travel</MenuItem>
                    <MenuItem>Styled Theories</MenuItem>
                    <MenuItem>Visual Therapy</MenuItem>
                    <MenuItem>Ordinary Chaos</MenuItem>
                    <MenuItem>Another</MenuItem>
                </MenuList>
            </Menu>
        </Box>
    );
};