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
  Container,
} from '@chakra-ui/react';
import UnAuthLayout from '../../layouts/UnAuthLayout';
import HomeAdCarousel from '../../components/HomeAdCarousel';
import ImageCarousel from './components/ImageCarousel';
import PopupVideoPlayer from './components/PopupVideoPlayer';
import CTAwithTitleSubtitle from './components/CTAwithTitleSubtitle';
import ImageCardCarousel from './components/ImageCardCarousel';
import TextImageRowCard from './components/TextImageRowCard';
import Associations from './components/Associations';
import TeamMembers from './components/TeamMembers';
import TestimonialCarousel from './components/TestimonialCarousel';

function UAbout() {
  return (
    <UnAuthLayout>
      <SimpleGrid columns={1} spacing={24} w="100%">
        <Container maxW="1600px" p={10}>
          <ImageCarousel h="70vh" />
        </Container>
        <Container maxW="1600px" p={10}>
          <TextImageRowCard
            title="Logo Maker"
            subtitle="Make an incredible logo in minutes"
            bg2="pink.500"
            color2="white"
            image="https://i.ibb.co/Kb6kKV6/photo-1499951360447-b19be8fe80f5.png"
          />
        </Container>
        <Container maxW="1600px" p={10}>
          <CTAwithTitleSubtitle
            title="Our Mission And Vision"
            subtitle="Upgrade to a curated experience packed with tools and benefits, dedicated to businesses. Upgrade to a curated experience packed with tools and benefits, dedicated to businesses"
            details="Upgrade to a curated experience packed with tools and benefits, dedicated to businesses. Upgrade to a curated experience packed with tools and benefits, dedicated to businesses"
          />
        </Container>
        <Container maxW="1600px" p={10} bg="#eee">
          <TeamMembers heading="Meet Our Team Members" />
        </Container>
      </SimpleGrid>
    </UnAuthLayout>
  );
}

export default UAbout;
