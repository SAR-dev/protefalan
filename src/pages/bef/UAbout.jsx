import { SimpleGrid, Container } from '@chakra-ui/react';
import GlobalLayout from './../../layouts/GLobalLayout';
import ImageCarousel from './components/ImageCarousel';
import CTAwithTitleSubtitle from './components/CTAwithTitleSubtitle';
import TextImageRowCard from './components/TextImageRowCard';
import TeamMembers from './components/TeamMembers';

function UAbout() {
  return (
    <GlobalLayout>
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
            image="https://i.ibb.co/1X6zLkV/image.png"
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
    </GlobalLayout>
  );
}

export default UAbout;
