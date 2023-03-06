import { SimpleGrid, Container } from '@chakra-ui/react';
import AllLayout from './../../layouts/AllLayout';
import ImageCarousel from './components/ImageCarousel';
import CTAwithTitleSubtitle from './components/CTAwithTitleSubtitle';
import TextImageRowCard from './components/TextImageRowCard';

function UProjects() {
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
        <Container bg="purple.600" maxW="1600px" p={10}>
          <TextImageRowCard
            button={true}
            title="Animecon Dhaka"
            description="Animecon Dhaka is considered to be the most prime anime convention in Bangladesh which is founded by Oly Shahriar Hasan and Wakil Ahmed Shabi. It was back 2016 when the event first came to a life. With more than 1000 audiences the event was a huge success. The event was covered by Radio Dhol 94.0 FM as well as The Daily Sun. Having such a huge participant made the organizers believe that they can take it to the next level and so they did in 2017 and 2019 where they could create a huge fan base for all the anime fans in Bangladesh. Animecon Dhaka now aims to continue its event each and every year where they are planning to bring more features and take it to the international level."
            color="white"
            bg2="pink.500"
            color2="white"
            image="https://i.ibb.co/1X2X8cQ/Animecon-Dhaka-Title-Image.png"
            redirect="/u/projects/animecon_dhaka"
          />
        </Container>
        <Container maxW="1600px" p={10}>
          <TextImageRowCard
            button={true}
            title="Megacon Bangladesh"
            description="Megacon Bangladesh is a pop culture event which was first launched in 2018. The event was founded by Oly Shahriar Hasan and Ishtiaque Ahmed Tapu. With more than 2000 participants the event was a huge success. The event aims to spread itself to the international market where they can bring guests from aboard like international cosplay artist, comic developers, writers and different types of celebrities."
            bg2="pink.500"
            color2="white"
            image="https://i.ibb.co/fH3svCw/Megacon-Bangladesh-Title-Image.jpg"
            redirect="/u/projects/megacon_bangladesh"
            flip={true}
          />
        </Container>
        <Container bg="purple.600" maxW="1600px" p={10}>
          <TextImageRowCard
            button={true}
            title="Deshi Geek"
            description="It’s the first pop culture magazine in Bangladesh & is published by Oly Shahriar Hasan, a very dedicated and high ambitious person, also considered a good public speaker. He was fascinated by the ever-growing pop culture which motivated him to publish the magazine. The ever-growing popularity of pop culture in Bangladesh is giving rise to fans of various pop culture platforms every day. Movies, Anime, Korean drama and music, TV series from all over the world… you name it and you are sure to find some fans of any of the pop culture platforms in Bangladesh nowadays especially in the capital, Dhaka. This huge population of fans and enthusiasts needed a voice and so, Deshi Geek was founded just for that purpose!"
            color="white"
            bg2="pink.500"
            color2="white"
            image="https://i.ibb.co/bR706Sq/Dhaka-Book-Expo-Title-Image.png"
            redirect="/u/projects/deshi_geek"
          />
        </Container>
        <Container maxW="1600px" p={10}>
          <TextImageRowCard
            button={true}
            title="Dhaka Book Expo"
            description="Dhaka Book Expo is considered to be one of prime book convention in Bangladesh. The event aims to promote writers, publishers, artists from all over the country; also it aims to take the event to the international level by brining international guests in the event. The event paved the way for new writers by throwing an online competition in 2018 and this results a huge success in terms of hunting new talented writers. The organizers of Dhaka Book Expo believe that there are new talented writers who are looking for a platform to show their talents and Dhaka Book Expo aims to create that platform for them."
            bg2="pink.500"
            color2="white"
            image="https://i.ibb.co/MBKbjtj/Deshi-Geek-Title-Image.png"
            redirect="/u/projects/dhaka_book_expo"
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
    </AllLayout>
  );
}

export default UProjects;
