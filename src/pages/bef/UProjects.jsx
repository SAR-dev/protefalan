import { SimpleGrid, Container } from '@chakra-ui/react';
import GlobalLayout from './../../layouts/GLobalLayout';
import ImageCarousel from './components/ImageCarousel';
import CTAwithTitleSubtitle from './components/CTAwithTitleSubtitle';
import TextImageRowCard from './components/TextImageRowCard';

function UProjects() {
  return (
    <GlobalLayout>
      <SimpleGrid columns={1} spacing={24} w="100%">
      <Container maxW="1600px" p={10}>
          <ImageCarousel h="70vh" />
        </Container>
        <Container bg="purple.600" maxW="1600px" p={10}>
          <TextImageRowCard
            button={true}
            title="Logo Maker"
            subtitle="Make an incredible logo in minutes"
            color="white"
            bg2="pink.500"
            color2="white"
            image="https://i.ibb.co/1X6zLkV/image.png"
            redirect="/u/projects"
          />
        </Container>
        <Container maxW="1600px" p={10}>
          <TextImageRowCard
            button={true}
            title="Logo Maker"
            subtitle="Make an incredible logo in minutes"
            bg2="pink.500"
            color2="white"
            image="https://i.ibb.co/1X6zLkV/image.png"
            redirect="/u/projects"
            flip={true}
          />
        </Container>
        <Container bg="purple.600" maxW="1600px" p={10}>
          <TextImageRowCard
            button={true}
            title="Logo Maker"
            subtitle="Make an incredible logo in minutes"
            color="white"
            bg2="pink.500"
            color2="white"
            image="https://i.ibb.co/1X6zLkV/image.png"
            redirect="/u/projects"
          />
        </Container>
        <Container maxW="1600px" p={10}>
          <TextImageRowCard
            button={true}
            title="Logo Maker"
            subtitle="Make an incredible logo in minutes"
            bg2="pink.500"
            color2="white"
            image="https://i.ibb.co/1X6zLkV/image.png"
            redirect="/u/projects"
            flip={true}
          />
        </Container>
        <Container maxW="1600px" p={10}>
          <CTAwithTitleSubtitle
            title="A business solution designed for teams"
            subtitle="Upgrade to a curated experience packed with tools and benefits, dedicated to businesses. Upgrade to a curated experience packed with tools and benefits, dedicated to businesses"
            redirect={true}
          />
        </Container>
      </SimpleGrid>
    </GlobalLayout>
  );
}

export default UProjects;
