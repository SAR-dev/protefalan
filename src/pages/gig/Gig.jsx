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
import NavLayout from '../../layouts/NavLayout';
import { FaSlideshare, FaStar, FaShare, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { MdCheckCircle, MdDateRange } from 'react-icons/md';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { BiReset } from 'react-icons/bi';
import GigRightPanel from '../../components/GirRightPanel';
import GigLeftPanel from '../../components/GigLeftPanel';
import SellerCardCarousel from '../../components/SellerCardCarousel';

const Gig = () => {
  const [active, setActive] = useState(1);
  return (
    <NavLayout>
      <SimpleGrid columns={1} spacing={10}>
        <Flex
          alignItems="center"
          p={5}
          bg="gray.50"
          borderWidth="1px"
          borderColor="gray.200"
          rounded="md"
        >
          <Icon as={FaSlideshare} h={12} w={12} color="teal.500" mr={5} />
          <SimpleGrid columns={1} w="450px">
            <Text fontWeight="semibold" color="gray.700">
              Reach More Customers
            </Text>
            <Text color="gray.500" fontSize="sm">
              You got the talent. Now go viral. Share your Gig on social media
              to connect with new customers and get more orders.
            </Text>
          </SimpleGrid>
          <Flex ml="auto">
          <Button
              colorScheme="whatsapp"
              size="sm"
              leftIcon={<Icon as={FaWhatsapp} />}
              ml={2}
            >
              WhatsApp
            </Button>
            <Button
              colorScheme="facebook"
              size="sm"
              leftIcon={<Icon as={FaFacebook} />}
              ml={2}
            >
              Facebook
            </Button>
            <Button
              colorScheme="teal"
              size="sm"
              leftIcon={<Icon as={FaShare} />}
              ml={2}
            >
              Copy Link
            </Button>
          </Flex>
        </Flex>
        <Grid templateColumns="repeat(16, 1fr)" gap={16}>
          <GridItem colSpan={10}>
            <GigLeftPanel />
          </GridItem>
          <GridItem colSpan={6}>
            <GigRightPanel />
          </GridItem>
        </Grid>
        <Box bg="#F5F5F5" p={10} rounded="md">
          <SellerCardCarousel
            header1="Verified Pro services in"
            header2="Artificial Intelligence"
            header2Color="#D47AE8"
            rows={1}
            details="Hand-vetted talent for all your professional needs"
          />
        </Box>
        <Box bg="#F5F5F5" p={10} rounded="md">
          <SellerCardCarousel
            header1="Editor's Picks"
            details="Hand-vetted talent for all your professional needs"
            rows={1}
          />
        </Box>
      </SimpleGrid>
    </NavLayout>
  );
};

export default Gig;
