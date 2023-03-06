import { SimpleGrid, Container } from '@chakra-ui/react';
import AllLayout from '../../layouts/AllLayout';
import ImageCarousel from './components/ImageCarousel';
import CTAwithTitleSubtitle from './components/CTAwithTitleSubtitle';
import TextImageRowCard from './components/TextImageRowCard';
import TeamMembers from './components/TeamMembers';

function UAbout() {
  return (
    <AllLayout>
      <SimpleGrid columns={1} spacing={24} w="100%">
        <Container maxW="1600px" px={10}>
          <ImageCarousel h="500px" images={["https://i.ibb.co/7nMfmFz/1.jpg", "https://i.ibb.co/C7LKXZc/3.jpg", "https://i.ibb.co/8z66VZJ/tappu.jpg"]} />
        </Container>
        <Container maxW="1600px" p={10}>
          <TextImageRowCard
            title="Know about us"
            subtitle="Who We Are?"
            description="We are a team of highly motivated and enthusiastic professionals who came together to form a company aiming to develop an innovative platform for several sectors of IT, event management and publications. Our services consist of mainly IT based solutions such as different kinds of IT based client services, ranging from software development to digital marketing solutions and even training programs! Apart from that, one ought to find us helpful if he is in the market for event management solutions too. Moreover, our studio and production house are available for your services as well since we hope to contribute on the development of the film sector in Bangladesh. And, last but not the least, we provide publications related solutions and consultancy too through our very own publication house- “DeshiGeek”, which proudly boasts its own pop-culture magazine (the first of its kind in Bangladesh), comics and books."
            bg2="pink.500"
            color2="white"
            image="https://i.ibb.co/1X6zLkV/image.png"
          />
        </Container>
        <Container maxW="1600px" p={10}>
          <CTAwithTitleSubtitle
            title="Our Mission"
            details="To create a better future for everyone in our society by providing solutions to their everyday personal and professional problems alike, though both technical and non-technical services and eventually form a better ecosystem."
          />
        </Container>
        <Container maxW="1600px" p={10}>
          <CTAwithTitleSubtitle
            title="Our Vission"
            details="To create an advanced and better ecosystem through progressive and innovative use of technology."
          />
        </Container>
        <Container maxW="1600px" p={10} bg="#eee">
          <TeamMembers heading="Meet Our Team Members" />
        </Container>
      </SimpleGrid>
    </AllLayout>
  );
}

export default UAbout;
