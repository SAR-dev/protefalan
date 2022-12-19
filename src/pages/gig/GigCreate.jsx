import React, { useState, useEffect } from "react";
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
import { clearGigCache, saveLocalGigId, getLocalGigId, saveLocalGig, saveLocalPackages, getLocalGig, getLocalPackages } from "../../helpers"
import { createGig, createBulkPackages } from "../../api"
import { useHistory } from "react-router-dom";

const GigCreate = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

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
    description: "",
    duration_in_days: "",
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
    description: "",
    duration_in_days: "",
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
    description: "",
    duration_in_days: "",
    no_of_pages: 1,
    revisions: 1,
    responsive: false,
    prototype: false,
    content_upload: false,
    convert_to: false,
    source_file: false,
    price: 1,
  });

  const [features, setFeatures] = useState([]);
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

  const submit = () => {
    setLoading(true)
    const gigData = {
      title: title,
      tags: tags,
      category: category,
      description: description,
      faq: faq,
      requirements: requirements,
      images: images,
      videos: videos,
      documents: documents,
      extra_services: extra_services,
      features: features
    }
    const gig = {
      title: title,
      tags: tags.split(','),
      category: category,
      description: description,
      faq: faq.map(e => JSON.stringify(e)),
      requirements: requirements.map(e => JSON.stringify(e)),
      images: images.map(image => image.id),
      videos: videos,
      documents: documents,
      extra_services: extra_services.filter(service => features.includes(service.id)).map(e => e.name),
    }
    const packages = [{ ...basic }, { ...standard }, { ...premium }]
    saveLocalGig(gigData)
    saveLocalPackages(packages)

    createGig(gig).then((res) => {
      if (res.error) {
        setLoading(false)
        console.log(res.error)
      } else {
        saveLocalGigId(res.id)
        const gigId = getLocalGigId()
        const p = packages.map(e => {
          return { ...e, gig: gigId }
        })
        createBulkPackages(p).then(r => {
          if (res.error) {
            setLoading(false)
            console.log(r.error)
          } else {
            setLoading(false)
            clearGigCache()
            history.push(`/gig/${gigId}`)
          }
        })
      }
    })
  }

  useEffect(() => {
    const g = getLocalGig();
    const p = getLocalPackages()
    if (g) {
      if (g.title) {
        setTitle(g.title)
      }
      if (g.tags) {
        setTags(g.tags)
      }
      if (g.category) {
        setCategory(g.category)
      }
      if (g.description) {
        setDescription(g.description)
      }
      if (g.faq) {
        setFaq(g.faq)
      }
      if (g.requirements) {
        setRequirements(g.requirements)
      }
      if (g.images) {
        setImages(g.images)
      }
      if (g.videos) {
        setVideos(g.videos)
      }
      if (g.documents) {
        setDocuments(g.documents)
      }
      if (g.extra_services) {
        set_extra_services(g.extra_services)
      }
      if (g.features) {
        setFeatures(g.features)
      }
    } else {
      setDescription('<p></p>')
    }
    if (p) {
      if (p[0]) {
        setBasic({ ...p[0] })
      }
      if (p[1]) {
        setStandard({ ...p[1] })
      }
      if (p[2]) {
        setPremium({ ...p[2] })
      }
    }
  }, []);

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
                features={features}
                setFeatures={setFeatures}
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
              <Step6Publish submit={submit} loading={loading} />
            </Box>
          </GridItem>
        </Grid>
      </NavLayout>
    </AuthLayout>
  );
};

export default GigCreate;
