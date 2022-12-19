import React, { useState } from "react";
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
  StackDivider,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import NavLayout from "../../layouts/NavLayout";
import Step1Overview from "../../components/Step1Overview";
import Step2Pricing from "../../components/Step2Pricing";
import Step3Description from "../../components/Step3Description";
import Step4Requirements from "../../components/Step4Requirements";
import Step5Gallery from "../../components/Step5Gallery";
import Step6Publish from "../../components/Step6Publish";
import AuthLayout from "../../layouts/AuthLayout";

const GigCreate = () => {
  const menus = [
    { name: "Overview", step: 1 },
    { name: "Scope & Pricing", step: 2 },
    { name: "Description & FAQ", step: 3 },
    { name: "Requirements", step: 4 },
    { name: "Gallery", step: 5 },
    { name: "Publish", step: 6 },
  ];

  const [active, setActive] = useState(1);

  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [category, setCategory] = useState();

  const [basic, setBasic] = useState({
    name: "",
    details: "",
    delivery_time: "",
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
    name: "",
    details: "",
    delivery_time: "",
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
    name: "",
    details: "",
    delivery_time: "",
    no_of_pages: 1,
    revisions: 1,
    responsive: false,
    prototype: false,
    content_upload: false,
    convert_to: false,
    source_file: false,
    price: 1,
  });

  const [extra_services, set_extra_services] = useState([
    { id: 1, name: "Additional Pages or Screens" },
    { id: 2, name: "Extra Fast Delivery" },
    { id: 3, name: "Additional Custom Asset Design" },
    { id: 4, name: "Color Pallete" },
    { id: 5, name: "Video Explanation" },
    { id: 6, name: "Hosting" },
    { id: 7, name: "Maintanance" },
  ]);

  const [description, setDescription] = useState('');
  const [faq, setFaq] = useState([]);

  const [requirements, setRequirements] = useState([]);

  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [documents, setDocuments] = useState([]);

  return (
    <AuthLayout>
    <NavLayout>
      <Grid
        templateColumns="repeat(9, 1fr)"
        gap={10}
        mb={10}
        maxW="1200px"
        bg="#fafafa"
        p={5}
        rounded="md"
        mx="auto"
      >
        <GridItem colSpan={2}>
          <SimpleGrid columns={1} spacing={5}>
            {menus.map((el, i) => (
              <Button
                fontWeight="normal"
                justifyContent="start"
                isDisabled={el.step > active}
                onClick={() => setActive(el.step)}
                colorScheme="teal"
                key={i}
              >
                <Flex
                  h="25px"
                  w="25px"
                  bg="white"
                  color="teal.500"
                  fontSize="sm"
                  rounded="full"
                  justifyContent="center"
                  alignItems="center"
                  mr={2}
                >
                  <Text>0{el.step}</Text>
                </Flex>
                {el.name}
              </Button>
            ))}
          </SimpleGrid>
        </GridItem>
        <GridItem colSpan={7} bg="white">
          <Box d={active !== 1 && "none"}>
            <Step1Overview
              title={title}
              setTitle={setTitle}
              tags={tags}
              setTags={setTags}
              category={category}
              setCategory={setCategory}
              save={() => setActive(2)}
            />
          </Box>
          <Box d={active !== 2 && "none"}>
            <Step2Pricing
              basic={basic}
              setBasic={setBasic}
              standard={standard}
              setStandard={setStandard}
              premium={premium}
              setPremium={setPremium}
              extra_services={extra_services}
              set_extra_services={set_extra_services}
              save={() => setActive(3)}
            />
          </Box>
          <Box d={active !== 3 && "none"}>
            <Step3Description description={description} setDescription={setDescription} faq={faq} setFaq={setFaq} save={() => setActive(4)} />
          </Box>
          <Box d={active !== 4 && "none"}>
            <Step4Requirements requirements={requirements} setRequirements={setRequirements} save={() => setActive(5)} />
          </Box>
          <Box d={active !== 5 && "none"}>
            <Step5Gallery images={images} setImages={setImages} videos={videos} setVideos={setVideos} documents={documents} setDocuments={setDocuments} save={() => setActive(6)} />
          </Box>
          <Box d={active !== 6 && "none"}>
            <Step6Publish />
          </Box>
        </GridItem>
      </Grid>
    </NavLayout>
    </AuthLayout>
  );
};

export default GigCreate;
