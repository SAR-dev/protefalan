import { useState } from 'react';
import {
  Flex,
  Box,
  Button,
  Icon,
  Text,
  SimpleGrid,
  HStack,
  StackDivider,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { FaCheck } from 'react-icons/fa';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { BiReset } from 'react-icons/bi';
import { parseText, capitalizeFirstLetter } from '../helpers'
import PlaceOrder from './PlaceOrder';

const bools = ["prototype", "content_upload", "source_file", "consulatation", "deployment", "integration"]

const GigRightPanel = ({ requirements, extra_services, packages }) => {
  const [active, setActive] = useState(packages[0]);

  if(packages.length > 0){
  return (
    <Box d="inline">
      <Box
        w="100%"
        borderWidth="1px"
        borderColor="gray.200"
        rounded="md"
        overflow="hidden"
        pos="sticky"
        top="15px"
      >
        <HStack spacing={0} divider={<StackDivider borderColor="gray.200" />}>
          {packages.map((el, i) => (
            <Flex
              w="100%"
              justifyContent="center"
              alignItems="center"
              py={3}
              fontWeight="semibold"
              color={active.id === el.id ? 'teal.500' : 'gray.700'}
              bg={active.id === el.id ? 'white' : 'gray.50'}
              borderBottomWidth={active.id === el.id ? '2px' : '1px'}
              borderBottomColor={
                active.id === el.id ? 'teal.500' : 'gray.200'
              }
              cursor="pointer"
              onClick={() => setActive(el)}
              key={i}
            >
              {el.title}
            </Flex>
          ))}
        </HStack>
        <SimpleGrid columns={1} spacing={6} p={6}>
          <Flex fontSize="xl">
            <Text fontWeight="bold" color="gray.700">
              {active.title}
            </Text>
            <Text fontWeight="bold" color="gray.700" ml="auto">
              $ {active.price}
            </Text>
          </Flex>

          <Text color="gray.700">{active.description}</Text>

          <Flex alignItems="center">
            <Icon as={AiOutlineFieldTime} h={5} w={5} color="gray.700" mr={2} />
            <Text fontSize="sm" fontWeight="semibold" color="gray.700" mr={4}>
              {active.duration_in_days} Days Delivery
            </Text>
            <Icon as={BiReset} h={5} w={5} color="gray.700" mr={2} />
            <Text fontSize="sm" fontWeight="semibold" color="gray.700">
              {active.revisions} Revisions
            </Text>
          </Flex>

          <List spacing={2}>
            {extra_services
              .map((el, i) => (
                <ListItem color="gray.700" key={i}>
                  <ListIcon as={FaCheck} color={"green.500"} />
                  {parseText(el)}
                </ListItem>
              ))}
              {bools
              .map((el, i) => (
                <ListItem color="gray.700" key={i}>
                  <ListIcon as={FaCheck} color={active[el] ? "green.500" : "gray.200"} />
                  {capitalizeFirstLetter(el.split("_").join(" "))}
                </ListItem>
              ))}
          </List>
          <Box mb={2}>
            <PlaceOrder label={`Continue ($${active.price})`} packageName={active.title} price={active.price}  requirements={requirements} packageId={active.id} />
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
} else {
  return <></>
}
};

export default GigRightPanel;
