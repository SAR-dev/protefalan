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
  Select,
  Input,
  Textarea,
} from '@chakra-ui/react';

const Step1Overview = ({save}) => {
  const categories = [
    {
      name: 'Category A',
      children: [
        { name: 'Subcategory A1' },
        { name: 'Subcategory A2' },
        { name: 'Subcategory A3' },
        { name: 'Subcategory A4' },
        { name: 'Subcategory A5' },
      ],
    },
    {
      name: 'Category B',
      children: [
        { name: 'Subcategory B1' },
        { name: 'Subcategory B2' },
        { name: 'Subcategory B3' },
        { name: 'Subcategory B4' },
        { name: 'Subcategory B5' },
      ],
    },
    {
      name: 'Category C',
      children: [
        { name: 'Subcategory C1' },
        { name: 'Subcategory C2' },
        { name: 'Subcategory C3' },
        { name: 'Subcategory C4' },
        { name: 'Subcategory C5' },
      ],
    },
    {
      name: 'Category D',
      children: [
        { name: 'Subcategory D1' },
        { name: 'Subcategory D2' },
        { name: 'Subcategory D3' },
        { name: 'Subcategory D4' },
        { name: 'Subcategory D5' },
      ],
    },
    {
      name: 'Category E',
      children: [
        { name: 'Subcategory E1' },
        { name: 'Subcategory E2' },
        { name: 'Subcategory E3' },
        { name: 'Subcategory E4' },
        { name: 'Subcategory E5' },
      ],
    },
  ];
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [category, setCategory] = useState();
  const [subCategory, setSubCategory] = useState();
  const [placeholder, setPlaceholder] = useState(true);

  const getSubCategories = () => {
    const c = categories.find(cat => cat.name === category);
    if (c) {
      return c.children;
    } else return [];
  };

  return (
    <Box p={10} borderWidth="1px" borderColor="gray.200" rounded="md">
      <SimpleGrid columns={1} spacing={5}>
        <Flex>
          <Text
            w="100px"
            flexShrink="0"
            mr={5}
            textAlign="right"
            fontWeight="semibold"
            color="gray.700"
          >
            GIG TITLE
          </Text>
          <Box w="100%">
            <Input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <Flex fontSize="xs" mt={1}>
              <Text
                ml="auto"
                color={title.length > 80 ? 'red.400' : 'gray.400'}
              >
                {title.length}/80
              </Text>
            </Flex>
          </Box>
        </Flex>

        <Flex>
          <Text
            w="100px"
            flexShrink="0"
            mr={5}
            textAlign="right"
            fontWeight="semibold"
            color="gray.700"
          >
            GIG TITLE
          </Text>
          <Select
            onChange={e => {
              setCategory(e.target.value);
              setSubCategory();
              setPlaceholder(true);
            }}
            mr={2}
          >
            <option value="" disabled selected>
              Select A Category
            </option>
            {categories.map((el, i) => (
              <option value={el.name} selected={el.name === category} key={i}>
                {el.name}
              </option>
            ))}
          </Select>
          <Select
            onChange={e => {
              setPlaceholder(false);
              setSubCategory(e.target.value);
            }}
            ml={2}
          >
            <option value="" disabled selected={placeholder}>
              Select A Subcategory
            </option>
            {getSubCategories().map((el, i) => (
              <option value={el.name} selected={el.name === subCategory} key={i}>
                {el.name}
              </option>
            ))}
          </Select>
        </Flex>
        <Flex>
          <Text
            w="100px"
            flexShrink="0"
            mr={5}
            textAlign="right"
            fontWeight="semibold"
            color="gray.700"
          >
            Search Tags
          </Text>
          <Box w="100%">
            <Input
              type="text"
              value={tags}
              onChange={e => setTags(e.target.value)}
            />
            <Flex fontSize="xs" mt={1}>
              <Text color="gray.400">
                Use comma (,) to seperate the tags. Maximum 5 tags./80
              </Text>
              <Text
                ml="auto"
                color={tags.split(',').length > 5 ? 'red.400' : 'gray.400'}
              >
                {tags.split(',').length}/5
              </Text>
            </Flex>
          </Box>
        </Flex>
      </SimpleGrid>
      <Flex
        mt={10}
        pt={10}
        borderTopWidth="1px"
        borderTopColor="gray.200"
        justifyContent="space-between"
      >
        <Button variant="outline">Cancel</Button>
        <Button colorScheme="teal" onClick={() => save()}>Save & Continue</Button>
      </Flex>
    </Box>
  );
};

export default Step1Overview;
