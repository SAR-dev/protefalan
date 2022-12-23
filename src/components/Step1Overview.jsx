import React, { useState } from 'react';
import {
  Flex,
  Box,
  Button,
  Icon,
  IconButton,
  Image,
  Text,
  SimpleGrid,
  Grid,
  GridItem,
  Avatar,
  Heading,
  HStack,
  Divider,
  Select,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { getCategoryList } from '../api';

const Step1Overview = ({ title, setTitle, tags, setTags, category, setCategory, save }) => {
  const { status, data, error, isFetching, isLoading, isError } = useQuery(["categories"], () => getCategoryList())

  return (
    <Box p={10} borderWidth="1px" borderColor="gray.200" rounded="md">
      <SimpleGrid columns={1} spacing={5}>
        <Flex>
          <Text
            w="100px"
            flexShrink="0"
            mr={5}
            textAlign="right"
            fontWeight="semibold"
            color="gray.700"
          >
            Gig Title
          </Text>
          <Box w="100%">
            <Input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <Flex fontSize="xs" mt={1}>
              <Text
                ml="auto"
                color={title.length > 80 ? 'red.400' : 'gray.400'}
              >
                {title.length}/80
              </Text>
            </Flex>
          </Box>
        </Flex>

        <Flex>
          <Text
            w="100px"
            flexShrink="0"
            mr={5}
            textAlign="right"
            fontWeight="semibold"
            color="gray.700"
          >
            Category
          </Text>
          <Select
            onChange={e => setCategory(e.target.value)}
            value={category}
          >
            <option value="" disabled selected>
              Select A Category
            </option>
            {!isLoading && (<>
              {data && data.results.map((el, i) => (
                <option value={el.id} key={i}>
                  {el.name}
                </option>
              ))}
            </>)}
          </Select>
        </Flex>
        <Flex>
          <Text
            w="100px"
            flexShrink="0"
            mr={5}
            textAlign="right"
            fontWeight="semibold"
            color="gray.700"
          >
            Gig Tags
          </Text>
          <Box w="100%">
            <Input
              type="text"
              value={tags}
              onChange={e => setTags(e.target.value.replace(/ +/g, ""))}
            />
            <Flex fontSize="xs" mt={1}>
              <Text color="gray.400">
                Use comma (,) to seperate the tags. Maximum 5 tags./80
              </Text>
              <Text
                ml="auto"
                color={tags.split(',').length > 5 ? 'red.400' : 'gray.400'}
              >
                {tags.split(',').length}/5
              </Text>
            </Flex>
          </Box>
        </Flex>
      </SimpleGrid>
      <Flex
        mt={10}
        pt={10}
        borderTopWidth="1px"
        borderTopColor="gray.200"
        justifyContent="space-between"
      >
        <Button variant="outline">Cancel</Button>
        <Button colorScheme="teal" onClick={() => save()}>Save & Continue</Button>
      </Flex>
    </Box>
  );
};

export default Step1Overview;
