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

function UServices() {
  const data = [
    {
      title: '',
      desc: '',
      image: 'https://i.ibb.co/Kb6kKV6/photo-1499951360447-b19be8fe80f5.png',
    },
    {
      title: '',
      desc: '',
      image: 'https://i.ibb.co/Kb6kKV6/photo-1499951360447-b19be8fe80f5.png',
    },
    {
      title: '',
      desc: '',
      image: 'https://i.ibb.co/Kb6kKV6/photo-1499951360447-b19be8fe80f5.png',
    },
    {
      title: '',
      desc: '',
      image: 'https://i.ibb.co/Kb6kKV6/photo-1499951360447-b19be8fe80f5.png',
    },
    {
      title: '',
      desc: '',
      image: 'https://i.ibb.co/Kb6kKV6/photo-1499951360447-b19be8fe80f5.png',
    },
  ];
  return (
    <UnAuthLayout>
      <SimpleGrid columns={1} spacing={24} w="100%">
        <Container maxW="1600px" p={10}>
          <ImageCarousel h="70vh" />
        </Container>
        <Container maxW="1600px" p={10}>
          <ImageCardGallery title="Digital Solutions" />
        </Container>
        <Container maxW="1600px" p={10}>
          <ImageCardGallery title="Digital Solutions" />
        </Container>
        <Container maxW="1600px" p={10}>
          <ImageCardGallery title="Digital Solutions" />
        </Container>
        <Container maxW="1600px" p={10}>
          <ImageCardGallery title="Digital Solutions" />
        </Container>
      </SimpleGrid>
    </UnAuthLayout>
  );
}

export default UServices;
