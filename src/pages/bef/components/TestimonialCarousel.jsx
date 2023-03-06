import { Box, Icon, IconButton, Image, Text, Flex } from '@chakra-ui/react';

const TestimonialCarousel = ({ h = '320px', items = 1, heading }) => {
  const data = [
    {
      name: 'Mehedi Hasan',
      avatar: 'https://i.ibb.co/YpnMQ2j/Testimonial-1-Mehedi-Hasan.jpg',
      quote1: "A year ago, when I had a business event to launch for my new business initiative, I was facing much problems, I could not trust just any event management firm since I had bitter experiences with some of them in the past. And, in my event, buyers and investors from foreign countries were going to participate so I needed the event to be done professionally and done well.",
      quote2: "At that crisis time, I contacted protefalan event service because a friend of mine recommended them to me. I trusted them with the event and of course, I was not disappointed. Their work ethics impressed me. I was able to launch the event properly and without a single issue I was able to finish the business event and my foreigner partners were also very much impressed with the work. They managed every little detail of the event and also covered the event by camera with their photographers and cinematographers and the photography team was just as good as the event management team.",
      quote3: "I definitely recommend them to anyone looking for an event management team upon whom one can put his faith completely; a group of professionals anyone can go to for help without a risk of disappointment. I wish them all the best for their future events and hope we get to work together more in the upcoming times.",
    },
    {
      name: "Shourov Ahmed",
      avatar: 'https://i.ibb.co/1rsvS80/Testimonial-3-Shourov-Ahmed.jpg',
      quote1: "I hired protefalan event service team for my wedding a couple of months ago and I am completely satisfied with their work. They are professional and smart. They looked after all the things of the wedding. They designed and arranged the venue just like I wanted. They covered the entire ceremony with two professional cameraman and the photos were good too. Everyone praised the videos they made. Their cinematographers were better than we expected. They even chose the venue of the reception for me as I was a bit confused and also designed and ordered the wedding cake on their own too and they did that as a favor free of charge!",
      quote2: "Their behaviour was very friendly. They listened to me calmly, took notes of everything I said and did everything just as I told them. I am very impressed with their behavior. They place their customer’s need first. So, anyone can hire them for event management like I did for my wedding."
    },
    {
      name: "Zahid Hasan",
      avatar: 'https://i.ibb.co/hYzKGM5/Testimonial-2-Zahid-Hasan.jpg',
      quote1: "My new online-based business was failing. The website attracted no traffic and online sells were not as expected. Doing marketing online seemed expensive and difficult. So I took Protefalan IT service’s help. It worked like magic. Thanks to their digital marketing solution, now my business is well known in online and social media platforms. They told me my website was not professional. So they made a new website. It looks better now and it attracts a lot of online traffic also. The sell are now going very good. They also made videos for my business. Those videos helped a lot to reach to my clients. ",
      quote2: "The entire team is very friendly and understood my problems well. They rescued me from loss. I appreciate their work a lot. They are also very honest people. I hope they keep up the good work. I wish them all the best for future."
    }
  ];

  return (
    <Box>
      <Text fontSize="3xl" fontWeight="bold" mb={5}>
        {heading}
      </Text>
      {data.map((el, i) => (
        <Box w="100%" p={16} mb={10} rounded="xl" bg="white" boxShadow="md">
          <Flex alignItems="center">
            <Box w="350px" flexShrink="0">
              <Image
                src={el.avatar}
                objectFit="cover"
                h="200px"
                w="200px"
                rounded="full"
                mx="auto"
              />
              <Text fontWeight="bold" fontSize="xl" align="center" mt="20px">{el.name}</Text>
            </Box>
            <Box>
              <Box pos="relative">
                {el.quote1 && (
                  <Text fontSize="xl">
                    {el.quote1}
                  </Text>
                )}
                {el.quote2 && (
                  <Text fontSize="xl" mt={3}>
                    {el.quote2}
                  </Text>
                )}
                {el.quote3 && (
                  <Text fontSize="xl" mt={3}>
                    {el.quote3}
                  </Text>
                )}
              </Box>
            </Box>
          </Flex>
        </Box>
      ))}
    </Box>
  );
};

export default TestimonialCarousel;
