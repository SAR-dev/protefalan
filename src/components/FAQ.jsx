import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react';

const FAQ = () => {
  const data = [
    {
      question: 'Will my website be mobile-friendly?',
      answer:
        'Absolutely! Having a mobile-friendly website is a must! I work hard to ensure your website looks great on a variety of devices.',
    },
    {
      question: 'Does any package include domain and hosting?',
      answer:
        'No, Domain and hosting are not included in any package, but I can do domain research (for free) and find/setup the perfect hosting plan for your business (paid).',
    },
    {
      question: 'Will you maintain my website for me?',
      answer: 'Yes, I can. I provide on-going support to many of my clients.',
    },
    {
      question:
        "I don't need a new website, can you migrate my existing website to tailwind css?",
      answer:
        "Yes, I can migrate any website to a tailwind CSS website. Contact me and let's discuss.",
    },
  ];
  return (
    <Accordion allowToggle>
      {data.map((el, i) => (
        <AccordionItem color="gray.700" key={i}>
            <AccordionButton p="0px" _focus={{}} _hover={{}}>
              <Box flex="1" textAlign="left" fontSize="lg" py={3}>
                {el.question}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          <AccordionPanel pb={4} pl="0px">
            {el.answer}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQ;
