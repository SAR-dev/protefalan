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

const PackageCompare = () => {
  const data = [
    {
      name: 'Basic',
      slug: 'basic',
      price: '$60',
      title: 'Single Page Website',
      details:
        'I will create Single Page Website (4~5 sections) using Html CSS, Tailwind CSS & Alpine JS.',
      points: [
        { name: 'Design Customization', type: 'boolean', value: true },
        { name: 'Content Upload', type: 'boolean', value: false },
        { name: 'Responsive Design', type: 'boolean', value: true },
        { name: 'Include Source Code', type: 'boolean', value: false },
        { name: 'Number of Pages', type: 'number', value: 3 },
        { name: 'Revisions', type: 'number', value: 2 },
        { name: 'Delivery Time', type: 'text', value: '3 days' },
      ],
    },
    {
      name: 'Standard',
      slug: 'standard',
      price: '$200',
      title: '3 Pages Website',
      details:
        'I will create 3 Pages Responsive Website using Html CSS, Tailwind CSS & Alpine JS.',
      points: [
        { name: 'Design Customization', type: 'boolean', value: true },
        { name: 'Content Upload', type: 'boolean', value: false },
        { name: 'Responsive Design', type: 'boolean', value: false },
        { name: 'Include Source Code', type: 'boolean', value: true },
        { name: 'Number of Pages', type: 'number', value: 3 },
        { name: 'Revisions', type: 'number', value: 5 },
        { name: 'Delivery Time', type: 'text', value: '5 days' },
      ],
    },
    {
      name: 'Premium',
      slug: 'premium',
      price: '$450',
      title: '7 Pages Website',
      details:
        'I will create responsive 6 Pages Responsive Website using Html CSS, Tailwind CSS & Alpine JS.',
      points: [
        { name: 'Design Customization', type: 'boolean', value: false },
        { name: 'Content Upload', type: 'boolean', value: false },
        { name: 'Responsive Design', type: 'boolean', value: true },
        { name: 'Include Source Code', type: 'boolean', value: true },
        { name: 'Number of Pages', type: 'number', value: 3 },
        { name: 'Revisions', type: 'number', value: 12 },
        { name: 'Delivery Time', type: 'text', value: '15 days' },
      ],
    },
  ];

  const [points, setPoints] = useState({});

  function groupArrayOfObjects(list, key) {
    return list.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }

  const createPoints = () => {
    const points = [];
    data.map(el =>
      el.points.map(obj => points.push({ ...obj, source: el.slug }))
    );
    const grouped = groupArrayOfObjects(points, 'name');
    setPoints(grouped);
  };

  useEffect(() => {
    createPoints();
  }, [data]);

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
        {data.map((el, i) => (
          <Box p={5} borderRightWidth={data.length-1 !== i && "1px"} borderRightColor={data.length-1 !== i && "gray.200"} key={i}>
            <Text fontSize="xl">{el.price}</Text>
            <Text fontSize="xl" fontWeight="semibold" my={2}>
              {el.name}
            </Text>
            <Text
              fontSize="xs"
              fontWeight="semibold"
              textTransform="uppercase"
              my={2}
            >
              {el.title}
            </Text>
            <Text fontSize="sm">{el.details}</Text>
          </Box>
        ))}
      </SimpleGrid>
      {Object.keys(points).map((key, i) => {
        return (
          <SimpleGrid
            columns={4}
            color="gray.700"
            borderBottomWidth="1px"
            borderBottomColor="gray.200"
            key={i}
          >
            <Box p={5} borderRightWidth="1px" borderRightColor="gray.200">
              {key}
            </Box>
            {points[key].map((el, i) => (
              <Box
                p={5}
                borderRightWidth={points[key].length-1 !== i && "1px"} 
                borderRightColor={points[key].length-1 !== i && "gray.200"}
                key={i}
              >
                {el.type === 'boolean' ? (
                  <Icon as={FaCheck} h={5} w={5} color={el.value ? "green.500" : "gray.200"} />
                ) : (el.value)}
              </Box>
            ))}
          </SimpleGrid>
        );
      })}
      <SimpleGrid
        columns={4}
        color="gray.700"
      >
        <Flex alignItems="center" p={5} borderRightWidth="1px" borderRightColor="gray.200">
          Choose
        </Flex>
        {data.map((el, i) => (
          <Box p={5} borderRightWidth={data.length-1 !== i && "1px"} borderRightColor={data.length-1 !== i && "gray.200"} key={i}>
            <Text fontSize="xl" textAlign="center">{el.price}</Text>
            <Button colorScheme="teal" w="100%" mt={2}>Select</Button>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PackageCompare;
