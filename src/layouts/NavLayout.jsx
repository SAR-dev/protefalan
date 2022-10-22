import React from 'react';
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
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';
import { Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const NavLayout = ({ children }) => {
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
        <Image
          h={10}
          src="https://1000logos.net/wp-content/uploads/2021/11/Fiverr-Logo.png"
        />
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
              _hover={{ color: 'teal.500' }}
              _focus={{ color: 'teal.600' }}
              _active={{ color: 'teal.600' }}
            >
              Messages
            </ChakraLink>
            <ChakraLink
              color="gray.600"
              fontWeight="semibold"
              _hover={{ color: 'teal.500' }}
              _focus={{ color: 'teal.600' }}
              _active={{ color: 'teal.600' }}
            >
              Lists
            </ChakraLink>
            <ChakraLink
              as={Link}
              to="/orders/active"
              color="gray.600"
              fontWeight="semibold"
              _hover={{ color: 'teal.500' }}
              _focus={{ color: 'teal.600' }}
              _active={{ color: 'teal.600' }}
            >
              Orders
            </ChakraLink>
            <ChakraLink
              color="teal.500"
              fontWeight="semibold"
              _hover={{ color: 'teal.500' }}
              _focus={{ color: 'teal.600' }}
              _active={{ color: 'teal.600' }}
            >
              Switch to Selling
            </ChakraLink>
            <Avatar
              as={Link}
              to="/profile"
              size="sm"
              src="https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-boy-user-avatar-vector-icon-free-png-image_1538406.jpg"
            >
              <AvatarBadge boxSize="1.25em" bg="green.500" />
            </Avatar>
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
