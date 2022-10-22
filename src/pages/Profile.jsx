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
import NavLayout from '../layouts/NavLayout';
import { FaStar, FaUser } from 'react-icons/fa';
import { MdPlace, MdDateRange } from 'react-icons/md';
import ProfileBioData from '../components/ProfileBiodata';
import ProfileGigs from '../components/ProfileGigs';
import SellerReviews from '../components/SellerReviews';
import BuyerReviews from '../components/BuyerReviews';

const Profile = () => {
  return (
    <NavLayout>
      <Grid templateColumns="repeat(21, 1fr)" gap={10} mb={10}>
        <GridItem colSpan={6}>
          <SimpleGrid columns={1} spacing={10}>
            <ProfileBioData />
          </SimpleGrid>
        </GridItem>
        <GridItem colSpan={15}>
          <SimpleGrid columns={1} spacing={10}>
            <ProfileGigs />
            <SellerReviews />
            <BuyerReviews />
          </SimpleGrid>
        </GridItem>
      </Grid>
    </NavLayout>
  );
};

export default Profile;
