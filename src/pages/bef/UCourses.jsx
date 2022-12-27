import { SimpleGrid, Container } from '@chakra-ui/react';
import AllLayout from './../../layouts/AllLayout';
import ImageCarousel from './components/ImageCarousel';
import CTAwithTitleSubtitle from './components/CTAwithTitleSubtitle';
import ImageCardGallery from './components/ImageCardGallery';

function UCourses() {
  return (
    <AllLayout>
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
    </AllLayout>
  );
}

export default UCourses;
