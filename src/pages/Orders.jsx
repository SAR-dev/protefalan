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
  TableCaption,
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
            {createdOrders.map((el, i) => (
              <Tr key={i}>

              </Tr>
            ))}
            {/* {data.map((el, i) => (
              <OrderRow el={el} key={i} />
            ))} */}
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
            {/* {data.map((el, i) => (
              <OrderRow el={el} key={i} />
            ))} */}
          </Tbody>
        </Table>
      </Box>
    </NavLayout>
  );
};

export default Orders;
