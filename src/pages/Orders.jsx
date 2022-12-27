import {
  Flex,
  Box,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Avatar,
  Button,
  ButtonGroup,
} from '@chakra-ui/react';
import NavLayout from '../layouts/NavLayout';
import { useParams } from 'react-router-dom';
import { getCreatedOrders, getReceivedOrders } from '../api';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { MdCheck, MdClose } from 'react-icons/md';

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
              <Th>STATUS</Th>
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
              <Th>STATUS</Th>
              <Th isNumeric>ACTION</Th>
            </Tr>
          </Thead>
          <Tbody>
            {receivedOrders.map((el, i) => (
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
                <Td>
                  {el.status === 'pending' ? (
                    <ButtonGroup size='sm' isAttached variant='outline'>
                      <Button leftIcon={<MdCheck />}>
                        Accept
                      </Button>
                      <Button leftIcon={<MdClose />}>
                        Reject
                      </Button>
                    </ButtonGroup>
                  ) : (
                    <ButtonGroup size='sm' isAttached variant='outline'>
                      <Button>
                        Cancel
                      </Button>
                      <Button>
                        Delayed
                      </Button>
                    </ButtonGroup>
                  )}
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
