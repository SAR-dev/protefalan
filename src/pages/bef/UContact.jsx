import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react';
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { FaGithub, FaDiscord, FaFacebook } from 'react-icons/fa';
import UnAuthLayout from '../../layouts/UnAuthLayout';

export default function UContact() {
  return (
    <UnAuthLayout>
      <Container
        bg="#9DC4FB"
        maxW="full"
        mt={0}
        centerContent
        overflow="hidden"
      >
        <Flex my={16}>
          <Box bg="white" borderRadius="lg" w="600px" mx="auto">
            <Box m={8} color="#0B0E3F">
              <VStack spacing={5}>
                <Box>
                  <Text
                    mb={2}
                    fontSize={'xl'}
                    fontWeight={'semibold'}
                    color={'gray.700'}
                  >
                    Contact Us!
                  </Text>
                  <Text color={'gray.500'} fontSize={'sm'}>
                    Send us a message. We will get back to you as soon as
                    possible. Advance thanks!
                  </Text>
                </Box>
                <FormControl id="name">
                  <FormLabel>Your Name</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement
                      pointerEvents="none"
                      children={<BsPerson color="gray.800" />}
                    />
                    <Input type="text" size="md" />
                  </InputGroup>
                </FormControl>
                <FormControl id="mobile">
                  <FormLabel>Contact No</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement
                      pointerEvents="none"
                      children={<AiOutlinePhone color="gray.800" />}
                    />
                    <Input type="text" size="md" />
                  </InputGroup>
                </FormControl>
                <FormControl id="name">
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    borderColor="gray.300"
                    _hover={{
                      borderRadius: 'gray.300',
                    }}
                    placeholder="message"
                  />
                </FormControl>
                <FormControl id="name" float="right">
                  <Button
                    variant="solid"
                    bg="#0D74FF"
                    color="white"
                    _hover={{}}
                  >
                    Send Message
                  </Button>
                </FormControl>
              </VStack>
            </Box>
          </Box>
        </Flex>
      </Container>
    </UnAuthLayout>
  );
}
