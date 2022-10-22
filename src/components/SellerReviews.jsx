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

const SellerReviews = () => {
  const ReviewsHeader = () => (
    <Flex mb={5} alignItems='center'>
      <Text fontSize="2xl" color="gray.700">Reviews As Seller</Text>
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
  const SellerRatings = () => (
    <SimpleGrid columns={3} spacing={5}>
      <Box>
        <Text color="gray.700">
          Seller Communication Level
        </Text>
        <Flex alignItems="center" mt={2}>
          <Icon as={FaStar} h={5} w={5} color="yellow.400" />
          <Text ml={2} color="yellow.500">
            5
          </Text>
        </Flex>
      </Box>
      <Box>
        <Text color="gray.700">
          Service as Described
        </Text>
        <Flex alignItems="center" mt={2}>
          <Icon as={FaStar} h={5} w={5} color="yellow.400" />
          <Text ml={2} color="yellow.500">
            5
          </Text>
        </Flex>
      </Box>
      <Box>
        <Text color="gray.700">
          Recommend to a Friend
        </Text>
        <Flex alignItems="center" mt={2}>
          <Icon as={FaStar} h={5} w={5} color="yellow.400" />
          <Text ml={2} color="yellow.500">
            5
          </Text>
        </Flex>
      </Box>
    </SimpleGrid>
  );
  return (
    <Box>
      <ReviewsHeader />
      <SellerRatings />
      <Box w="100%" h="1px" bg="gray.200" my={10} />
      <SimpleGrid columns={1} spacing={10}>
        {[...Array(6)].map((el, i) => (
          <Review key={i} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default SellerReviews;
