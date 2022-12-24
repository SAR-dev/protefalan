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
import { getMe } from "../api";
import { useQuery } from "@tanstack/react-query";
import useAuthStore from "../store";

const NavLayout = ({ children }) => {
  const { accessToken } = useAuthStore();
  const history = useHistory();
  const { status, data, error, isFetching, isLoading } = useQuery(
    ["me", accessToken],
    () => getMe()
  );

  const signout = () => {
    localStorage.clear()
    history.push("/signin");
  }

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
        <InputGroup ml={10} size="sm" rounded="md" w="300px">
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={FiSearch} color="gray.300" />}
          />
          <Input type="text" placeholder="Find Services..." />
          <InputRightElement w="75px">
            <Button colorScheme="teal" roundedLeft="none" size="sm" w="75px">
              Search
            </Button>
          </InputRightElement>
        </InputGroup>
        <Flex ml="auto" alignItems="center">
          <HStack spacing={7}>
            <ChakraLink
              as={Link}
              to="/messages"
              color="gray.600"
              fontWeight="semibold"
              _hover={{ color: "teal.500" }}
              _focus={{ color: "teal.600" }}
              _active={{ color: "teal.600" }}
            >
              Messages
            </ChakraLink>
            <ChakraLink
              color="gray.600"
              fontWeight="semibold"
              _hover={{ color: "teal.500" }}
              _focus={{ color: "teal.600" }}
              _active={{ color: "teal.600" }}
            >
              Lists
            </ChakraLink>
            <ChakraLink
              as={Link}
              to="/orders/active"
              color="gray.600"
              fontWeight="semibold"
              _hover={{ color: "teal.500" }}
              _focus={{ color: "teal.600" }}
              _active={{ color: "teal.600" }}
            >
              Orders
            </ChakraLink>
            <ChakraLink
              color="teal.500"
              fontWeight="semibold"
              _hover={{ color: "teal.500" }}
              _focus={{ color: "teal.600" }}
              _active={{ color: "teal.600" }}
            >
              Switch to Selling
            </ChakraLink>
            {data && (
              <Menu>
                <MenuButton as={Avatar}
                  cursor="pointer"
                  size="sm"
                  src={
                    !isLoading && data
                      ? data.avatar
                      : "https://i.ibb.co/VvC5rbC/image.png"
                  } />
                <MenuList>
                  <MenuItem as={Link} to={`/profile/${data.username}`}>Profile</MenuItem>
                  <MenuItem onClick={signout}>Sign Out</MenuItem>
                </MenuList>
              </Menu>
            )}
          </HStack>
        </Flex>
      </Flex>
      <Box w="100%" maxW="1600px" p={10} mx="auto">
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default NavLayout;
