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

const BuyerReviews = () => {
  const ReviewsHeader = () => (
    <Flex fontSize="3xl" fontWeight="bold" mb={5}>
      <Text color="gray.700">Reviews as Buyer</Text>
      <Text color="yellow.400" mx={3}>
        <Icon as={FaStar} h={6} w={6} />5
      </Text>
      <Text color="gray.400">(104)</Text>
      <Select ml="auto" w="250px" size="lg">
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

export default BuyerReviews;
