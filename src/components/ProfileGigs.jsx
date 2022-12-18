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
} from '@chakra-ui/react';
import SellerCard from './SellerCard';
import { Link } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getGigsByAuthor, follow, unfollow } from '../api';
import { parseText } from '../helpers';
import { useParams } from 'react-router-dom';

const ProfileGigs = () => {
  const { username } = useParams();

  const { status, data, error, isFetching, isLoading, isError } = useQuery(["gigs_author", username], () => getGigsByAuthor(username), {
    enabled: username !== undefined
  })

  if(isLoading || !data){
    return <></>;
  }

  return (
    <Box>
      <Text fontSize="2xl" color="gray.700" mb={5}>
        Gigs by Sayed Rafi
      </Text>
      <SimpleGrid columns={3} spacing={5}>
        {data.results.map((el, i) => (
          <SellerCard gig={el} key={i} />
        ))}
        <Flex
          w="100%"
          rounded="md"
          bg="blue.500"
          p={5}
          alignItems="center"
          justifyContent="center"
          minH="200px"
          h="100%"
        >
          <SimpleGrid columns={1} spacing={3}>
            <Text color="white">Want to create a new gig ?</Text>
            <Button
              bg="white"
              color="blue.600"
              _hover={{ bg: 'blue.700', color: 'white' }}
              _focus={{ bg: 'blue.700', color: 'white' }}
              _active={{ bg: 'blue.700', color: 'white' }}
              as={Link}
              to="/gig/create"
            >
              Create Gig
            </Button>
          </SimpleGrid>
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default ProfileGigs;
