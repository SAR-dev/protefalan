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
  NumberInput,
  NumberInputField,
  Checkbox,
  CheckboxGroup,
} from '@chakra-ui/react';

const Step2Pricing = ({ save }) => {
  const delivery_times = ['1 Day', '3 Days', '1 Week', '1 Month'];
  const [basic, setBasic] = useState({
    name: '',
    details: '',
    delivery_time: '',
    no_of_pages: 1,
    revisions: 1,
    responsive: false,
    prototype: false,
    content_upload: false,
    convert_to: false,
    source_file: false,
    price: 1,
  });
  const [standard, setStandard] = useState({
    name: '',
    details: '',
    delivery_time: '',
    no_of_pages: 1,
    revisions: 1,
    responsive: false,
    prototype: false,
    content_upload: false,
    convert_to: false,
    source_file: false,
    price: 1,
  });
  const [premium, setPremium] = useState({
    name: '',
    details: '',
    delivery_time: '',
    no_of_pages: 1,
    revisions: 1,
    responsive: false,
    prototype: false,
    content_upload: false,
    convert_to: false,
    source_file: false,
    price: 1,
  });

  const format = val => `$` + val;
  const parse = val => val.replace(/^\$/, '');

  const [additional_features, set_additional_features] = useState(
    [
      { id: 1, name: 'Additional Pages or Screens' },
      { id: 2, name: 'Extra Fast Delivery' },
      { id: 3, name: 'Additional Custom Asset Design' },
      { id: 4, name: 'Color Pallete' },
      { id: 5, name: 'Prototype' },
    ]
  )
  const [features, setFeatures] = useState([]);
  const handleFeatures = el => {
    const f = features;
    if (f.indexOf(el.id) === -1) {
      f.push(el.id);
    } else {
      f.splice(f.indexOf(el.id), 1);
    }
    setFeatures(f);
    console.log(f);
  };

  const [extra, setExtra] = useState("")
  const addExtra = () => {
    set_additional_features(prevState => [...prevState, {id: Math.floor(Math.random() * (100 - 50) + 50), name: extra}])
    setExtra("")
  }

  return (
    <Box p={10} borderWidth="1px" borderColor="gray.200" rounded="md">
      <Text
        fontSize="xl"
        color="gray.700"
        fontWeight="semibold"
        mb={5}
        pb={5}
        borderBottomWidth="1px"
        borderBottomColor="gray.200"
      >
        Packages
      </Text>
      <Box
        w="100%"
        borderWidth="1px"
        borderColor="gray.200"
        rounded="md"
        mb={10}
      >
        <SimpleGrid columns={4} borderBottomWidth="1px" borderColor="gray.200">
          <Box p={2} borderRightWidth="1px" borderColor="gray.200"></Box>
          <Box p={2} borderRightWidth="1px" borderColor="gray.200">
            <Text fontWeight="semibold" color="gray.700">
              Basic
            </Text>
          </Box>
          <Box p={2} borderRightWidth="1px" borderColor="gray.200">
            <Text fontWeight="semibold" color="gray.700">
              Standard
            </Text>
          </Box>
          <Box p={2}>
            <Text fontWeight="semibold" color="gray.700">
              Premium
            </Text>
          </Box>
        </SimpleGrid>
        <SimpleGrid columns={4} borderBottomWidth="1px" borderColor="gray.200">
          <Box p={2} borderRightWidth="1px" borderColor="gray.200">
            <Text color="gray.700">Name</Text>
          </Box>
          <Box p={2} borderRightWidth="1px" borderColor="gray.200">
            <Input
              placeholder="Name of package"
              fontSize="sm"
              value={basic.name}
              onChange={e =>
                setBasic(prevState => ({
                  ...prevState,
                  name: e.target.value,
                }))
              }
            />
          </Box>
          <Box p={2} borderRightWidth="1px" borderColor="gray.200">
            <Input
              placeholder="Name of package"
              fontSize="sm"
              value={standard.name}
              onChange={e =>
                setStandard(prevState => ({
                  ...prevState,
                  name: e.target.value,
                }))
              }
            />
          </Box>
          <Box p={2}>
            <Input
              placeholder="Name of package"
              fontSize="sm"
              value={premium.name}
              onChange={e =>
                setPremium(prevState => ({
                  ...prevState,
                  name: e.target.value,
                }))
              }
            />
          </Box>
        </SimpleGrid>
        <SimpleGrid columns={4} borderBottomWidth="1px" borderColor="gray.200">
          <Box p={2} borderRightWidth="1px" borderColor="gray.200">
            <Text color="gray.700">Details</Text>
          </Box>
          <Box p={2} borderRightWidth="1px" borderColor="gray.200">
            <Textarea
              h="100%"
              placeholder="Details of your offering"
              fontSize="sm"
              value={basic.details}
              onChange={e =>
                setBasic(prevState => ({
                  ...prevState,
                  details: e.target.value,
                }))
              }
            />
          </Box>
          <Box p={2} borderRightWidth="1px" borderColor="gray.200">
            <Textarea
              h="100%"
              placeholder="Details of your offering"
              fontSize="sm"
              value={standard.details}
              onChange={e =>
                setStandard(prevState => ({
                  ...prevState,
                  details: e.target.value,
                }))
              }
            />
          </Box>
          <Box p={2}>
            <Textarea
              h="100%"
              placeholder="Details of your offering"
              fontSize="sm"
              value={premium.details}
              onChange={e =>
                setPremium(prevState => ({
                  ...prevState,
                  details: e.target.value,
                }))
              }
            />
          </Box>
        </SimpleGrid>
        <SimpleGrid columns={4} borderBottomWidth="1px" borderColor="gray.200">
          <Box p={2} borderRightWidth="1px" borderColor="gray.200">
            <Text color="gray.700">Delivery Time</Text>
          </Box>
          <Box p={2} borderRightWidth="1px" borderColor="gray.200">
            <Select
              value={basic.delivery_time}
              onChange={e =>
                setBasic(prevState => ({
                  ...prevState,
                  delivery_time: e.target.value,
                }))
              }
            >
              <option value="" disabled selected>
                Select Time
              </option>
              {delivery_times.map((el, i) => (
                <option
                  value={el.name}
                  selected={el === basic.delivery_time}
                  key={i}
                >
                  {el}
                </option>
              ))}
            </Select>
          </Box>
          <Box p={2} borderRightWidth="1px" borderColor="gray.200">
            <Select
              value={standard.delivery_time}
              onChange={e =>
                setStandard(prevState => ({
                  ...prevState,
                  delivery_time: e.target.value,
                }))
              }
            >
              <option value="" disabled selected>
                Select Time
              </option>
              {delivery_times.map((el, i) => (
                <option
                  value={el.name}
                  selected={el === standard.delivery_time}
                  key={i}
                >
                  {el}
                </option>
              ))}
            </Select>
          </Box>
          <Box p={2}>
            <Select
              value={premium.delivery_time}
              onChange={e =>
                setPremium(prevState => ({
                  ...prevState,
                  delivery_time: e.target.value,
                }))
              }
            >
              <option value="" disabled selected>
                Select Time
              </option>
              {delivery_times.map((el, i) => (
                <option
                  value={el.name}
                  selected={el === premium.delivery_time}
                  key={i}
                >
                  {el}
                </option>
              ))}
            </Select>
          </Box>
        </SimpleGrid>
        <SimpleGrid columns={4} borderBottomWidth="1px" borderColor="gray.200">
          <Box p={2} borderRightWidth="1px" borderColor="gray.200">
            <Text color="gray.700">No of Pages/Screens</Text>
          </Box>
          <Box p={2} borderRightWidth="1px" borderColor="gray.200">
            <NumberInput
              min={1}
              defaultValue={1}
              value={basic.no_of_pages}
              onChange={e =>
                setBasic(prevState => ({
                  ...prevState,
                  no_of_pages: e,
                }))
              }
            >
              <NumberInputField />
            </NumberInput>
          </Box>
          <Box p={2} borderRightWidth="1px" borderColor="gray.200">
            <NumberInput
              min={1}
              defaultValue={1}
              value={standard.no_of_pages}
              onChange={e =>
                setStandard(prevState => ({
                  ...prevState,
                  no_of_pages: e,
                }))
              }
            >
              <NumberInputField />
            </NumberInput>
          </Box>
          <Box p={2}>
            <NumberInput
              min={1}
              defaultValue={1}
              value={premium.no_of_pages}
              onChange={e =>
                setPremium(prevState => ({
                  ...prevState,
                  no_of_pages: e,
                }))
              }
            >
              <NumberInputField />
            </NumberInput>
          </Box>
        </SimpleGrid>
        <SimpleGrid columns={4} borderBottomWidth="1px" borderColor="gray.200">
          <Box p={2} borderRightWidth="1px" borderColor="gray.200">
            <Text color="gray.700">No of Revisions</Text>
          </Box>
          <Box p={2} borderRightWidth="1px" borderColor="gray.200">
            <NumberInput
              min={1}
              defaultValue={1}
              value={basic.revisions}
              onChange={e =>
                setBasic(prevState => ({
                  ...prevState,
                  revisions: e,
                }))
              }
            >
              <NumberInputField />
            </NumberInput>
          </Box>
          <Box p={2} borderRightWidth="1px" borderColor="gray.200">
            <NumberInput
              min={1}
              defaultValue={1}
              value={standard.revisions}
              onChange={e =>
                setStandard(prevState => ({
                  ...prevState,
                  revisions: e,
                }))
              }
            >
              <NumberInputField />
            </NumberInput>
          </Box>
          <Box p={2}>
            <NumberInput
              min={1}
              defaultValue={1}
              value={premium.revisions}
              onChange={e =>
                setPremium(prevState => ({
                  ...prevState,
                  revisions: e,
                }))
              }
            >
              <NumberInputField />
            </NumberInput>
          </Box>
        </SimpleGrid>
        <SimpleGrid columns={4} borderBottomWidth="1px" borderColor="gray.200">
          <Box p={2} borderRightWidth="1px" borderColor="gray.200">
            <Text color="gray.700">Responsive Design</Text>
          </Box>
          <Flex
            p={4}
            borderRightWidth="1px"
            borderColor="gray.200"
            justifyContent="center"
            alignItems="center"
          >
            <Checkbox
              size="lg"
              value={basic.responsive}
              onChange={e =>
                setBasic(prevState => ({
                  ...prevState,
                  responsive: e.target.checked,
                }))
              }
            />
          </Flex>
          <Flex
            p={4}
            borderRightWidth="1px"
            borderColor="gray.200"
            justifyContent="center"
            alignItems="center"
          >
            <Checkbox
              size="lg"
              value={standard.responsive}
              onChange={e =>
                setStandard(prevState => ({
                  ...prevState,
                  responsive: e.target.checked,
                }))
              }
            />
          </Flex>
          <Flex p={4} justifyContent="center" alignItems="center">
            <Checkbox
              size="lg"
              value={premium.responsive}
              onChange={e =>
                setPremium(prevState => ({
                  ...prevState,
                  responsive: e.target.checked,
                }))
              }
            />
          </Flex>
        </SimpleGrid>
        <SimpleGrid columns={4} borderBottomWidth="1px" borderColor="gray.200">
          <Box p={2} borderRightWidth="1px" borderColor="gray.200">
            <Text color="gray.700">Prototype</Text>
          </Box>
          <Flex
            p={4}
            borderRightWidth="1px"
            borderColor="gray.200"
            justifyContent="center"
            alignItems="center"
          >
            <Checkbox
              size="lg"
              value={basic.prototype}
              onChange={e =>
                setBasic(prevState => ({
                  ...prevState,
                  prototype: e.target.checked,
                }))
              }
            />
          </Flex>
          <Flex
            p={4}
            borderRightWidth="1px"
            borderColor="gray.200"
            justifyContent="center"
            alignItems="center"
          >
            <Checkbox
              size="lg"
              value={standard.prototype}
              onChange={e =>
                setStandard(prevState => ({
                  ...prevState,
                  prototype: e.target.checked,
                }))
              }
            />
          </Flex>
          <Flex p={4} justifyContent="center" alignItems="center">
            <Checkbox
              size="lg"
              value={premium.prototype}
              onChange={e =>
                setPremium(prevState => ({
                  ...prevState,
                  prototype: e.target.checked,
                }))
              }
            />
          </Flex>
        </SimpleGrid>
        <SimpleGrid columns={4} borderBottomWidth="1px" borderColor="gray.200">
          <Box p={2} borderRightWidth="1px" borderColor="gray.200">
            <Text color="gray.700">Content Upload</Text>
          </Box>
          <Flex
            p={4}
            borderRightWidth="1px"
            borderColor="gray.200"
            justifyContent="center"
            alignItems="center"
          >
            <Checkbox
              size="lg"
              value={basic.content_upload}
              onChange={e =>
                setBasic(prevState => ({
                  ...prevState,
                  content_upload: e.target.checked,
                }))
              }
            />
          </Flex>
          <Flex
            p={4}
            borderRightWidth="1px"
            borderColor="gray.200"
            justifyContent="center"
            alignItems="center"
          >
            <Checkbox
              size="lg"
              value={standard.content_upload}
              onChange={e =>
                setStandard(prevState => ({
                  ...prevState,
                  content_upload: e.target.checked,
                }))
              }
            />
          </Flex>
          <Flex p={4} justifyContent="center" alignItems="center">
            <Checkbox
              size="lg"
              value={premium.content_upload}
              onChange={e =>
                setPremium(prevState => ({
                  ...prevState,
                  content_upload: e.target.checked,
                }))
              }
            />
          </Flex>
        </SimpleGrid>
        <SimpleGrid columns={4} borderBottomWidth="1px" borderColor="gray.200">
          <Box p={2} borderRightWidth="1px" borderColor="gray.200">
            <Text color="gray.700">Convert to HTML/CSS</Text>
          </Box>
          <Flex
            p={4}
            borderRightWidth="1px"
            borderColor="gray.200"
            justifyContent="center"
            alignItems="center"
          >
            <Checkbox
              size="lg"
              value={basic.convert_to}
              onChange={e =>
                setBasic(prevState => ({
                  ...prevState,
                  convert_to: e.target.checked,
                }))
              }
            />
          </Flex>
          <Flex
            p={4}
            borderRightWidth="1px"
            borderColor="gray.200"
            justifyContent="center"
            alignItems="center"
          >
            <Checkbox
              size="lg"
              value={standard.convert_to}
              onChange={e =>
                setStandard(prevState => ({
                  ...prevState,
                  convert_to: e.target.checked,
                }))
              }
            />
          </Flex>
          <Flex p={4} justifyContent="center" alignItems="center">
            <Checkbox
              size="lg"
              value={premium.convert_to}
              onChange={e =>
                setPremium(prevState => ({
                  ...prevState,
                  convert_to: e.target.checked,
                }))
              }
            />
          </Flex>
        </SimpleGrid>
        <SimpleGrid columns={4} borderBottomWidth="1px" borderColor="gray.200">
          <Box p={2} borderRightWidth="1px" borderColor="gray.200">
            <Text color="gray.700">Source File</Text>
          </Box>
          <Flex
            p={4}
            borderRightWidth="1px"
            borderColor="gray.200"
            justifyContent="center"
            alignItems="center"
          >
            <Checkbox
              size="lg"
              value={basic.source_file}
              onChange={e =>
                setBasic(prevState => ({
                  ...prevState,
                  source_file: e.target.checked,
                }))
              }
            />
          </Flex>
          <Flex
            p={4}
            borderRightWidth="1px"
            borderColor="gray.200"
            justifyContent="center"
            alignItems="center"
          >
            <Checkbox
              size="lg"
              value={standard.source_file}
              onChange={e =>
                setStandard(prevState => ({
                  ...prevState,
                  source_file: e.target.checked,
                }))
              }
            />
          </Flex>
          <Flex p={4} justifyContent="center" alignItems="center">
            <Checkbox
              size="lg"
              value={premium.source_file}
              onChange={e =>
                setPremium(prevState => ({
                  ...prevState,
                  source_file: e.target.checked,
                }))
              }
            />
          </Flex>
        </SimpleGrid>
        <SimpleGrid columns={4}>
          <Box p={2} borderRightWidth="1px" borderColor="gray.200">
            <Text color="gray.700">Price in Dollar</Text>
          </Box>
          <Box p={2} borderRightWidth="1px" borderColor="gray.200">
            <NumberInput
              value={format(basic.price)}
              onChange={e =>
                setBasic(prevState => ({
                  ...prevState,
                  price: parse(e),
                }))
              }
              min={1}
              defaultValue={1}
            >
              <NumberInputField />
            </NumberInput>
          </Box>
          <Box p={2} borderRightWidth="1px" borderColor="gray.200">
            <NumberInput
              value={format(standard.price)}
              onChange={e =>
                setStandard(prevState => ({
                  ...prevState,
                  price: parse(e),
                }))
              }
              min={1}
              defaultValue={1}
            >
              <NumberInputField />
            </NumberInput>
          </Box>
          <Box p={2} borderRightWidth="1px" borderColor="gray.200">
            <NumberInput
              value={format(premium.price)}
              onChange={e =>
                setPremium(prevState => ({
                  ...prevState,
                  price: parse(e),
                }))
              }
              min={1}
              defaultValue={1}
            >
              <NumberInputField />
            </NumberInput>
          </Box>
        </SimpleGrid>
      </Box>
      <Text
        fontSize="xl"
        color="gray.700"
        fontWeight="semibold"
        mb={5}
        pb={5}
        borderBottomWidth="1px"
        borderBottomColor="gray.200"
      >
        Add Extra Service
      </Text>
      <Box
        w="100%"
        borderWidth="1px"
        borderColor="gray.200"
        rounded="md"
        mb={10}
      >
        <CheckboxGroup value={features}>
          {additional_features.map((el, i) => (
            <Flex p={5} borderBottomWidth="1px" borderColor="gray.200" key={i}>
              <Checkbox value={el.id} onChange={() => handleFeatures(el)} />
              <Text color="gray.700" ml={2}>
                {el.name}
              </Text>
            </Flex>
          ))}
        </CheckboxGroup>
        <Flex p={5}>
          <Input placeholder='Add extra gig' mr={2} value={extra} onChange={(e) => setExtra(e.target.value)} />
          <Button colorScheme="blue" onClick={() => addExtra()}>Save</Button>
        </Flex>
      </Box>
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

export default Step2Pricing;
