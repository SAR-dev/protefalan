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
import ImageCardGallery from './components/ImageCardGallery';

function UCourses() {
  return (
    <UnAuthLayout>
      <SimpleGrid columns={1} spacing={24} w="100%">
        <Container maxW="1600px" p={10}>
          <ImageCarousel h="70vh" />
        </Container>
        <Container maxW="1600px" p={10}>
          <CTAwithTitleSubtitle
            title="Our Courses"
            subtitle="Upgrade to a curated experience packed with tools and benefits, dedicated to businesses. Upgrade to a curated experience packed with tools and benefits, dedicated to businesses"
            details="Upgrade to a curated experience packed with tools and benefits, dedicated to businesses. Upgrade to a curated experience packed with tools and benefits, dedicated to businesses"
          />
        </Container>
        <Container maxW="1600px" p={10}>
          <ImageCardGallery title="Digital Solutions" redirect="/u/courses" />
        </Container>
        <Container maxW="1600px" p={10}>
          <ImageCardGallery title="Digital Solutions" redirect="/u/courses" />
        </Container>
        <Container maxW="1600px" p={10}>
          <ImageCardGallery title="Digital Solutions" redirect="/u/courses" />
        </Container>
        <Container maxW="1600px" p={10}>
          <ImageCardGallery title="Digital Solutions" redirect="/u/courses" />
        </Container>
        <Container maxW="1600px" p={10} mb={10}>
          <CTAwithTitleSubtitle
            title="A business solution designed for teams"
            subtitle="Upgrade to a curated experience packed with tools and benefits, dedicated to businesses. Upgrade to a curated experience packed with tools and benefits, dedicated to businesses"
            redirect={true}
          />
        </Container>
      </SimpleGrid>
    </UnAuthLayout>
  );
}

export default UCourses;
