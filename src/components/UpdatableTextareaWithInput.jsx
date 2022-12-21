import { Box, Button, HStack, SimpleGrid, Input, Textarea } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { MdModeEditOutline, MdDeleteOutline } from "react-icons/md"

const UpdatableTextareaWithInput = ({ input, textarea, arr, setArr, index, children, ...rest }) => {
  const [char, setChar] = useState(input)
  const [text, setText] = useState(textarea)

  const [typing, setTyping] = useState(false)

  const update = () => {
    const t = arr;
    t[index] = { question: char, answer: text };
    setArr([...t])
    setTyping(false)
  }

  const remove = () => {
    const t = arr;
    t.splice(index, 1)
    setArr([...t])
    setTyping(false)
  }

  return (
    <Box {...rest}>
      {typing ? (
        <SimpleGrid columns={1} spacing={3}>
          <Input
            bg="white"
            placeholder="Question"
            value={char}
            onChange={e => setChar(e.target.value)}
          />
          <Textarea
            bg="white"
            value={text}
            whiteSpace="pre-wrap"
            onChange={e => setText(e.target.value)}
            h="120px"
          />
          <Button colorScheme="blue" onClick={() => update()} w="100%">
            Update
          </Button>
        </SimpleGrid>
      ) : (<>
        <Box pos="relative">
          {children}
        </Box>
        <HStack spacing={3} mt={1} >
          <Button size="xs" leftIcon={<MdModeEditOutline />} onClick={() => setTyping(true)}>Update</Button>
          <Button size="xs" leftIcon={<MdDeleteOutline />} onClick={() => remove()}>Delete</Button>
        </HStack>
      </>)}
    </Box >
  )
}

export default UpdatableTextareaWithInput