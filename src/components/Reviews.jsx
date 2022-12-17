import React from 'react';
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
} from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';
import Review from './Review';

const Reviews = () => {
  
  const ReviewsHeader = () => (
    <Flex mb={5} alignItems='center'>
      <Text fontSize="2xl" color="gray.700">Reviews</Text>
      <Flex color="yellow.400" mx={3} alignItems="center">
        <Icon as={FaStar} h={5} w={5} mr={1} />
        <Text>5</Text>
      </Flex>
      <Text color="gray.400">(104)</Text>
      <Select ml="auto" w="250px" size="sm">
        <option selected value="option1">
          Most Relevant
        </option>
        <option value="option2">Top Reviews</option>
        <option value="option3">Popular Reviews</option>
      </Select>
    </Flex>
  );

  return (
    <Box>
      <ReviewsHeader />
      <Box w="100%" h="1px" bg="gray.200" my={10} />
      <SimpleGrid columns={1} spacing={10}>
        {[...Array(6)].map((el, i) => (
          <Review key={i} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Reviews;
