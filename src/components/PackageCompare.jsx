import React, { useState, useEffect } from 'react';
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
  Divider,
  StackDivider,
  List,
  ListItem,
  ListIcon,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react';
import {
  FaSlideshare,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaShare,
  FaCheck
} from 'react-icons/fa';
import { MdCheckCircle, MdDateRange } from 'react-icons/md';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { BiReset } from 'react-icons/bi';
import GigImageCarousel from './GigImageCarousel';
import parse from 'html-react-parser';
import { parseText, capitalizeFirstLetter } from '../helpers'

const bools = ["prototype", "content_upload", "source_file", "consulatation", "deployment", "integration"]

const TableRow = ({title, values}) => (
  <SimpleGrid
    columns={values.length + 1}
    color="gray.700"
    borderBottomWidth="1px"
    borderBottomColor="gray.200"
  >
    <Box p={5} borderRightWidth="1px" borderRightColor="gray.200">
      {title}
    </Box>
    {values.map((el, i) => (
      <Box
        p={5}
        borderRightWidth={values.length - 1 !== i && "1px"}
        borderRightColor={values.length - 1 !== i && "gray.200"}
        key={i}
      >
        {el}
      </Box>
    ))}
  </SimpleGrid>
)

const TableBooleanRow = ({title, values}) => (
  <SimpleGrid
    columns={values.length + 1}
    color="gray.700"
    borderBottomWidth="1px"
    borderBottomColor="gray.200"
  >
    <Box p={5} borderRightWidth="1px" borderRightColor="gray.200">
      {title}
    </Box>
    {values.map((el, i) => (
      <Box
        p={5}
        borderRightWidth={values.length - 1 !== i && "1px"}
        borderRightColor={values.length - 1 !== i && "gray.200"}
        key={i}
      >
        <Icon as={FaCheck} color={el ? "green.500" : "gray.200"} />
      </Box>
    ))}
  </SimpleGrid>
)

const PackageCompare = ({ packages }) => {

  return (
    <Box borderWidth="1px" borderColor="gray.200" rounded="md">
      <SimpleGrid
        columns={4}
        color="gray.700"
        borderBottomWidth="1px"
        borderBottomColor="gray.200"
      >
        <Box p={5} borderRightWidth="1px" borderRightColor="gray.200">
          Package
        </Box>
        {packages.map((el, i) => (
          <Box p={5} borderRightWidth={packages.length - 1 !== i && "1px"} borderRightColor={packages.length - 1 !== i && "gray.200"} key={i}>
            <Text fontSize="xl">{el.price}</Text>
            <Text fontSize="xl" fontWeight="semibold" my={2}>
              {el.title}
            </Text>
            <Text fontSize="sm">{el.description}</Text>
          </Box>
        ))}
      </SimpleGrid>
      <TableRow title="Price" values={packages.map(e => `$ ${e.price}`)} />
      <TableRow title="Delivery Time" values={packages.map(e => e.duration_in_days)} />
      <TableRow title="No of Revisions" values={packages.map(e => e.revisions)} />
      {bools.map((b, i) => (
        <TableBooleanRow title={capitalizeFirstLetter(b.split("_").join(" "))} values={packages.map(e => e[b])} key={i}/>
      ))}
      <SimpleGrid
        columns={4}
        color="gray.700"
      >
        <Flex alignItems="center" p={5} borderRightWidth="1px" borderRightColor="gray.200">
          Choose
        </Flex>
        {packages.map((el, i) => (
          <Box p={5} borderRightWidth={packages.length - 1 !== i && "1px"} borderRightColor={packages.length - 1 !== i && "gray.200"} key={i}>
            <Text fontSize="xl" textAlign="center">{`$ ${el.price}`}</Text>
            <Button colorScheme="teal" w="100%" mt={2}>Select</Button>
          </Box>
        ))}
      </SimpleGrid> 
    </Box>
  );
};

export default PackageCompare;
