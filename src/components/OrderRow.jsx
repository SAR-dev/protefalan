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
import { FaRegStar, FaStar } from 'react-icons/fa';
import { useParams, Link } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';

const OrderRow = ({ el }) => {
    const getColorScheme = (status) => {
        if (status === "active"){
            return "blue"
        } else if (status === "late"){
            return "yellow"
        } else if (status === "cancelled"){
            return "red"
        } else if (status === "completed"){
            return "teal"
        } else {
            return "gray"
        }
    }
  return (
    <Tr>
      <Td w="50px">
        <Flex alignItems="center">
          <Icon
            as={el.starred ? FaStar : FaRegStar}
            cursor="pointer"
            h={8}
            w={8}
            color={el.starred ? 'yellow.400' : 'gray.300'}
            _hover={{ color: 'gray.500' }}
          />
        </Flex>
      </Td>
      <Td>
        <Flex alignItems="center">
          <Avatar src={el.buyer.avatar} name={el.buyer.name} mr={3} />
          <Box>
            <Text color="gray.700" fontWeight="semibold">
              {el.buyer.name}
            </Text>
            <Text color="gray.500">{el.buyer.username}</Text>
          </Box>
        </Flex>
      </Td>
      <Td>
        <Text color="gray.700" fontWeight="semibold">
          {el.gig.desc}
        </Text>
        <Text color="gray.500">{el.gig.name}</Text>
      </Td>
      <Td>
        <Text color="gray.700" fontWeight="semibold">
          {el.due_on}
        </Text>
      </Td>
      <Td>
        <Text color="gray.700" fontWeight="semibold">
          ${el.total}
        </Text>
      </Td>
      <Td>
        <Icon
          as={CgExtensionAdd}
          cursor="pointer"
          h={8}
          w={8}
          color="gray.700"
          _hover={{ color: 'teal.500' }}
        />
      </Td>
      <Td isNumeric>
        <Badge w="80px" textAlign="center" colorScheme={getColorScheme(el.status)} variant="solid">
          {el.status}
        </Badge>
      </Td>
    </Tr>
  );
};

export default OrderRow;
