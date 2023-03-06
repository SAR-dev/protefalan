import { SimpleGrid, Container } from '@chakra-ui/react';
import AllLayout from './../../layouts/AllLayout';
import PopupVideoPlayer from './components/PopupVideoPlayer';
import CTAwithTitleSubtitle from './components/CTAwithTitleSubtitle';
import ImageCardCarousel from './components/ImageCardCarousel';
import TextImageRowCard from './components/TextImageRowCard';
import Associations from './components/Associations';
import TestimonialCarousel from './components/TestimonialCarousel';

function UHome() {
  return (
    <AllLayout>
      <SimpleGrid columns={1} spacing={24} w="100%">
        <Container maxW="1600px" p={10}>
          <PopupVideoPlayer h="70vh" />
        </Container>
        <Container maxW="1600px" p={10}>
          <CTAwithTitleSubtitle
            title="Hello!"
            align="left"
            maxW="5xl"
            subtitle="What can us, team protefalan do for you today? What do we do, you ask? We provide technical and non-technical assistance to people in various fields."
            details="We provide photography and cinematography assistance for covering all sorts of functions is it professional of personal. Our team of highly trained and experienced professional photographers and cinematographers and editors will be at your service for whatever length of time required. So, no matter what the occasion- your weddings or office meetings that you feel is cherished to you, still photographs of cinematic videographer, we got you covered. Or are you more concerned about the whole event and are anxious about the management? Why are you worried when we are here, providing solution to just that? Your event’s responsibilities are ours, just the moment you contact us! From choosing the right venue to the very end of your event, every nitty-gritty will be in our capable hands."
            moreDetails="We offer IT solutions too! We have been designing and making custom-made websites and blogs for a couple of years now and are proud to have served quite a number of clients till date. Our team is ready to provide the most top-of-the-line web solutions, just the way you want. If you can dream it, we can build it! But if you are worried about generating traffic to your website or are concerned about your business’s online reach, we can help you there as well. You see, we offer digital marketing assistance also, with a guaranteed success by making and spreading the words to potential customers through whatever means necessary! Our video contents, which will be made just for your business purposes or your personal needs, are bound to turn heads."
          />
        </Container>
        {/* <Container maxW="1600px" p={10}>
          <ImageCardCarousel heading="Our Popular Services" items={5} />
        </Container> */}
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
            title="So, this is us, in a nutshell."
            subtitle="About Photography, Cinematography and editing, Digital Marketing, Video Content generation, Website Designing, Event management and a myriad other IT related solutions, we can come of help. If you happen to be in market for any of these, what are you waiting for? We are just a call/text message away!!!"
            color="white"
          />
        </Container>
      </SimpleGrid>
    </AllLayout>
  );
}

export default UHome;
