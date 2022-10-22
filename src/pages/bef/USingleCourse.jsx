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
import TextRowCard from './components/TextRowCard';
import CourseInfo from './components/CourseInfo';

function USingleCourse() {
  return (
    <UnAuthLayout>
      <SimpleGrid columns={1} spacing={24} w="100%">
        <Container maxW="5xl" p={10}>
          <ImageCarousel h="70vh" />
          <CourseInfo
            title="Complete Web Development"
            subtitle="Upgrade to a curated experience packed with tools and benefits, dedicated to businesses. Upgrade to a curated experience packed with tools and benefits, dedicated to businesses"
            details="Upgrade to a curated experience packed with tools and benefits, dedicated to businesses. Upgrade to a curated experience packed with tools and benefits, dedicated to businesses"
          />
        </Container>
      </SimpleGrid>
    </UnAuthLayout>
  );
}

export default USingleCourse;
