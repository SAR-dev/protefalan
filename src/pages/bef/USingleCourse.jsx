import { SimpleGrid, Container } from '@chakra-ui/react';
import ImageCarousel from './components/ImageCarousel';
import CourseInfo from './components/CourseInfo';
import AllLayout from './../../layouts/AllLayout';

function USingleCourse() {
  return (
    <AllLayout>
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
    </AllLayout>
  );
}

export default USingleCourse;
