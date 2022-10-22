import React, { useRef, useState, useEffect } from 'react';
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Button,
  Box,
} from '@chakra-ui/react';
import ImageCarousel from './ImageCarousel';

const CourseInfo = ({ title, subtitle, details }) => {
  const parentRef = useRef(null);
  const [parentHeight, setParentHeight] = useState('');
  const features = [
    'Be able to build ANY website you want.',
    'Build fully-fledged web apps for your startup.',
    'Master backend development with Node',
    'Learn the latest frameworks and technologies.',
    'Work as a freelance web developer.',
  ];

  useEffect(() => {
    if (parentRef.current) {
      setParentHeight(parentRef.current.offsetHeight);
    }
  }, [parentRef]);

  const Feature = ({ text, icon, iconBg }) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          textAlign={'center'}
          rounded={'full'}
          bg={iconBg}
        >
          {icon}
        </Flex>
        <Text>{text}</Text>
      </Stack>
    );
  };
  return (
    <Box py={10}>
      <Box mb={16}>
        <Heading mb={5}>{title}</Heading>
        <Text fontSize="lg">{subtitle}</Text>
        <Text fontSize="lg" mt={3}>
          {details}
        </Text>
      </Box>
      <SimpleGrid columns={2} spacing={10}>
        <Stack spacing={4}>
          <Heading>What You Will Learn</Heading>
          <Text>
            Become a Full-Stack Web Developer with just ONE course. HTML, CSS,
            Javascript, Node, React, MongoDB, build real projects
          </Text>
          <Stack spacing={4}>
            {features.map((el, i) => (
              <Feature
                icon={
                  <Text color={'purple.500'} w={5} h={5}>
                    {i + 1}
                  </Text>
                }
                iconBg={'purple.100'}
                text={el}
              />
            ))}
          </Stack>
        </Stack>
        <Flex h="100%" ref={parentRef}>
          <ImageCarousel h={parentHeight} />
        </Flex>
      </SimpleGrid>
      <Flex
        alignItems="center"
        p={5}
        rounded="md"
        bg="purple.500"
        color="white"
        mt={10}
      >
        <Text fontWeight="semibold" fontSize="xl">
          Feeling Interested ?
        </Text>
        <Button
          colorScheme="blue"
          variant="ghost"
          bg="white"
          color="black"
          ml="auto"
        >
          Subscribe Course
        </Button>
      </Flex>
    </Box>
  );
};

export default CourseInfo;
