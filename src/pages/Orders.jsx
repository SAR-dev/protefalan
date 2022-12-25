import {
  Flex,
  Box,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Avatar,
  VStack,
} from '@chakra-ui/react';
import NavLayout from '../layouts/NavLayout';
import { FiSearch } from 'react-icons/fi';
import { useParams, Link } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import OrderRow from '../components/OrderRow';
import { getCreatedOrders, getReceivedOrders } from '../api';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const Orders = () => {
  const { type } = useParams();
  const [createdOrders, setCreatedOrders] = useState([])
  const [receivedOrders, setReceivedOrders] = useState([])

  useQuery(["created_orders"], () => getCreatedOrders(), {
    onSuccess: (res) => {
      setCreatedOrders(res)
    }
  })

  useQuery(["received_orders"], () => getReceivedOrders(), {
    onSuccess: (res) => {
      setReceivedOrders(res)
    }
  })


  return (
    <NavLayout>
      <Box borderWidth="1px" borderColor="gray.100" rounded="md" mb={5}>
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
            Placed Orders
          </TableCaption>
          <Thead>
            <Tr>
              <Th>SELLER</Th>
              <Th>GIG</Th>
              <Th>PACKAGE</Th>
              <Th>DUE ON</Th>
              <Th>PRICE</Th>
              <Th>NOTE</Th>
              <Th isNumeric>STATUS</Th>
            </Tr>
          </Thead>
          <Tbody>
            {createdOrders.map((el, i) => (
              <Tr key={i}>
                <Td>
                  <Flex alignItems="center" w="150px">
                    <Avatar size="sm" mr={1} src={el.package.author.avatar} name={`${el.package.author.first_name} ${el.package.author.last_name}`} />
                    <Box>
                      <Text>
                        {`${el.package.author.first_name} ${el.package.author.last_name}`}
                      </Text>
                      <Text color="gray.500">
                        {el.package.author.username}
                      </Text>
                    </Box>
                  </Flex>
                </Td>
                <Td>
                  {el.package.gig.title}
                </Td>
                <Td>
                  {el.package.title}
                </Td>
                <Td>
                  {(new Date(el.due_on)).toDateString()}
                </Td>
                <Td>
                  ${el.package.price}
                </Td>
                <Td>
                  {el.note}
                </Td>
                <Td>
                  {el.status.toUpperCase()}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

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
            Recieved Orders
          </TableCaption>
          <Thead>
            <Tr>
              <Th>BUYER</Th>
              <Th>GIG</Th>
              <Th>PACKAGE</Th>
              <Th>DUE ON</Th>
              <Th>PRICE</Th>
              <Th>NOTE</Th>
              <Th isNumeric>STATUS</Th>
            </Tr>
          </Thead>
          <Tbody>
            {createdOrders.map((el, i) => (
              <Tr key={i}>
                <Td>
                  <Flex alignItems="center" w="150px">
                    <Avatar size="sm" mr={1} src={el.buyer.avatar} name={`${el.buyer.first_name} ${el.buyer.last_name}`} />
                    <Box>
                      <Text>
                        {`${el.buyer.first_name} ${el.buyer.last_name}`}
                      </Text>
                      <Text color="gray.500">
                        {el.buyer.username}
                      </Text>
                    </Box>
                  </Flex>
                </Td>
                <Td>
                  {el.package.gig.title}
                </Td>
                <Td>
                  {el.package.title}
                </Td>
                <Td>
                  {(new Date(el.due_on)).toDateString()}
                </Td>
                <Td>
                  ${el.package.price}
                </Td>
                <Td>
                  {el.note}
                </Td>
                <Td>
                  {el.status.toUpperCase()}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </NavLayout>
  );
};

export default Orders;
