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
  Divider,
  StackDivider,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { FaCheck, FaSlideshare, FaStar, FaShare } from 'react-icons/fa';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { BiReset } from 'react-icons/bi';

const GigRightPanel = () => {
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
  const [active, setActive] = useState(data[0]);
  return (
    <Box d="inline">
      <Box
        w="100%"
        borderWidth="1px"
        borderColor="gray.200"
        rounded="md"
        overflow="hidden"
        pos="sticky"
        top="15px"
      >
        <HStack spacing={0} divider={<StackDivider borderColor="gray.200" />}>
          {data.map((el, i) => (
            <Flex
              w="100%"
              justifyContent="center"
              alignItems="center"
              py={3}
              fontWeight="semibold"
              color={active.slug === el.slug ? 'teal.500' : 'gray.700'}
              bg={active.slug === el.slug ? 'white' : 'gray.50'}
              borderBottomWidth={active.slug === el.slug ? '2px' : '1px'}
              borderBottomColor={
                active.slug === el.slug ? 'teal.500' : 'gray.200'
              }
              cursor="pointer"
              onClick={() => setActive(el)}
              key={i}
            >
              {el.name}
            </Flex>
          ))}
        </HStack>
        <SimpleGrid columns={1} spacing={6} p={6}>
          <Flex fontSize="xl">
            <Text fontWeight="bold" color="gray.700">
              {active.name}
            </Text>
            <Text fontWeight="bold" color="gray.700" ml="auto">
              {active.price}
            </Text>
          </Flex>

          <Text color="gray.700">{active.details}</Text>

          <Flex alignItems="center">
            <Icon as={AiOutlineFieldTime} h={5} w={5} color="gray.700" mr={2} />
            <Text fontSize="sm" fontWeight="semibold" color="gray.700" mr={4}>
              {active.points.find(obj => obj.name === 'Delivery Time').value}{' '}
              Delivery
            </Text>
            <Icon as={BiReset} h={5} w={5} color="gray.700" mr={2} />
            <Text fontSize="sm" fontWeight="semibold" color="gray.700">
              {active.points.find(obj => obj.name === 'Revisions').value}{' '}
              Revisions
            </Text>
          </Flex>

          <List spacing={2}>
            {active.points
              .filter(obj => obj.type === 'boolean')
              .map((el, i) => (
                <ListItem color="gray.700">
                  <ListIcon as={FaCheck} color={el.value ? "green.500" : "gray.200"} />
                  {el.name}
                </ListItem>
              ))}
          </List>
          <Box>
            <Button w="100%" colorScheme="teal" mb={2}>
              Continue ($20)
            </Button>
            <Button w="100%" variant="outline">
              Contact Seller
            </Button>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default GigRightPanel;
