import { useState, useRef, forwardRef } from 'react';
import {
  Flex,
  Box,
  Button,
  Text,
  SimpleGrid,
  Avatar,
  Textarea,
  Select,
  Input,
  InputGroup,
  InputLeftElement,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  UnorderedList,
  ListItem,
  useToast,
} from '@chakra-ui/react';
import { parseText } from '../helpers';
import ReactDatePicker from 'react-datepicker';
import { submitOrder } from '../api';

const PlaceOrder = ({ label, packageName, price, requirements, packageId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const [loading, setLoading] = useState(false)
  const toast = useToast()

  const [note, setNote] = useState('');
  const [due_on, setDueOn] = useState(new Date(new Date().setDate(new Date().getDate() + 15)));

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <Button w="100%" colorScheme="blue" onClick={onClick} ref={ref}>
      {value}
    </Button>
  ));

  const submit = () => {
    setLoading(true)
    const data = {
      package: packageId,
      note,
      due_on
    }
    submitOrder(data).then(res => {
      if (res.error) {
        toast({
          title: "Order failed!",
          description: res.error.detail,
          status: "error",
          position: "bottom-left",
          duration: 9000,
          isClosable: true,
        });
        setLoading(false)
      } else {
        toast({
          title: "Ordered!",
          description: "Order placed.",
          status: "success",
          position: "bottom-left",
          duration: 9000,
          isClosable: true,
        });
        setNote("")
        setDueOn()
        setLoading(false)
        onClose()
      }
    })
  }

  return (
    <>
      <Button w="100%" ref={btnRef} colorScheme='teal' onClick={onOpen}>
        {label}
      </Button>

      <Drawer
        isOpen={isOpen}
        placement='left'
        size="xl"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Place an order</DrawerHeader>

          <DrawerBody>
            <Text color="gray.500">
              Hi, please read the info below before placing an order.
            </Text>
            <Box w="100%" h="1px" bg="gray.200" my={5} />
            <Text color="gray.700" fontWeight="semibold">
              Please note that these are the requirements for starting the order
            </Text>
            <Box mt={5}>
              <Box bg="gray.700" color="white" p={5}>
                <Text fontWeight="semibold">
                  Package name: {packageName}
                </Text>
                <Text fontWeight="semibold">
                  Price: ${price}
                </Text>
              </Box>

              <SimpleGrid columns={1} spacing={3}>
                {requirements.map((el, i) => (
                  <Box bg="gray.100" p={5} rounded="md" whiteSpace="pre-wrap" key={i}>
                    {i + 1} . {parseText(el)}
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
            <Text mt={5} color="gray.700" fontWeight="semibold">
              If you have anything to let the seller know write below
            </Text>
            <Textarea
              placeholder="Add a note..."
              h="120px"
              my={2}
              value={note}
              onChange={e => setNote(e.target.value)}
            />
            <Flex alignItems="center">
              <Text color="gray.500" ml="auto">
                {note.length}/350
              </Text>
            </Flex>
            <Box>
              <Text color="gray.700" fontWeight="semibold" mb={2}>
                When do you need the order delivered?
              </Text>
              <Box border="1px solid #ccc" p={1} w="200px">
                <ReactDatePicker
                  selected={due_on}
                  onChange={(date) => setDueOn(date)}
                  customInput={<CustomInput />}
                />
              </Box>
            </Box>
          </DrawerBody>

          <DrawerFooter>
            <Button loading={loading} variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button loading={loading} colorScheme='blue' onClick={submit}>Send Proposal</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default PlaceOrder;
