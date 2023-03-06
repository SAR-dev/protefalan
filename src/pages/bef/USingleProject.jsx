import { SimpleGrid, Container } from '@chakra-ui/react';
import AllLayout from './../../layouts/AllLayout';
import ProjectInfo from './components/ProjectInfo';
import {
  useParams
} from "react-router-dom";

function USingleProject() {
  let { slug } = useParams();
  const data = {
    "animecon_dhaka": {
      title: "Animecon Dhaka",
      details: "Animecon Dhaka is considered to be the most prime anime convention in Bangladesh which is founded by Oly Shahriar Hasan and Wakil Ahmed Shabi. It was back 2016 when the event first came to a life. With more than 1000 audiences the event was a huge success. The event was covered by Radio Dhol 94.0 FM as well as The Daily Sun. Having such a huge participant made the organizers believe that they can take it to the next level and so they did in 2017 and 2019 where they could create a huge fan base for all the anime fans in Bangladesh. Animecon Dhaka now aims to continue its event each and every year where they are planning to bring more features and take it to the international level.",
      images: [
        'https://i.ibb.co/D9K8nYc/1-1.jpg',
        'https://i.ibb.co/tmjcZz0/1-2.jpg',
        'https://i.ibb.co/xjGhp1V/1-3.jpg',
        'https://i.ibb.co/jTVjL62/1-4.jpg',
        'https://i.ibb.co/5522FDC/1-5.jpg',
        'https://i.ibb.co/dmg2H4G/1-6.jpg',
        'https://i.ibb.co/3YpcfW7/1-7.jpg'
      ]
    },
    "deshi_geek": {
      title: "Deshi Geek",
      details: "It’s the first pop culture magazine in Bangladesh & is published by Oly Shahriar Hasan, a very dedicated and high ambitious person, also considered a good public speaker. He was fascinated by the ever-growing pop culture which motivated him to publish the magazine. The ever-growing popularity of pop culture in Bangladesh is giving rise to fans of various pop culture platforms every day. Movies, Anime, Korean drama and music, TV series from all over the world… you name it and you are sure to find some fans of any of the pop culture platforms in Bangladesh nowadays especially in the capital, Dhaka. This huge population of fans and enthusiasts needed a voice and so, Deshi Geek was founded just for that purpose!",
      images: [
        'https://i.ibb.co/h1fgnz8/1-1.jpg',
        'https://i.ibb.co/yk6VJMD/1-2.jpg',
        'https://i.ibb.co/4KjX5Bv/1-3.jpg',
        'https://i.ibb.co/vvJSTm9/1-4.jpg',
        'https://i.ibb.co/y88t73L/1-5.jpg',
        'https://i.ibb.co/PMZDbyq/1-6.jpg',
        'https://i.ibb.co/8NPP38M/1-7.jpg'
      ]
    },
    "dhaka_book_expo": {
      title: "Dhaka Book Expo",
      details: "Dhaka Book Expo is considered to be one of prime book convention in Bangladesh. The event aims to promote writers, publishers, artists from all over the country; also it aims to take the event to the international level by brining international guests in the event. The event paved the way for new writers by throwing an online competition in 2018 and this results a huge success in terms of hunting new talented writers. The organizers of Dhaka Book Expo believe that there are new talented writers who are looking for a platform to show their talents and Dhaka Book Expo aims to create that platform for them.",
      images: [
        'https://i.ibb.co/CnS31GS/1-1.jpg',
        'https://i.ibb.co/bRjmtz1/1-2.jpg',
        'https://i.ibb.co/XYgGbcc/1-3.jpg',
        'https://i.ibb.co/sJ1ZWQG/1-4.jpg',
        'https://i.ibb.co/ykw6mrw/1-5.jpg',
        'https://i.ibb.co/CJkdn8Y/1-6.jpg',
        'https://i.ibb.co/Y2wMkS9/1-7.jpg'
      ]
    },
    "megacon_bangladesh": {
      title: "Megacon Bangladesh",
      details: "Megacon Bangladesh is a pop culture event which was first launched in 2018. The event was founded by Oly Shahriar Hasan and Ishtiaque Ahmed Tapu. With more than 2000 participants the event was a huge success. The event aims to spread itself to the international market where they can bring guests from aboard like international cosplay artist, comic developers, writers and different types of celebrities.",
      images: [
        'https://i.ibb.co/2n0yp8F/1-5.jpg',
        'https://i.ibb.co/LRVgP80/1-1.jpg',
        'https://i.ibb.co/0VNv6yh/1-2.jpg',
        'https://i.ibb.co/Q6hbKVp/1-3.jpg',
        'https://i.ibb.co/hYx94t8/1-4.jpg',
        'https://i.ibb.co/sPd0MYC/1-6.jpg',
        'https://i.ibb.co/4KT8GGm/1-7.jpg'
      ]
    }
  }
  return (
    <AllLayout>
      <SimpleGrid columns={1} spacing={24} w="100%">
        <Container maxW="5xl" p={10}>
          <ProjectInfo
            title={data[slug].title}
            photos={data[slug].images}
            subtitle=""
            details={data[slug].details}
          />
        </Container>
      </SimpleGrid>
    </AllLayout>
  );
}

export default USingleProject;
