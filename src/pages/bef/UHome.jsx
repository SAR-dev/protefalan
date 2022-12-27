import { SimpleGrid, Container } from '@chakra-ui/react';
import GlobalLayout from './../../layouts/GLobalLayout';
import PopupVideoPlayer from './components/PopupVideoPlayer';
import CTAwithTitleSubtitle from './components/CTAwithTitleSubtitle';
import ImageCardCarousel from './components/ImageCardCarousel';
import TextImageRowCard from './components/TextImageRowCard';
import Associations from './components/Associations';
import TestimonialCarousel from './components/TestimonialCarousel';

function UHome() {
  return (
    <GlobalLayout>
      <SimpleGrid columns={1} spacing={24} w="100%">
        <Container maxW="1600px" p={10}>
          <PopupVideoPlayer h="70vh" />
        </Container>
        <Container maxW="1600px" p={10}>
          <CTAwithTitleSubtitle
            title="A business solution designed for teams"
            subtitle="Google LLC is an American multinational technology company focusing on search engine technology, online advertising, cloud computing, computer software, quantum computing, e-commerce, artificial intelligence, and consumer electronics."
          />
        </Container>
        <Container maxW="1600px" p={10}>
          <ImageCardCarousel heading="Our Popular Services" items={5} />
        </Container>
        <Container bg="purple.600" maxW="1600px" p={10}>
          <TextImageRowCard
            title="Logo Maker"
            subtitle="Make an incredible logo in minutes"
            color="white"
            bg2="pink.500"
            color2="white"
            image="https://i.ibb.co/1X6zLkV/image.png"
          />
        </Container>
        <Container maxW="1600px" p={10}>
          <TextImageRowCard
            title="Logo Maker"
            subtitle="Make an incredible logo in minutes"
            bg2="pink.500"
            color2="white"
            image="https://i.ibb.co/1X6zLkV/image.png"
            flip={true}
          />
        </Container>
        <Container maxW="1600px" p={10} bg="#eee">
          <TestimonialCarousel />
        </Container>
        <Container maxW="1600px" p={10}>
          <Associations title="We Are Sponsored By" />
        </Container>
        <Container maxW="1600px" p={10} backgroundImage="https://preview.redd.it/amr02cv8tfn61.png?auto=webp&s=0d7770bd223c574a960ab90d1d337d3e969f7e93">
          <CTAwithTitleSubtitle
            title="A business solution designed for teams"
            subtitle="Upgrade to a curated experience packed with tools and benefits, dedicated to businesses. Upgrade to a curated experience packed with tools and benefits, dedicated to businesses"
            color="white"
          />
        </Container>
      </SimpleGrid>
    </GlobalLayout>
  );
}

export default UHome;
