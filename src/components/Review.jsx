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
import { FaStar, FaRegUserCircle, FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa';

const Review = () => {
  return (
    <SimpleGrid columns={1} spacing={3}>
      <Flex alignItems="center">
        <Box w="70px" flexShrink="0">
          <Avatar src="https://i.imgur.com/8oKUFw6.png" name="Sayed Rafi" />
        </Box>
        <SimpleGrid columns={1}>
          <Flex alignItems="center">
            <Text fontWeight="semibold" color="gray.700">
              Sayed Rafi
            </Text>
            <Flex
              fontWeight="semibold"
              color="gray.500"
              alignItems="center"
              ml={2}
            >
              <Icon as={FaRegUserCircle} mr={1} />
              <Text>sar-dev</Text>
            </Flex>
          </Flex>
          <Flex mt={1}>
            <Icon as={FaStar} h={5} w={5} color="yellow.400" />
            <Text ml={2} color="yellow.500">
              4
            </Text>
          </Flex>
        </SimpleGrid>
      </Flex>
      <Box pl="70px">
        <Text color="gray.700">
          Met and exceeded expectations! Communication was great. Turnaround was
          fast + ahead of schedule, but still met requirements and went beyond
          my expectations. I'm excited to work with this seller again!
        </Text>
      </Box>
      <Box pl="70px">
          <Text color="gray.500">Published 4 months ago</Text>
      </Box>
      <Flex pl="70px">
        <Flex alignItems="center" color="gray.700" cursor="pointer" _hover={{color: "teal.500"}} mr={5}>
            <Icon as={FaRegThumbsUp} h={5} w={5} />
            <Text fontWeight="semibold" ml={1}>Helpful</Text>
        </Flex>
        <Flex alignItems="center" color="gray.700" cursor="pointer" _hover={{color: "red.500"}} mr={5}>
            <Icon as={FaRegThumbsDown} h={5} w={5} />
            <Text fontWeight="semibold" ml={1}>Not Helpful</Text>
        </Flex>
      </Flex>
    </SimpleGrid>
  );
};

export default Review;
