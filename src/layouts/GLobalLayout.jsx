import React from "react";
import {
    Flex,
    Box,
    Button,
    Icon,
    Image,
    InputGroup,
    Input,
    InputLeftElement,
    InputRightElement,
    HStack,
    Avatar,
    AvatarBadge,
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { MdExitToApp } from "react-icons/md";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link, useHistory } from "react-router-dom";
import Footer from "./Footer";

const GlobalLayout = ({ children }) => {
    return (
        <Box w="100%" minH="100vh">
            <Flex
                py={3}
                px={10}
                borderBottomWidth="1px"
                borderBottomColor="gray.200"
                w="100%"
                alignItems="center"
            >
                <ChakraLink
                    as={Link}
                    to="/"
                    color="gray.600"
                    fontWeight="semibold"
                    _hover={{ color: "teal.500" }}
                    _focus={{ color: "teal.600" }}
                    _active={{ color: "teal.600" }}
                >
                    Protefalan
                </ChakraLink>
                <Flex ml="auto" alignItems="center">
                    <HStack spacing={7}>
                        <ChakraLink
                            as={Link}
                            to="/u"
                            color="gray.600"
                            fontWeight="semibold"
                            _hover={{ color: "teal.500" }}
                            _focus={{ color: "teal.600" }}
                            _active={{ color: "teal.600" }}
                        >
                            Home
                        </ChakraLink>
                        <ChakraLink
                            as={Link}
                            to="/u/about"
                            color="gray.600"
                            fontWeight="semibold"
                            _hover={{ color: "teal.500" }}
                            _focus={{ color: "teal.600" }}
                            _active={{ color: "teal.600" }}
                        >
                            About Us
                        </ChakraLink>
                        <ChakraLink
                            as={Link}
                            to="/u/services"
                            color="gray.600"
                            fontWeight="semibold"
                            _hover={{ color: "teal.500" }}
                            _focus={{ color: "teal.600" }}
                            _active={{ color: "teal.600" }}
                        >
                            Services
                        </ChakraLink>
                        <ChakraLink
                            as={Link}
                            to="/u/projects"
                            color="gray.600"
                            fontWeight="semibold"
                            _hover={{ color: "teal.500" }}
                            _focus={{ color: "teal.600" }}
                            _active={{ color: "teal.600" }}
                        >
                            Projects
                        </ChakraLink>
                        <ChakraLink
                            as={Link}
                            to="/u/courses"
                            color="gray.600"
                            fontWeight="semibold"
                            _hover={{ color: "teal.500" }}
                            _focus={{ color: "teal.600" }}
                            _active={{ color: "teal.600" }}
                        >
                            Courses
                        </ChakraLink>
                        <ChakraLink
                            as={Link}
                            to="/u/contact"
                            color="gray.600"
                            fontWeight="semibold"
                            _hover={{ color: "teal.500" }}
                            _focus={{ color: "teal.600" }}
                            _active={{ color: "teal.600" }}
                        >
                            Contact
                        </ChakraLink>
                        <ChakraLink
                            as={Link}
                            to="/u/affiliates"
                            color="gray.600"
                            fontWeight="semibold"
                            _hover={{ color: "teal.500" }}
                            _focus={{ color: "teal.600" }}
                            _active={{ color: "teal.600" }}
                        >
                            Affiliates
                        </ChakraLink>
                        <ChakraLink
                            as={Link}
                            to="/signin"
                            color="gray.600"
                            fontWeight="semibold"
                            _hover={{ color: "teal.500" }}
                            _focus={{ color: "teal.600" }}
                            _active={{ color: "teal.600" }}
                        >
                            Sign In
                        </ChakraLink>
                    </HStack>
                </Flex>
            </Flex>
            <Box w="100%" maxW="1600px" py={10} mx="auto">
                {children}
            </Box>
            <Footer />
        </Box>
    );
};

export default GlobalLayout;
