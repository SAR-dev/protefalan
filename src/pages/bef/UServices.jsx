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
        <Container maxW="1600px" px={10}>
          <ImageCarousel h="500px" images={[
            "https://i.ibb.co/1X2X8cQ/Animecon-Dhaka-Title-Image.png",
            "https://i.ibb.co/fH3svCw/Megacon-Bangladesh-Title-Image.jpg",
            "https://i.ibb.co/bR706Sq/Dhaka-Book-Expo-Title-Image.png",
            "https://i.ibb.co/MBKbjtj/Deshi-Geek-Title-Image.png"
          ]} />
        </Container>

        <Container maxW="1600px" px={10}>
          <ImageCardGallery
            title="Digital Solutions"
            cover="https://i.ibb.co/89QBhbj/Digital-Solution.jpg"
            images={[
              "https://i.ibb.co/1X6zLkV/image.png",
              "https://i.ibb.co/1X6zLkV/image.png",
              "https://i.ibb.co/1X6zLkV/image.png",
            ]} />
        </Container>

        <Container maxW="1600px" px={10}>
          <ImageCardGallery
            title="Match Making"
            cover="https://i.ibb.co/j8X0BFs/Match-Making.jpg"
            images={[
              "https://i.ibb.co/1X6zLkV/image.png",
              "https://i.ibb.co/1X6zLkV/image.png",
              "https://i.ibb.co/1X6zLkV/image.png",
            ]} />
        </Container>

        <Container maxW="1600px" px={10}>
          <ImageCardGallery
            title="Training Program"
            cover="https://i.ibb.co/svr1NG8/Training-Program.jpg"
            images={[
              "https://i.ibb.co/1X6zLkV/image.png",
              "https://i.ibb.co/1X6zLkV/image.png",
              "https://i.ibb.co/1X6zLkV/image.png",
            ]} />
        </Container>

        <Container maxW="1600px" px={10}>
          <ImageCardGallery
            title="Space Rental"
            cover="https://i.ibb.co/5rHqZXH/Space-Rental.jpg"
            images={[
              "https://i.ibb.co/1X6zLkV/image.png",
              "https://i.ibb.co/1X6zLkV/image.png",
              "https://i.ibb.co/1X6zLkV/image.png",
            ]} />
        </Container>

        <Container maxW="1600px" px={10}>
          <ImageCardGallery
            title="Event Solution"
            cover="https://i.ibb.co/9r7gfBx/Event-Solution.jpg"
            images={[
              "https://i.ibb.co/1X6zLkV/image.png",
              "https://i.ibb.co/1X6zLkV/image.png",
              "https://i.ibb.co/1X6zLkV/image.png",
            ]} />
        </Container>

        <Container maxW="1600px" px={10}>
          <ImageCardGallery
            title="Print & Marchandizing"
            cover="https://i.ibb.co/QHsqnvC/Print-Marchandizing.jpg"
            images={[
              "https://i.ibb.co/1X6zLkV/image.png",
              "https://i.ibb.co/1X6zLkV/image.png",
              "https://i.ibb.co/1X6zLkV/image.png",
            ]} />
        </Container>
      </SimpleGrid>
    </AllLayout>
  );
}

export default UServices;
