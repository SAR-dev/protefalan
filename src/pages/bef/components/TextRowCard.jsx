import React from 'react';
import {
  Box,
  Button,
  IconButton,
  Image,
  Text,
  Flex,
  SimpleGrid,
} from '@chakra-ui/react';

const TextRowCard = ({
  h = '50vh',
  color,
  bg2,
  color2,
  title,
  subtitle,
  image,
  flip = false,
  button = false,
}) => {
  return (
    <SimpleGrid columns={1} spacing={16} h={h} color={color}>
      <Flex alignItems="center" order={flip && 2}>
        <Box maxW="850px">
          <Flex>
            <Text fontSize="2xl" fontWeight="bold" bg={bg2} color={color2}>
              {title}
            </Text>
          </Flex>
          <Text fontSize="3xl" fontWeight="bold">
            {subtitle}
          </Text>
          <Text my={5}>
            A team of Fiverr Business Success Managers is here to help match you
            with the best talent for your team - no need for endless guessing
            and interviews. A team of Fiverr Business Success Managers is here
            to help match you with the best talent for your team - no need for
            endless guessing and interviews.A team of Fiverr Business Success
            Managers is here to help match you with the best talent for your
            team - no need for endless guessing and interviews. A team of Fiverr
            Business Success Managers is here to help match you with the best
            talent for your team - no need for endless guessing and interviews.
          </Text>
          {button && <Button colorScheme="blue">View Project</Button>}
        </Box>
      </Flex>
    </SimpleGrid>
  );
};

export default TextRowCard;
