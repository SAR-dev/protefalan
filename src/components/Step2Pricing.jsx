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

const Step2Pricing = ({ basic, setBasic, standard, setStandard, premium, setPremium, features, setFeatures, extra_services, set_extra_services, save }) => {
  const delivery_list = ['1', '3', '7', '15', '30'];

  const format = val => `$` + val;
  const parse = val => val.replace(/^\$/, '');

  const handleFeatures = el => {
    const f = features;
    if (f.indexOf(el.id) === -1) {
      f.push(el.id);
    } else {
      f.splice(f.indexOf(el.id), 1);
    }
    setFeatures(f);
  };

  const [extra, setExtra] = useState("")
  const addExtra = () => {
    if (extra.length > 0) {
      set_extra_services(prevState => [...prevState, { id: Math.floor(Math.random() * (100 - 50) + 50), name: extra }])
      setExtra("")
    }
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
              value={basic.title}
              onChange={e =>
                setBasic(prevState => ({
                  ...prevState,
                  title: e.target.value,
                }))
              }
            />
          </Box>
          <Box p={2} borderRightWidth="1px" borderColor="gray.200">
            <Input
              placeholder="Name of package"
              fontSize="sm"
              value={standard.title}
              onChange={e =>
                setStandard(prevState => ({
                  ...prevState,
                  title: e.target.value,
                }))
              }
            />
          </Box>
          <Box p={2}>
            <Input
              placeholder="Name of package"
              fontSize="sm"
              value={premium.title}
              onChange={e =>
                setPremium(prevState => ({
                  ...prevState,
                  title: e.target.value,
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
              h="200px"
              placeholder="Details of your offering"
              fontSize="sm"
              whiteSpace="pre-wrap"
              value={basic.description}
              onChange={e =>
                setBasic(prevState => ({
                  ...prevState,
                  description: e.target.value,
                }))
              }
            />
          </Box>
          <Box p={2} borderRightWidth="1px" borderColor="gray.200">
            <Textarea
              h="200px"
              placeholder="Details of your offering"
              fontSize="sm"
              whiteSpace="pre-wrap"
              value={standard.description}
              onChange={e =>
                setStandard(prevState => ({
                  ...prevState,
                  description: e.target.value,
                }))
              }
            />
          </Box>
          <Box p={2}>
            <Textarea
              h="200px"
              placeholder="Details of your offering"
              fontSize="sm"
              whiteSpace="pre-wrap"
              value={premium.description}
              onChange={e =>
                setPremium(prevState => ({
                  ...prevState,
                  description: e.target.value,
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
              value={basic.duration_in_days}
              onChange={e =>
                setBasic(prevState => ({
                  ...prevState,
                  duration_in_days: e.target.value,
                }))
              }
            >
              <option value="" disabled selected>
                Select Time
              </option>
              {delivery_list.map((el, i) => (
                <option
                  value={el}
                  selected={el == basic.duration_in_days}
                  key={i}
                >
                  {el} Days
                </option>
              ))}
            </Select>
          </Box>
          <Box p={2} borderRightWidth="1px" borderColor="gray.200">
            <Select
              value={standard.duration_in_days}
              onChange={e =>
                setStandard(prevState => ({
                  ...prevState,
                  duration_in_days: e.target.value,
                }))
              }
            >
              <option value="" disabled selected>
                Select Time
              </option>
              {delivery_list.map((el, i) => (
                <option
                  value={el}
                  selected={el == standard.duration_in_days}
                  key={i}
                >
                  {el} Days
                </option>
              ))}
            </Select>
          </Box>
          <Box p={2}>
            <Select
              value={premium.duration_in_days}
              onChange={e =>
                setPremium(prevState => ({
                  ...prevState,
                  duration_in_days: e.target.value,
                }))
              }
            >
              <option value="" disabled selected>
                Select Time
              </option>
              {delivery_list.map((el, i) => (
                <option
                  value={el}
                  selected={el == premium.duration_in_days}
                  key={i}
                >
                  {el} Days
                </option>
              ))}
            </Select>
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
              isChecked={basic.prototype}
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
              isChecked={standard.prototype}
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
              isChecked={premium.prototype}
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
              isChecked={basic.content_upload}
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
              isChecked={standard.content_upload}
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
              isChecked={premium.content_upload}
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
              isChecked={basic.source_file}
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
              isChecked={standard.source_file}
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
              isChecked={premium.source_file}
              onChange={e =>
                setPremium(prevState => ({
                  ...prevState,
                  source_file: e.target.checked,
                }))
              }
            />
          </Flex>
        </SimpleGrid>
        <SimpleGrid columns={4} borderBottomWidth="1px" borderColor="gray.200">
          <Box p={2} borderRightWidth="1px" borderColor="gray.200">
            <Text color="gray.700">Consultation</Text>
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
              value={basic.consulatation}
              isChecked={basic.consulatation}
              onChange={e =>
                setBasic(prevState => ({
                  ...prevState,
                  consulatation: e.target.checked,
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
              value={standard.consulatation}
              isChecked={standard.consulatation}
              onChange={e =>
                setStandard(prevState => ({
                  ...prevState,
                  consulatation: e.target.checked,
                }))
              }
            />
          </Flex>
          <Flex p={4} justifyContent="center" alignItems="center">
            <Checkbox
              size="lg"
              value={premium.consulatation}
              isChecked={premium.consulatation}
              onChange={e =>
                setPremium(prevState => ({
                  ...prevState,
                  consulatation: e.target.checked,
                }))
              }
            />
          </Flex>
        </SimpleGrid>
        <SimpleGrid columns={4} borderBottomWidth="1px" borderColor="gray.200">
          <Box p={2} borderRightWidth="1px" borderColor="gray.200">
            <Text color="gray.700">Deployment</Text>
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
              value={basic.deployment}
              isChecked={basic.deployment}
              onChange={e =>
                setBasic(prevState => ({
                  ...prevState,
                  deployment: e.target.checked,
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
              value={standard.deployment}
              isChecked={standard.deployment}
              onChange={e =>
                setStandard(prevState => ({
                  ...prevState,
                  deployment: e.target.checked,
                }))
              }
            />
          </Flex>
          <Flex p={4} justifyContent="center" alignItems="center">
            <Checkbox
              size="lg"
              value={premium.deployment}
              isChecked={premium.deployment}
              onChange={e =>
                setPremium(prevState => ({
                  ...prevState,
                  deployment: e.target.checked,
                }))
              }
            />
          </Flex>
        </SimpleGrid>

        <SimpleGrid columns={4} borderBottomWidth="1px" borderColor="gray.200">
          <Box p={2} borderRightWidth="1px" borderColor="gray.200">
            <Text color="gray.700">Integration</Text>
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
              value={basic.integration}
              isChecked={basic.integration}
              onChange={e =>
                setBasic(prevState => ({
                  ...prevState,
                  integration: e.target.checked,
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
              value={standard.integration}
              isChecked={standard.integration}
              onChange={e =>
                setStandard(prevState => ({
                  ...prevState,
                  integration: e.target.checked,
                }))
              }
            />
          </Flex>
          <Flex p={4} justifyContent="center" alignItems="center">
            <Checkbox
              size="lg"
              value={premium.integration}
              isChecked={premium.integration}
              onChange={e =>
                setPremium(prevState => ({
                  ...prevState,
                  integration: e.target.checked,
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
          {extra_services.map((el, i) => (
            <Flex p={5} borderBottomWidth="1px" borderColor="gray.200" key={i}>
              <Checkbox value={el.id} isChecked={features.includes(el.id)} onChange={() => handleFeatures(el)} />
              <Text color="gray.700" ml={2}>
                {el.name}
              </Text>
            </Flex>
          ))}
        </CheckboxGroup>
        <Flex p={5}>
          <Input
            placeholder='Add extra service'
            mr={2}
            onKeyDown={e => {
              if (e.keyCode === 13) {
                addExtra();
              }
            }}
            value={extra}
            onChange={(e) => setExtra(e.target.value)}
          />
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
