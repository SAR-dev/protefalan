import { useState } from 'react';
import { Flex, Box, Button, Text, List, ListIcon, ListItem, UnorderedList } from '@chakra-ui/react';
import { WarningTwoIcon } from "@chakra-ui/icons"
import { parseText, capitalizeFirstLetter } from '../helpers'

const Step6Publish = ({ name, submit, loading, error, setError }) => {
  return (
    <Box p={10} borderWidth="1px" borderColor="gray.200" rounded="md">
      <Text
        fontSize="2xl"
        color="blue.500"
        fontWeight="semibold"
        textAlign="center"
        mb={2}
      >
        ALMOST THERE
      </Text>
      <Text color="gray.700" textAlign="center" w="350px" mx="auto" mb={5}>
        Let's {name.toLowerCase()} your gig and roll some buyers in!
      </Text>
      <Flex justifyContent="center">
        <Button onClick={submit} colorScheme="teal" isLoading={loading}>{name}</Button>
      </Flex>

      {Object.keys(error).length !== 0  && (
        <Box p={5} mt={5} rounded="md" bg="red.100" >
          <Text mb={5} px={5}>Fix these errors:</Text>
          <UnorderedList spacing={3} pl={10}>
            {Object.keys(error).map((el, i) => (
              <ListItem key={i}>
                {`${capitalizeFirstLetter(el.split("_").join(" "))} : ${error[el].join(", ")}`}
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
      )}
    </Box>
  );
};

export default Step6Publish;
