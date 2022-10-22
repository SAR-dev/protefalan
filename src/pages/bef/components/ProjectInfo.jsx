import React, { useRef, useState, useEffect, useCallback } from 'react';
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Button,
  Box,
} from '@chakra-ui/react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';

const CourseInfo = ({ title, subtitle, details }) => {
  const photos = [
    {
      src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599',
      width: 4,
      height: 3,
    },
    {
      src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799',
      width: 1,
      height: 1,
    },
    {
      src: 'https://source.unsplash.com/qDkso9nvCg0/600x799',
      width: 3,
      height: 4,
    },
    {
      src: 'https://source.unsplash.com/iecJiKe_RNg/600x799',
      width: 3,
      height: 4,
    },
    {
      src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799',
      width: 3,
      height: 4,
    },
    {
      src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599',
      width: 4,
      height: 3,
    },
    {
      src: 'https://source.unsplash.com/zh7GEuORbUw/600x799',
      width: 3,
      height: 4,
    },
    {
      src: 'https://source.unsplash.com/PpOHJezOalU/800x599',
      width: 4,
      height: 3,
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const events = {
    upcoming: [
      {
        date: '23 August 2022',
        details:
          'Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto.',
      },
      {
        date: '11 July 2022',
        details:
          'Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto.',
      },
      {
        date: '30 June 2022',
        details:
          'Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto.',
      },
    ],
    past: [
      {
        date: '23 August 2021',
        details:
          'Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto.',
      },
      {
        date: '11 July 2021',
        details:
          'Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto.',
      },
      {
        date: '30 June 2021',
        details:
          'Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto.',
      },
    ],
  };

  return (
    <>
      <Box py={10} mb={16}>
        <Heading mb={5}>{title}</Heading>
        <Text fontSize="lg">{subtitle}</Text>
        <Text fontSize="lg" my={5}>
          {details}
        </Text>
        <Gallery photos={photos} onClick={openLightbox} />
        <Box mt={10}>
          <Heading mb={5}>Events & Timeline</Heading>
          <Box w="100%" bg="gray.200" rounded="md" p={5} pos={'relative'}>
            <div className="timeline">
              {events.upcoming.map((el, i) => (
                <div className="container left">
                  <div className="content">
                    <Text fontSize="xl" fontWeight="semibold" mb={2}>
                      {el.date}
                    </Text>
                    <Text>{el.details}</Text>
                  </div>
                </div>
              ))}
              {events.past.map((el, i) => (
                <div className="container right">
                  <div className="content">
                    <Text fontSize="xl" fontWeight="semibold" mb={2}>
                      {el.date}
                    </Text>
                    <Text>{el.details}</Text>
                  </div>
                </div>
              ))}
            </div>
          </Box>
        </Box>
      </Box>
      <Box>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      </Box>
    </>
  );
};

export default CourseInfo;
