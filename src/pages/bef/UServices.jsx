import { SimpleGrid, Container } from '@chakra-ui/react';
import ImageCarousel from './components/ImageCarousel';
import ImageCardGallery from './components/ImageCardGallery';
import AllLayout from './../../layouts/AllLayout';

function UServices() {
  const data = [
    {
      title: '',
      desc: '',
      image: 'https://i.ibb.co/1X6zLkV/image.png',
    },
    {
      title: '',
      desc: '',
      image: 'https://i.ibb.co/1X6zLkV/image.png',
    },
    {
      title: '',
      desc: '',
      image: 'https://i.ibb.co/1X6zLkV/image.png',
    },
    {
      title: '',
      desc: '',
      image: 'https://i.ibb.co/1X6zLkV/image.png',
    },
    {
      title: '',
      desc: '',
      image: 'https://i.ibb.co/1X6zLkV/image.png',
    },
  ];
  return (
    <AllLayout>
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
    </AllLayout>
  );
}

export default UServices;
