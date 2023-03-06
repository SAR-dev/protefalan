import { Box, Image, Text, SimpleGrid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ImageCardGallery = ({ h = '250px', title, images = [], cover = "", redirect }) => {
  return (
    <Box>
      <Text fontSize="3xl" fontWeight="bold" mb={5}>
        {title}
      </Text>
      <Image
        h="350px"
        w="100%"
        rounded="md"
        objectFit="cover"
        src={cover}
        mb={5}
      />
      <SimpleGrid columns={3} spacing={5} w="100%">
        {images.map((el, i) => (
          <Image
            h={h}
            w="100%"
            rounded="md"
            objectFit="cover"
            src={el}
            mb={3}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ImageCardGallery;
