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
} from '@chakra-ui/react';
import NavLayout from '../layouts/NavLayout';
import HomeAdCarousel from '../components/HomeAdCarousel';
import SellerCardCarousel from '../components/SellerCardCarousel';

function Home() {
  return (
    <NavLayout>
      <SimpleGrid columns={1} spacing={10} w="100%">
        <Flex w="100%">
          <Flex
            w="350px"
            h="320px"
            rounded="md"
            className='moon-bg'
            borderColor="gray.200"
            borderWidth="1px"
            alignItems="center"
            textAlign="center"
            color="white"
            flexShrink="0"
            p={10}
          >
            <SimpleGrid columns={1} spacing={5}>
              <Text fontWeight="semibold" fontSize="xl">
                Hi Rafi,
              </Text>
              <Text>
                Get offers from sellers for your project
              </Text>
              <Button
                colorScheme="teal"
                fontSize="md"
                w="100%"
                _hover={{ bg: 'teal.500', color: 'white' }}
                _focus={{ bg: 'teal.500', color: 'white' }}
                _active={{ bg: 'teal.500', color: 'white' }}
              >
                Post a Request
              </Button>
            </SimpleGrid>
          </Flex>
          <Box w="100%" overflow="hidden" ml={10}>
          <HomeAdCarousel />
          </Box>
        </Flex>
        <SellerCardCarousel
          header1="Most popular Gigs in"
          header2="Web Programming"
          header2Color="#344CB7"
          rows={1}
          details="Hand-vetted talent for all your professional needs"
        />
        <SellerCardCarousel
          header1="Verified Pro services in"
          header2="Artificial Intelligence"
          header2Color="#D47AE8"
          rows={1}
          details="Hand-vetted talent for all your professional needs"
        />
        <HomeAdCarousel />
        <SellerCardCarousel
          header1="Editor's Picks"
          details="Hand-vetted talent for all your professional needs"
          rows={2}
        />
      </SimpleGrid>
    </NavLayout>
  );
}

export default Home;
