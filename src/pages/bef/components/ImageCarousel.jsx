import { useState } from 'react';
import { Box, Icon, IconButton, Image } from '@chakra-ui/react';
import ItemsCarousel from 'react-items-carousel';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

const ImageCarousel = ({ h = '320px', images = [], items = 1, objectFit="contain" }) => {
  const [data, setData] = useState(images)
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  return (
    <Box h={h} w="100%" overflow="hidden" role="group">
      {images.length !== 0 && (
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={items}
        leftChevron={
          <IconButton
            opacity="0"
            _groupHover={{ opacity: 1 }}
            rounded="full"
            boxShadow="md"
            ml={2}
            icon={<Icon as={AiOutlineArrowLeft} />}
          />
        }
        rightChevron={
          <IconButton
            opacity="0"
            _groupHover={{ opacity: 1 }}
            rounded="full"
            boxShadow="md"
            mr={2}
            icon={<Icon as={AiOutlineArrowRight} />}
          />
        }
      >
        {data.map((el, i) => (
          <Box w="100%" pos="relative" rounded="md" key={i}>
            <Image
              className="background"
              src={el}
            />
            <Image
              h={h}
              w="100%"
              rounded="md"
              objectFit={objectFit}
              src={el}
            />
          </Box>
        ))}
      </ItemsCarousel>
      )}
    </Box>
  );
};

export default ImageCarousel;
