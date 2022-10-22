import React, { useState } from 'react';
import {
  Flex,
  Box,
  Button,
  Icon,
  IconButton,
  Image,
  Text,
  SimpleGrid,
  Grid,
  GridItem,
  Avatar,
  Heading,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Textarea,
  Select,
  Input,
  InputGroup,
  InputLeftElement,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Badge,
} from '@chakra-ui/react';
import NavLayout from '../layouts/NavLayout';
import { FiSearch } from 'react-icons/fi';
import { CgExtensionAdd } from 'react-icons/cg';
import { FaRegStar } from 'react-icons/fa';
import { useParams, Link } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import OrderRow from '../components/OrderRow';

const Orders = () => {
  const { type } = useParams();
  const types = [
    { name: 'ACTIVE', url: 'active' },
    { name: 'LATE', url: 'late' },
    { name: 'COMPLETED', url: 'completed' },
    { name: 'CANCELLED', url: 'cancelled' },
    { name: 'STARRED', url: 'starred' },
  ];

  const data = [
    {
      id: 1,
      starred: false,
      buyer: {
        name: 'Sayed Rafi',
        username: 'sar-dev',
        avatar: 'https://i.imgur.com/auy4jaR.jpeg',
      },
      gig: {
        name: 'Bizzard',
        desc: 'Do CSS or SVG animations for your website',
      },
      due_on: 'Dec 2021',
      total: '305',
      status: 'completed',
    },
    {
      id: 2,
      starred: true,
      buyer: {
        name: 'Sayed Rafi',
        username: 'sar-dev',
        avatar: 'https://i.imgur.com/auy4jaR.jpeg',
      },
      gig: {
        name: 'Bizzard',
        desc: 'Do CSS or SVG animations for your website',
      },
      due_on: 'Dec 2021',
      total: '305',
      status: 'active',
    },
    {
      id: 3,
      starred: false,
      buyer: {
        name: 'Sayed Rafi',
        username: 'sar-dev',
        avatar: 'https://i.imgur.com/auy4jaR.jpeg',
      },
      gig: {
        name: 'Bizzard',
        desc: 'Do CSS or SVG animations for your website',
      },
      due_on: 'Dec 2021',
      total: '305',
      status: 'late',
    },
    {
      id: 4,
      starred: false,
      buyer: {
        name: 'Sayed Rafi',
        username: 'sar-dev',
        avatar: 'https://i.imgur.com/auy4jaR.jpeg',
      },
      gig: {
        name: 'Bizzard',
        desc: 'Do CSS or SVG animations for your website',
      },
      due_on: 'Dec 2021',
      total: '305',
      status: 'cancelled',
    },
    {
      id: 5,
      starred: true,
      buyer: {
        name: 'Sayed Rafi',
        username: 'sar-dev',
        avatar: 'https://i.imgur.com/auy4jaR.jpeg',
      },
      gig: {
        name: 'Bizzard',
        desc: 'Do CSS or SVG animations for your website',
      },
      due_on: 'Dec 2021',
      total: '305',
      status: 'completed',
    },
  ];

  return (
    <NavLayout>
      <Flex alignItems="center" mb={10}>
        <Text fontSize="2xl" color="gray.700">
          Manage Orders
        </Text>
        <InputGroup w="350px" ml="auto">
          <InputLeftElement
            pointerEvents="none"
            children={<FiSearch color="gray.300" />}
          />
          <Input type="text" placeholder="Search orders..." />
        </InputGroup>
      </Flex>
      <Flex
        alignItems="center"
        borderBottomWidth="1px"
        borderBottomColor="gray.200"
        pb={5}
        mb={5}
      >
        {types.map((el, i) => (
          <ChakraLink
            as={Link}
            to={`/orders/${el.url}`}
            bg="transparent"
            fontWeight="semibold"
            letterSpacing="1.2px"
            mr={10}
            color={el.url === type ? 'gray.700' : 'gray.300'}
            _hover={{ color: 'gray.700' }}
            _focus={{ color: 'gray.700' }}
            _active={{ color: 'gray.700' }}
            d="flex"
            alignItems="center"
            key={i}
          >
            {el.name}
            <Flex
              w="25px"
              h="25px"
              rounded="full"
              bg={el.url === type ? 'teal.500' : 'gray.300'}
              color="white"
              justifyContent="center"
              alignItems="center"
              fontSize="sm"
              ml={2}
            >
              51
            </Flex>
          </ChakraLink>
        ))}
      </Flex>
      <Box borderWidth="1px" borderColor="gray.100" rounded="md">
        <Table variant="simple">
          <TableCaption
            placement="top"
            mb={3}
            textAlign="start"
            fontSize="lg"
            fontWeight="semibold"
            color="gray.700"
            borderBottomWidth="1px"
            borderBottomColor="gray.100"
          >
            Active Orders
          </TableCaption>
          <Thead>
            <Tr>
              <Th></Th>
              <Th>BUYER</Th>
              <Th>GIG</Th>
              <Th>DUE ON</Th>
              <Th>TOTAL</Th>
              <Th>NOTE</Th>
              <Th isNumeric>STATUS</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((el, i) => (
              <OrderRow el={el} key={i} />
            ))}
          </Tbody>
        </Table>
      </Box>
    </NavLayout>
  );
};

export default Orders;
