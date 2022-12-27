import { SimpleGrid, Container } from '@chakra-ui/react';
import GlobalLayout from './../../layouts/GLobalLayout';
import ImageCarousel from './components/ImageCarousel';
import ProjectInfo from './components/ProjectInfo';

function USingleProject() {
  return (
    <GlobalLayout>
      <SimpleGrid columns={1} spacing={24} w="100%">
        <Container maxW="5xl" p={10}>
          <ImageCarousel h="70vh" />
          <ProjectInfo
            title="Complete Web Development"
            subtitle="Upgrade to a curated experience packed with tools and benefits, dedicated to businesses. Upgrade to a curated experience packed with tools and benefits, dedicated to businesses"
            details="Upgrade to a curated experience packed with tools and benefits, dedicated to businesses. Upgrade to a curated experience packed with tools and benefits, dedicated to businesses"
          />
        </Container>
      </SimpleGrid>
    </GlobalLayout>
  );
}

export default USingleProject;
