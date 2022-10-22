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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';
import { Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import UnAuthFooter from './UnAuthFooter';

const UnAuthLayout = ({ children }) => {
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
        <Flex ml="auto" alignItems="center">
          <HStack spacing={7}>
            <ChakraLink
              to="/u"
              as={Link}
              color="gray.600"
              fontWeight="semibold"
              _hover={{ color: 'teal.500' }}
              _focus={{ color: 'teal.600' }}
              _active={{ color: 'teal.600' }}
            >
              Home
            </ChakraLink>
            <ChakraLink
              to="/u/about"
              as={Link}
              color="gray.600"
              fontWeight="semibold"
              _hover={{ color: 'teal.500' }}
              _focus={{ color: 'teal.600' }}
              _active={{ color: 'teal.600' }}
            >
              About
            </ChakraLink>
            <Menu>
              <MenuButton
                as={ChakraLink}
                color="gray.600"
                fontWeight="semibold"
                _hover={{ color: 'teal.500' }}
                _focus={{ color: 'teal.600' }}
                _active={{ color: 'teal.600' }}
              >
                Services
              </MenuButton>
              <MenuList>
                <MenuItem as={Link} to="/u/services">All Services</MenuItem>
                <MenuItem as={Link} to="/u/services">Digital Solution</MenuItem>
                <MenuItem as={Link} to="/u/services">Event Solution</MenuItem>
                <MenuItem as={Link} to="/u/services">Print Merchandising</MenuItem>
                <MenuItem as={Link} to="/u/services">Space Rental</MenuItem>
                <MenuItem as={Link} to="/u/services">Our Cources</MenuItem>
              </MenuList>
            </Menu>
            <ChakraLink
              to="/u/projects"
              as={Link}
              color="gray.600"
              fontWeight="semibold"
              _hover={{ color: 'teal.500' }}
              _focus={{ color: 'teal.600' }}
              _active={{ color: 'teal.600' }}
            >
              Projects
            </ChakraLink>
            <ChakraLink
              to="/u/courses"
              as={Link}
              color="gray.600"
              fontWeight="semibold"
              _hover={{ color: 'teal.500' }}
              _focus={{ color: 'teal.600' }}
              _active={{ color: 'teal.600' }}
            >
              Courses
            </ChakraLink>
            <ChakraLink
              to="/u/affiliates"
              as={Link}
              color="gray.600"
              fontWeight="semibold"
              _hover={{ color: 'teal.500' }}
              _focus={{ color: 'teal.600' }}
              _active={{ color: 'teal.600' }}
            >
              Affiliates
            </ChakraLink>
            <ChakraLink
              to="/u/contact"
              as={Link}
              color="gray.600"
              fontWeight="semibold"
              _hover={{ color: 'teal.500' }}
              _focus={{ color: 'teal.600' }}
              _active={{ color: 'teal.600' }}
            >
              Contact
            </ChakraLink>
            <ChakraLink
              to="/signup"
              as={Link}
              color="gray.600"
              fontWeight="semibold"
              _hover={{ color: 'teal.500' }}
              _focus={{ color: 'teal.600' }}
              _active={{ color: 'teal.600' }}
            >
              Create Account
            </ChakraLink>
          </HStack>
        </Flex>
      </Flex>
      <Box>{children}</Box>
      <UnAuthFooter />
    </Box>
  );
};

export default UnAuthLayout;
