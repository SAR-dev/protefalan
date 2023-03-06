import { Box, Button, Image, Text, Flex, SimpleGrid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const TextImageRowCard = ({
  h = '50vh',
  color,
  bg2,
  color2,
  title,
  subtitle,
  description = "",
  image,
  flip = false,
  button = false,
  redirect,
}) => {
  return (
    <SimpleGrid columns={2} spacing={16} h={h} color={color}>
      <Flex alignItems="center" order={flip && 2}>
        <Box>
          <Flex>
            <Text fontSize="2xl" fontWeight="bold" bg={bg2} color={color2}>
              {title}
            </Text>
          </Flex>
          <Text fontSize="3xl" fontWeight="bold">
            {subtitle}
          </Text>
          <Text my={5}>
            {description}
          </Text>
          {button && (
            <Button
              colorScheme="blue"
              as={redirect && Link}
              to={redirect && `${redirect}`}
            >
              View Project
            </Button>
          )}
        </Box>
      </Flex>
      <Flex order={flip && 1}>
        <Image src={image} h={h} w="100%" objectFit="cover" rounded="md" />
      </Flex>
    </SimpleGrid>
  );
};

export default TextImageRowCard;
